<template>
  <div id="app">
      <div class="frame">         
 
      <svg  height="4%" width="100%">
        <rect width="100%" height="100%" fill="#000066"></rect>
          
        <svg y="0%" x="-48.6%" xmlns="http://www.w3.org/2000/svg">
          <Icon SVGFile='./Refrigeracao/img/storage-tank.svg' :red="0.8" id="tank"/>          
        </svg>

        <svg y="0%" x="-37.8%" xmlns="http://www.w3.org/2000/svg">
          <Icon SVGFile='./Refrigeracao/img/comp.svg' :red="0.8" id="comp1"/>          
        </svg>

        <svg y="0%" x="-25.8%" xmlns="http://www.w3.org/2000/svg">
          <Icon SVGFile='./Refrigeracao/img/comp.svg' :red="0.8" id="comp3"/>          
        </svg>

        <svg y="0%" x="-14%" xmlns="http://www.w3.org/2000/svg">
          <Icon SVGFile='./Refrigeracao/img/comp.svg' :red="0.8" id="comp5"/>          
        </svg>

        <svg y="0%" x="-1.8%" xmlns="http://www.w3.org/2000/svg">
          <Icon SVGFile='./Refrigeracao/img/water-system.svg' :red="0.8" id="refri"/>          
        </svg>

        <svg y="0%" x="-45%" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100  " height="100%" width="100%" @click="selTanque()">          
          <Texto :strokeWidth="2" stroke="White" x="-37%" y="-30%" text=" TANQUE " :width="120" :height="35" :size="310" fill="grey" color="White"/> 
        </svg>
        
        <svg y="0%" x="-33%" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100  " height="100%" width="100%" @click="selComp1()">
          <Texto :strokeWidth="2" stroke="White" x="-80%" y="-27%" text=" COMPRESSOR 1 " :width="140" :height="35" :size="350" fill="grey" color="white"/>           
        </svg>

        <svg y="0%" x="-21%" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100  " height="100%" width="100%" @click="selComp3()">
          <Texto :strokeWidth="2" stroke="White" x="-80%" y="-27%" text=" COMPRESSOR 3 " :width="140" :height="35" :size="350" fill="grey" color="white"/>           
        </svg>

        <svg y="0%" x="-9%" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100  " height="100%" width="100%" @click="selComp5()">
          <Texto :strokeWidth="2" stroke="White" x="-80%" y="-27%" text=" COMPRESSOR 5 " :width="140" :height="35" :size="350" fill="grey" color="white"/>           
        </svg>
        
        <svg y="0%" x="3%" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100  " height="100%" width="100%" @click="selRefrigeracao()">
          <Texto :strokeWidth="2" stroke="White" x="-80%" y="-27%" text=" S. REFRIGERAÇÃO " :width="150" :height="35" :size="355" fill="grey" color="white"/>           
        </svg>
        
        
        
      </svg>     

      <v-overlay :value="connecting" opacity="0.9">
        <v-row justify="center" align="center" no-gutters>
          <v-progress-circular
            color="grey lighten-2"
            indeterminate
            size="64"
          ></v-progress-circular>
        </v-row>
        <v-row
          justify="center"
          align="center"
          no-gutters
          class="pt-6 font-weight-black display-1 grey--text text--lighten-2"
        >
          CONEXÃO PERDIDA
        </v-row>
        <v-row
          justify="center"
          align="center"
          no-gutters
          class="pt-3 font-weight-black display-1 grey--text text--lighten-2"
        >
          COM O {{ conexaoPerdida }}
        </v-row>
      </v-overlay>

      <div style="position: relative; margin: 0 auto  ">
        <component v-bind:is="component"></component>
      </div>
    </div>
     </div>  
</template>

<script>
import Texto from './components/Texto.vue';
import Icon from './components/Icon'
import comp_1 from "./components/Comp_1.vue";
import comp_3 from "./components/Comp_3.vue";
import comp_5 from "./components/Comp_5.vue";
import tanque from "./components/Tanque.vue";
import srefri from "./components/Sist_refrigeracao.vue";

export default {
  name: "App",
  components: {    
    Texto,
    Icon,
    comp_1,
    comp_3,
    comp_5,
    tanque,
    srefri
  },
  data() {
    return {
      component: "tanque",
      overlay: false,
      overlayColor: "#FF0000",
      corLigado: "green",
      corDesligado: "red",
      corDesconhecido: "black",
    };
  },
  computed: {
    connecting() {
      return this.$store.state.connecting || !this.$store.state.conectadoClp;
    },
    conexaoPerdida() {
      return this.$store.state.conexaoPerdida;
    },
    titulo() {
      return this.$store.state.titulo;
    },
    tituloShort() {
      return this.$store.state.tituloShort;
    },
  },
  methods: {
    selCaptacao() {
      this.component = "captacao";
      this.$store.state.titulo = "CAPTAÇÃO DE ÁGUA";
      this.$store.state.tituloShort = "CAPTAÇÃO";
    },
    selTanque() {
      this.component = "tanque";
      this.$store.state.titulo = "FRIO";
      this.$store.state.tituloShort = "TANQUE";
    },
    selRefrigeracao() {
      this.component = "srefri";
      this.$store.state.titulo = "SISTEMA DE REFGRIGERAÇÃO";
      this.$store.state.tituloShort = "REFGRIGERAÇÃO";
    },
    selComp1() {
      this.component = "comp_1";
      this.$store.state.titulo = "COMPRESSORES";
      this.$store.state.tituloShort = "COMPRESSOR 1";
    },
    selComp3() {
      this.component = "comp_3";
      this.$store.state.titulo = "COMPRESSORES";
      this.$store.state.tituloShort = "COMPRESSOR 3";
    },
    selComp5() {
      this.component = "comp_5";
      this.$store.state.titulo = "COMPRESSORES";
      this.$store.state.tituloShort = "COMPRESSOR 5";
    },
    styleTexto(weight, size) {
      var w = "font-regular";
      var s = "body-1";

      switch (weight) {
        case -2:
          w = "font-weight-thin";
          break;
        case -1:
          w = "font-weight-light";
          break;
        case 0:
          w = "font-weight-regular";
          break;
        case 1:
          w = "font-weight-medium";
          break;
        case 2:
          w = "font-weight-bold";
          break;
        case 3:
          w = "font-weight-black";
          break;
      }

      switch (size) {
        case -2:
          s = "caption";
          break;
        case -1:
          s = "body-2";
          break;
        case 0:
          s = "body-1";
          break;
        case 1:
          s = "subtitle-2";
          break;
        case 2:
          s = "subtitle-1";
          break;
        case 3:
          s = "title";
          break;
        case 4:
          s = "headline";
          break;
        case 5:
          s = "display-1";
          break;
        case 6:
          s = "display-2";
          break;
        case 7:
          s = "display-3";
          break;
        case 8:
          s = "display-4";
          break;
      }

      return `${w} ${s}`;
    },
    styleTag(top, left, width, height, extra) {
      if (width == 0 || height == 0)
        return `position:absolute; top:${top}px; left:${left}px; ${extra}`;
      else
        return `position:absolute; top:${top}px; left:${left}px; width:${width}px; height:${height}px; ${extra}`;
    },
    styleTagAnalogica(top, left, width, height, nome, min, max) {
      var v = this.valorTag(nome);
      v = v < min ? min : v > max ? max : v;
      var p = v / (max - min);
      return `position:absolute; top:${
        top + height * (1 - p)
      }px; left:${left}px; width:${width}px; height:${height * p}px`;
    },
    valorTagBool(nome) {
      switch (this.valorTag(nome)) {
        case 0:
          return this.corDesligado;
        case 1:
          return this.corLigado;
        default:
          return this.corDesconhecido;
      }
    },
    valorTag(nome) {
      return (
        this.$store.state.dados.find((tag) => tag.nome == nome)?.valor ?? "***"
      );
    },
  },
  created() {
    this.$store.dispatch("startSignalR");
  },
};
</script>


<!--
#############################################
##      ##      ##  ####  ###  ######      ##
##  ########  #####  ##  ####  ######  ######
##      ####  #######  ######  ######    ####
######  ####  #######  ######  ######  ######
##      ####  #######  ######      ##      ##
#############################################
-->

<style>
html {
  overflow-y: auto;
  overflow-x: auto;
}
#search-button {
  width: 100px;
  height: 50px;
}

#search-button svg {
  width: 25px;
  height: 25px;
}
.frame {
  position: relative;
  display: block;
  margin: auto;
  width: 100vw;
  height: calc((9 / 16) * 100vw);
  background: transparent;
}

@media (min-aspect-ratio: 16/9) {
  .frame {
    height: 100vh;
    width: calc((16 / 9) * 100vh);
  }
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  color: #333;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>