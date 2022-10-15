<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click.stop="appDrawer = !appDrawer">
        <v-icon class="white--text"> $apps </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Providers</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>organizations</v-tab>
          <v-tab>individuals</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-navigation-drawer app temporary width="400" v-model="appDrawer" clipped> 

    <v-app-bar color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click.stop="appDrawer = !appDrawer">
        <v-icon class="white--text"> $apps </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Other Apps</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <div>
          search
        </div>
      </template>
    </v-app-bar>

      <v-list dense nav>
        <v-list-item v-for="app in apps" :key="app.title" link>
          <v-list-item-icon>
            <v-icon>{{ app.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ app.title }}</v-list-item-title>
          </v-list-item-content>
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
            <v-icon>$back</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              hello world
            </v-list-item-title>
            <v-list-item-subtitle>
              <a
                href="#"
                class="font-weight-bold text-decoration-none text-caption"
                @click.prevent="appDrawer = !appDrawer"
              >
                <v-icon class="text-caption" color="primary">
                  mdi-layers
                </v-icon>
                Change App
              </a>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>
      <v-list dense nav>
        <v-list-item v-for="app in apps" :key="app.title" link>
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
    appDrawer: true,
    miniVariant: true,
  }),
  computed: {
    apps() {
      console.log(appConfig)
      return appConfig.applets
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
