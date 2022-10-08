<template>
  <div id="Comp_1">


    <div class="frame">

      <svg height="100%" width="100%">

        <svg y="-5.5%" x="-5%" height="110%" width="110%">
          <Icon SVGFile='./Refrigeracao/img/background.svg' :red="0" id="refrigeracao" />
        </svg>

        <svg y="9.5%" x="14.5%" height="80%" width="80%">
          <Icon SVGFile='./Refrigeracao/img/Compressor1.svg' id="arrow2" />
        </svg>

        <svg y="1%" x="1%" height="10.3%" width="6%">
          <rect width="100%" height="100%" fill="white"></rect>
          <Icon SVGFile='./Refrigeracao/img/Brasal_Logo.svg' id="logo" />
        </svg>

        <Texto :strokeWidth="0" stroke="Black" x="40%" y="1%" text="COMPRESSOR 1" :width="130" :height="22" :size="25"
          fill="transparent" color="white" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="22.7%" y="12.5%" text="F" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="26.4%" y="12%" :text="valorTagString('C1_F')" :width="70"
          :height="22" :size="7" :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="32%" y="12.5%" text="Hz" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="22.7%" y="17.5%" text="SV" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="26.4%" y="17%" :text="valorTagString('C1_SV')" :width="70"
          :height="22" :size="7" :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="32%" y="17.5%" text="%" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="46.7%" y="9%" text="SP" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="50.4%" y="8.5%" :text="valorTagString('C1_SP')" :width="70"
          :height="22" :size="7" :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="57.3%" y="9%" text="Kgf\cm²" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="46.7%" y="14%" text="ST" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="50.4%" y="13.5%" :text="valorTagString('C1_ST')" :width="70"
          :height="22" :size="7" :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="56%" y="14%" text="°C" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="46%" y="19%" text="SH-SP" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="50.4%" y="18.5%" :text="valorTagString('C1_SH_ST')" :width="70"
          :height="22" :size="7" :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="56%" y="19%" text="°C" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="46%" y="24%" text="SH-DP" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="50.4%" y="23.5%" :text="valorTagString('C1_SH_DT')" :width="70"
          :height="22" :size="7" :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="56%" y="24%" text="°C" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="67.7%" y="18.5%" text="MA" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="71.4%" y="18%" :text="valorTagString('C1_A')" :width="70"
          :height="22" :size="7" :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="77%" y="18.5%" text="A" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="64.8%" y="23.5%" text="CONSUMO" :width="100" :height="22"
          :size="7" fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="71.4%" y="23%" text="***" :width="70" :height="22" :size="7"
          :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="77%" y="23.5%" text="A" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="64.8%" y="28.5%" text="POTÊNCIA" :width="100" :height="22"
          :size="7" fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="71.4%" y="28%" text="***" :width="70" :height="22" :size="7"
          :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="77%" y="28.5%" text="A" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="69.7%" y="40.5%" text="DP" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="73.4%" y="40%" :text="valorTagString('C1_DP')" :width="70"
          :height="22" :size="7" :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="79.9%" y="40.5%" text="Kgf\cm²" :width="70" :height="22"
          :size="5" fill="transparent" :color="corTex2" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="69.7%" y="45.5%" text="DT" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="73.4%" y="45%" :text="valorTagString('C1_DT')" :width="70"
          :height="22" :size="7" :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="78.5%" y="45.5%" text="°C" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="48.7%" y="72.5%" text="OP" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="52.4%" y="72%" :text="valorTagString('C1_OP')" :width="70"
          :height="22" :size="7" :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="59.3%" y="72.5%" text="Kgf\cm²" :width="70" :height="22"
          :size="5" fill="transparent" :color="corTex2" />

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="48.7%" y="77%" text="OT" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="52.4%" y="76.5%" :text="valorTagString('C1_OT')" :width="70"
          :height="22" :size="7" :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="58%" y="77%" text="°C" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />      

        <Texto :strokeWidth="0" :stroke="corFrameTex" x="20.5%" y="91.5%" text="OFP" :width="70" :height="22" :size="5"
          fill="transparent" :color="corTex2" />
        <Texto :strokeWidth="4" :stroke="corFrameTex" x="24.4%" y="91%" :text="valorTagString('C1_OFP')" :width="70"
          :height="22" :size="7" :fill="corTemp" :color="corFrameTex" />
        <Texto :strokeWidth="0" :stroke="corFrameTex" x="31%" y="91.5%" text="Kgf\cm²" :width="70" :height="22"
          :size="5" fill="transparent" :color="corTex2" />        

      </svg>

    </div>
  </div>
</template>

<script>
import Texto from './Texto.vue'
import Icon from './Icon'


export default {
  name: 'Comp_1',
  components: {
    Texto,
    Icon
  },
  data() {
    return {
      posicao: 10,
      overlay: false,
      overlayColor: "#FF0000",
      corLigado: 'green',
      corDesligado: 'red',
      corDesconhecido: 'black',
      corKiwi: 'yellow',
      kiwiR: .85,
      kiwiR1: 0,
      corTemp: 'White',
      corFrameTex: 'black',
      corTex2: 'white',
      width: 180,
      height: 22,
      boxHeight: "4%",
      boxWidth: "17%",
      strokeWidthBar: 4,
      boxHeight1: "4%",
      boxWidth1: "17%",
    }
  },
  computed: {
    posicaoString() {
      return `${this.posicao}%`;
    },
    connecting() {
      return this.$store.state.connecting || !this.$store.state.conectadoClp;
    },
    conexaoPerdida() {
      return this.$store.state.conexaoPerdida;
    }
  },
  methods: {
    compTest(r, g, b) {
      return (`1 0 0 0 ${this.kiwiR}  0 1 0 0 ${g}  0 0 1 0 ${b}  0 0 0 1 0`);
    },
    teste() {

      console.log(`TT_TEMP7`);
    },
    styleTexto(weight, size) {
      var w = 'font-regular';
      var s = 'body-1'

      switch (weight) {
        case -2: w = 'font-weight-thin'; break;
        case -1: w = 'font-weight-light'; break;
        case 0: w = 'font-weight-regular'; break;
        case 1: w = 'font-weight-medium'; break;
        case 2: w = 'font-weight-bold'; break;
        case 3: w = 'font-weight-black'; break;
      }

      switch (size) {
        case -2: s = 'caption'; break;
        case -1: s = 'body-2'; break;
        case 0: s = 'body-1'; break;
        case 1: s = 'subtitle-2'; break;
        case 2: s = 'subtitle-1'; break;
        case 3: s = 'title'; break;
        case 4: s = 'headline'; break;
        case 5: s = 'display-1'; break;
        case 6: s = 'display-2'; break;
        case 7: s = 'display-3'; break;
        case 8: s = 'display-4'; break;
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
      return `position:absolute; top:${top + height * (1 - p)}px; left:${left}px; width:${width}px; height:${height * p}px`;
    },
    valorTagBool(nome) {
      switch (this.valorTag(nome)) {
        case 0: return this.corDesligado;
        case 1: return this.corLigado;
        default: return this.corDesconhecido;
      }
    },
    valorTag(nome) {
      return (this.$store.state.dados.find(tag => tag.nome == nome)?.valor ?? '***')
    },
    valorTagPadrao(nome, min) {
      return (this.$store.state.dados.find(tag => tag.nome == nome)?.valor ?? min)
    },
    valorTagString(nome) {
      return (this.$store.state.dados.find(tag => tag.nome == nome)?.valor.toFixed(1).toString() ?? '***')
    },
    statusCompressor(nome) {
      return (this.$store.state.dados.find(tag => tag.nome == nome)?.valor == 1 ? 'Ligado' : 'Desligado' ?? '***')
    },
    corstatusBomba(nome) {
      return (this.$store.state.dados.find(tag => tag.nome == nome)?.valor == 1 ? 'Lime' : '#AAAAAA')
    },
    corstatusCompressor(nome) {
      return (this.$store.state.dados.find(tag => tag.nome == nome)?.valor == 1 ? 'Lime' : 'White')
    },
    etapaCompressor(etapa1, etapa2, etapa3) {
      var compresssor1 = '';
      var compresssor2 = '';
      var compresssor3 = '';
      var compresssor5 = ''

      switch (etapa1) {
        case 1: compresssor1 = '1'; break;
        case 2: compresssor2 = '1'; break;
        case 3: compresssor3 = '1'; break;
        case 5: compresssor5 = '1'; break;
      }
      switch (etapa2) {
        case 1: compresssor1 = '2'; break;
        case 2: compresssor2 = '2'; break;
        case 3: compresssor3 = '2'; break;
        case 5: compresssor5 = '2'; break;
      }
      switch (etapa3) {
        case 1: compresssor1 = '3'; break;
        case 2: compresssor2 = '3'; break;
        case 3: compresssor3 = '3'; break;
        case 5: compresssor5 = '3'; break;
      }
      return [compresssor1, compresssor2, compresssor3, compresssor5]
    }
  },
  created() {
    this.$store.dispatch('startSignalR');
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  }
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
  overflow-x: auto
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.frame {
  position: relative;
  display: block;
  margin: auto;
  width: 100vw;
  height: calc((9/16)*100vw);
  background: #1331d8;
}

@media (min-aspect-ratio:16/9) {
  .frame {
    height: 100vh;
    width: calc((16/9)*100vh);
  }
}

body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  color: #333;
}

main {
  width: 30%;
  margin: auto;
  background-color: #E7E7E7;
  padding: 20px;
}
</style>