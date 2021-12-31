<template>
  <v-container>

    <!-- Header -->
    <p class="text-h5 text--primary"> 
      <v-avatar color="deep-orange darken-2" size="37"><v-icon dark>mdi-server</v-icon></v-avatar>
      Server List
    </p>

    <v-divider></v-divider>

  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ServerList',
})
</script>
