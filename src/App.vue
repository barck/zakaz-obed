<template>
  <div id="app">
    <v-app id="inspire" dark>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title><a class="logo-link" href="/">Zakaz obed</a></v-toolbar-title>
      </v-toolbar>
      <v-navigation-drawer
          v-model="drawer"
          clipped
          fixed
          app
      >
        <v-list dense>
          <v-list-tile href="/menu-add">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Menu add</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile href="/menu-choose">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Zakaz obed</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center>
            <router-view/>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer fixed>
        <v-flex xs12 py-3 text-xs-center white--text>
          &copy;2018 — <strong>Zakaz obed</strong>
        </v-flex>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: true,
  }),
};
</script>

<style lang="stylus">
  @import './assets/styles/index'
</style>
