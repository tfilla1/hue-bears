<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click.stop="appDrawer = !appDrawer">
        <v-icon class="white--text"> $apps </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Main App</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="appDrawer" app>
      <v-list two-line>
        <v-list-item>
          <v-list-item-avatar tile>
            <img src="./assets/logo.png" />
          </v-list-item-avatar>
          <v-list-item-title>title</v-list-item-title>
          <v-list-item-subtitle>subTitle</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
      app
      v-model="drawer"
      clipped
      :miniVariant="miniVariant"
      expand-on-hover
      permanent
    >
      <template v-slot:prepend>
        <v-list-item two-line :class="miniVariant && 'px-2'">
          <v-list-item-avatar class="accent rounded">
            <v-icon class="white--text">{{ appConfig.icon }}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              {{ appConfig.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>
      <v-list dense nav>
        <v-list-item
          v-for="app in appConfig.applets"
          :key="app.title"
          link
          :to="app.to"
          :exact="app.exact"
        >
          <v-list-item-icon>
            <v-icon>{{ app.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ app.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import appConfig from './app.config'
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    appDrawer: false,
    miniVariant: true,
    useFavorites: true,
    useSearch: true,
  }),
  computed: {
    appConfig() {
      return appConfig
    },
  },
}
</script>
<style lang="scss">
@import './design';

main {
  background: #e1e1e1;
}
</style>
