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
  <div class="ma-3">
    <!-- DIALOG --> 
    <v-dialog :value="true" @input="$emit('cancel')" @keydown.esc="$emit('cancel')" max-width="500px">
      <v-card>
				<!-- CARD TITLE --> 
        <v-card-title class="grey darken-4 white--text elevation-5 py-2">
          <h2>CONFIRMATION</h2>
        </v-card-title>

				<!-- CARD TEXT --> 
        <v-card-text>
          <span>{{ message }}</span>
        </v-card-text>

        <!-- CARD BUTTONS --> 
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark @click="$emit('cancel')">Cancel</v-btn>
          <v-btn dark @click="$emit('confirm')">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
	data () {
    return {
      message: 'Do you wish to confirm this action?'
    }
  }
}
</script>