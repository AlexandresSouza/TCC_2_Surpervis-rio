import Vue from 'vue';
import Vuex from 'vuex';
import confirmDialog from './components/ConfirmDialog.vue';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		connecting: false,
		connection: null,
		primeiraConexao: true,
		conexaoPerdida: "SERVIDOR",
		conectadoClp: false,
		roles: [],
		dados: [],
		titulo: 'SISTEMA DE FRIO',
		tituloShort: 'FRIO'
	},
	getters: {

	},
	actions: {
		// ******************************
		// ******* Confirm Dialog *******
		// ******************************
		ConfirmDialog (context, message) {
			return new Promise((resolve, reject) => {
				let dialog = new Vue(confirmDialog);
				dialog.message = message;

				dialog.$once('confirm', callback => {
					dialog.$destroy();
					dialog.$el.remove();
					resolve(callback);
				});

				dialog.$once('cancel', callback => {
					dialog.$destroy();
					dialog.$el.remove();
					reject(callback);
				});
				
				dialog.$mount();
			});
		},

		// *******************************
		// ****** Hub Server Methods *****
		// *******************************
		SelectModel (context) {
			return new Promise((resolve, reject) =>
				context.state.connection.invoke("SelectModel")
					.then(data => resolve(data)).catch(err => reject(err)))
		},

		// ******************************
		// ******** Start SignalR *******
		// ******************************
		async startSignalR (context) {
			var con = new this.$signalR.HubConnectionBuilder()
				.withUrl("path_do_servidor")
				.configureLogging(this.$signalR.LogLevel.Debug)
				.build();

			let reconnectSignalR = async () => {
				context.state.conexaoPerdida = "SERVIDOR";
				setTimeout(async () => await connectSignalR(), 10000);
			}

			let connectSignalR = async () => {
				con.start()
				.then(() => {
					context.state.connecting = false;
					context.state.primeiraConexao = false;
					context.state.connection.invoke("MetodoHub", "Painel_desejado");
				})
				.catch(() => {
					if (!context.state.connecting || context.state.primeiraConexao)
						reconnectSignalR();
				});
			};
	
			con.onclose(() => { 
				if (!context.state.connecting || context.state.primeiraConexao)
					reconnectSignalR();
			});

			// *******************************
			// ****** Hub Client Methods *****
			// *******************************
			
			// StopSignalR
			con.on("StopSignalR", async () => await this.connection.stop());
			
			//Reload DB Data
			con.on("AtualizarValores", function (dados) {
				context.state.dados = dados;
				context.state.conectadoClp = true;
			});

			// *******************************
			// ******* Store Connection ******
			// *******************************
			context.state.connection = con;
			await connectSignalR();
		}
	}
});