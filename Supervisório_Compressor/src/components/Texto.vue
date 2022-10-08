<!--
####################################
##  ##  ##      ##  ####  ##  ######
##  ##  ####  ####   ##   ##  ######
##      ####  ####        ##  ######
##  ##  ####  ####  ####  ##  ######
##  ##  ####  ####  ####  ##      ##
####################################
-->

<template>
  <svg :viewBox="`0 0 ${width} ${height}`" :width="widthRatio" :height="heightRatio">
    <rect width="100%" height="100%" :fill="fill" :stroke="stroke" :stroke-width="strokeWidth"/>
    <text x="50%" y="50%" text-anchor="middle" alignment-baseline="central" :fill="color">{{ text }}</text>
  </svg>
</template>


<!--
##################################
##     ###      ##      ##      ##
##  ##  ##  ##  ####  ####  ##  ##
##  ##  ##  ##  ####  ####  ##  ##
##  ##  ##      ####  ####      ##
##     ###  ##  ####  ####  ##  ##
##################################
-->

<script>
export default {
  props: {
    text: String,
    width: Number,
    height: Number,
    size: Number,
    fill: String,
    color: String,
    stroke: String,
    strokeWidth: Number
  },
	data() {
    return {
      message: '',
      tamanho: 10
    }
  },
  computed: {
    widthRatio() {
      return this.size + "%";
    },
    heightRatio() {
      return this.size/((this.width/this.height)*9/16) + "%";
    }
  }
}
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

.svgtext {
  font-size: 28rem;
  height:100%;
  width:100%
}

</style>