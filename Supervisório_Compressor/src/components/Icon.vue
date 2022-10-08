<template>
<svg>
  <image height="100%" width="100%" :xlink:href="SVGFile" :filter="`url(#${id})`" />

  <defs>
    <filter :id="id">
      <feColorMatrix type="matrix" :values="compTest" />
    </filter>
  </defs>
</svg>
</template>

<script>
export default {
  name: 'SVG-image',
  props: {
    id: String,
    SVGFile: String,
    red: {
      type: Number,
      default: 0
    },
    green: {
      type: Number,
      default: 0
    },
    blue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      kiwiR: 0
    }
  },
  computed: {
    path(){
      return require( `@/assets/${this.SVGFile}`)
    },
    compTest() {
      return(`1 0 0 0 ${this.blue}  0 1 0 0 ${this.red}  0 0 1 0 ${this.green}  0 0 0 1 0`);    
    },
  },
  methods: {
    teste() {
      console.log(this.compTest);
    }
  }
}
</script>

<style lang="scss" scoped>
.responsive-img{
  max-width: 100%;
  height: auto;
}
</style>