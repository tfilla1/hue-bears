<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click.stop="appDrawer = !appDrawer">
        <v-icon class="white--text"> $apps </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Main App</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer app temporary width="400" v-model="appDrawer" clipped>
      <v-app-bar color="primary" dark clipped-left>
        <v-app-bar-nav-icon @click.stop="appDrawer = !appDrawer">
          <v-icon class="white--text"> $apps </v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title>Other Apps</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-slot:extension>
          <div class="d-flex flex-row align-center">
            <div class="px-3 pb-3" elevation="0">
              <v-text-field
                v-model="search"
                rounded
                flat
                filled
                dense
                type="search"
                hide-details=""
                placeholder="Search Apps"
                class="flex-fill"
                prepend-inner-icon="mdi-magnify"
              />
            </div>
            <div class="px-3 pb-3">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    :class="{ accent: useFavorites }"
                    icon
                    v-bind="attrs"
                    v-on="on"
                    @click="useFavorites = !useFavorites"
                  >
                    <v-icon>$favorite</v-icon>
                  </v-btn>
                </template>
                <span>Toggle Favorites</span>
              </v-tooltip>
            </div>
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
          <v-list-item-avatar class="accent rounded" @click.stop="appDrawer = !appDrawer">
            <v-icon>$building</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              Providers
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>
      <v-list dense nav>
        <v-list-item v-for="app in apps" :key="app.title" link
          :to="app.to"
          :exact="app.exact">
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
    useFavorites: true,
    useSearch: true,
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
