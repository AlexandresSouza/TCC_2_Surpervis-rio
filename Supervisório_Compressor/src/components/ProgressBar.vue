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
  <svg :viewBox="`0 0 ${width} ${height}`" :width="boxWidth" :height="boxHeight"  >
    
    <rect x="0%" y="0%" width="100%" height="100%" fill="White"  ></rect>
    <rect x="0%" y="0%" :width="widthRadRatio" height="100%" fill="Red"></rect>
    <rect x="0%" y="0%" width="100%" height="100%" fill="transparent" :stroke="stroke" :stroke-width="strokeWidth" ></rect>
    
    
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
  data() {
    return {
      redO: 0.3,
      yellowO: 0.3,
      greenO: 0.3,
    };
  },
  props: {
    width: Number,
    height: Number,
    boxWidth: String,
    boxHeight: String,
    temValue: Number,
    strokeWidth: Number,
    stroke: String
  },

  computed: {
    widthRadRatio() {
      if(this.temValue == 20) return "100%";
      else if(this.temValue <= 0) return "0%";
      else{
        return (this.temValue/20)*100 + "%";
      }
      
    },
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
circle {
  transition: opacity ease 500ms;
}
</style>