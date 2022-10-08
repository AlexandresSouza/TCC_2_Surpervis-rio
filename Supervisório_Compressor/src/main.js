import Vue from 'vue'
import Vuex from 'vuex';
import vuetify from './plugins/vuetify'
import App from './App.vue'

import { store } from './store.js'
import 'typeface-roboto/index.css'
import 'material-design-icons/iconfont/material-icons.css'

import axios from 'axios'
axios.defaults.withCredentials = true;
Object.defineProperty(Vue.prototype, '$http', { value: axios });
Object.defineProperty(Vuex.Store.prototype, '$http', { value: axios });

const signalR = require('@aspnet/signalr');
Object.defineProperty(Vue.prototype, '$signalR', { value: signalR });
Object.defineProperty(Vuex.Store.prototype, '$signalR', { value: signalR });

// OPCIONAL
import moment from 'moment'
Object.defineProperty(Vue.prototype, '$moment', { value: moment });
import MomentTimeZone from "moment-timezone";
window.moment = moment
MomentTimeZone();

// OPCIONAL
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import xRange from 'highcharts/modules/xrange'
import stockInit from 'highcharts/modules/stock'
import dragPanes from 'highcharts/modules/drag-panes'
import exporting from 'highcharts/modules/exporting'
import exportData from 'highcharts/modules/export-data'
import networkGraph from 'highcharts/modules/networkgraph'
xRange(Highcharts);
stockInit(Highcharts);
dragPanes(Highcharts);
exporting(Highcharts);
exportData(Highcharts);
networkGraph(Highcharts);
Vue.use(HighchartsVue);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
