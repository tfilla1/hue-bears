import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      name: 'hue_bears_theme',
      light: {
        primary: '#0B162A', // "#001E62",
        secondary: '#0B162A', // "#00B5E2",
        accent: '#C83803', // "#80276C",
        error: '#D50032',
        icon: '#000099',
        footer: '#99CCFF',
        footerTerms: '#CCE6FF',
        footerBg: '#004C99',
        white: '#FFFFFF',
        black: '#000000'
      },
      dark: {
        primary: '#D50032',
        secondary: '#00B5E2',
        other: '#001E62'
      }
    }
  },
  icons: {
    iconfont: 'mdi',
    values: {
      account: 'mdi-account-circle',
      add: 'mdi-plus',
      addCircle: 'mdi-plus-circle-outline',
      actions: 'mdi-dots-vertical',
      alert: 'mdi-alert',
      apps: 'mdi-apps',
      assigned: 'mdi-check-circle',
      back: 'mdi-chevron-left',
      down: 'mdi-chevron-down',
      next: 'mdi-chevron-right',
      options: 'mdi-menu-down',
      building: 'mdi-domain',
      complete: 'mdi-check-circle-outline',
      delete: 'mdi-trash-can-outline',
      checked: 'mdi-checkbox-marked',
      unchecked: 'mdi-checkbox-blank-outline',
      calendar: 'mdi-calendar',
      close: 'mdi-close',
      contacts: 'mdi-contacts',
      deleted: 'mdi-close-circle-outline',
      edit: 'mdi-pencil',
      editAccount: 'mdi-account-edit',
      favorite: 'mdi-star-outline',
      favoriteFilled: 'mdi-star',
      filter: 'mdi-filter',
      login: 'mdi-login',
      logout: 'mdi-logout',
      home: 'mdi-home',
      medical: 'mdi-medical-bag',
      menu: 'mdi-menu',
      network: 'mdi-lan',
      partial: 'mdi-progress-check',
      pending: 'mdi-dots-horizontal-circle-outline',
      search: 'mdi-magnify',
      settings: 'mdi-cog',
      success: 'mdi-check-circle',
      fail: 'mdi-minus-circle',
      phone: 'mdi-phone',
      map: 'mdi-map-marker',
      users: 'mdi-account-group'
    }
  }
})

