<template>
  <v-app>

    <!-- Top bar -->
    <v-app-bar
      app
      color="grey darken-4"
      dark
      clipped-left
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="200"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" class="mx-2" fab dark small >
        <v-icon dark> mdi-brightness-4 </v-icon>
      </v-btn>
    </v-app-bar>


    <!-- Sidebar -->
    <v-navigation-drawer permanent app clipped expand-on-hover>
      <v-list-item
        v-for="item in navmenu"
        :key="item.title"
        :to="item.link"
        router
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <template v-slot:append>
        <div id="social">
          <img class="mr-2" @click="openURLExternalBrowser('https://discord.gg/aMUzcZE')" src="./assets/discord.png" alt="Discord" width="25">
          <img class="mr-2" @click="openURLExternalBrowser('https://twitter.com/Odamex')" src="./assets/twitter.png" alt="Twitter" width="25">
          <img class="mr-2" @click="openURLExternalBrowser('https://steamcommunity.com/groups/odamex')" src="./assets/steam.png" alt="Steam" width="25">
        </div>
      </template>

    </v-navigation-drawer>

    <v-main class="pl-15">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { shell } from 'electron'

export default Vue.extend({
  name: 'App',
  data: () => ({
    navmenu: [
      { title: 'Server List', icon: 'mdi-server', link: '/serverlist'},
      { title: 'Direct connection', icon: 'mdi-connection', link: '/directconnection'},
      { title: "WAD's", icon: 'mdi-package-variant', link: '/wads'},
      { title: "Demos", icon: 'mdi-movie-roll', link: '/demos'},
      { title: "Settings", icon: 'mdi-cogs', link: '/settings'},
    ],
  }),
  methods: {
    openURLExternalBrowser(url: string) {
      shell.openExternal(url)
    },
  },
})
</script>

<style lang="scss" src="./App.scss" scoped></style>