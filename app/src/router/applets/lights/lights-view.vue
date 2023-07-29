// todo: build out dialog with flexible side panel // todo: side panel - full
height and variable width // todo: main view - full height and width
<template>
  <div>
    <v-card>
      <v-card-title> Welcome </v-card-title>
      <v-card-subtitle>
        Choose the lights you'd like to control from below:
        <!-- api call to retrieve lights -->
      </v-card-subtitle>
      <v-card-actions>
        <v-btn class="primary" @click="dialog = !dialog">open</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog
      v-model="dialog"
      id="dialog"
      eager
      fullscreen
      hide-overlay
      persistent
      no-click-animation
      transition="dialog-bottom-transition"
    >
      <v-card style="z-index: 0">
        <v-toolbar dark class="primary rounded-0" elevation="2" extended>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>hello</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-switch color="accent" v-model="drawer" label="world"></v-switch>
          <template v-slot:extension>
            <v-tabs v-model="tab">
              <v-tab v-for="t in tabs" :key="t">{{ t }}</v-tab>
            </v-tabs>
            <v-spacer></v-spacer>
            <v-avatar size="40" color="accent" class="ma-2">
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
            <div>
              <div> hello world </div>
              <div> helloworld@test.com </div>
            </div>
          </template>
        </v-toolbar>

        <div class="d-flex flex-row flex-fill" style="z-index: 0">
          <v-expand-x-transition>
            <v-card
              v-if="drawer"
              elevation="1"
              height="inherit"
              width="300px"
              rounded="0"
              flat
              class="d-flex flex-column flex-shrink-0 overflow-hidden"
            >
              <v-toolbar
                v-if="title !== ''"
                flat
                class="flex-grow-0 flex-shrink-0"
              >
                <div class="text-h5 flex-fill text-no-wrap">{{ title }}</div>
                <v-tooltip
                  bottom
                  max-width="250px"
                  content-class="no-opacity"
                  open-delay="250"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      class="justify-right"
                      v-bind="attrs"
                      @click="drawer = !drawer"
                      v-on="on"
                    >
                      <v-icon>$close</v-icon>
                    </v-btn>
                  </template>
                  <span>Hide Pane</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text
                class="d-flex flex-column flex-grow-1 flex-shrink-0 overflow-auto"
              >
                <v-list>
                  <v-list-item>
                    <v-list-item-content> hello </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions style="height: 58px; width: 300px">
                <v-spacer />
                <v-btn text color="primary"> Clear </v-btn>
                <v-btn color="primary"> Apply </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-x-transition>
          <v-tabs-items
            v-model="tab"
            class="border-l-1 flex-fill"
            style="min-height: 400px; max-height: 700px"
          >
            <v-tab-item>
              <!-- details tab -->
                  <fieldset
                    :disabled="loading"
                    class="border-0 overflow-y-auto"
                  >
                    <v-card
                      rounded="0"
                      :loading="loading"
                      style="min-height: 400px; max-height: 700px"
                    >
                      <!-- <v-card-title> {{ isNew ? 'Add' : 'Edit' }} item </v-card-title>
        <v-card-subtitle class="mb-4">
          Use this form to {{ isNew ? 'add' : 'edit' }} an item
        </v-card-subtitle> -->
                      <v-expand-transition origin="center">
                        <!-- <v-alert
                          id="errorAlert"
                          type="error"
                          class="px-2"
                          rounded="0"
                          :value="hasSubmitted && errorCount > 0"
                          >{{ getErrorMessages(errors) }}</v-alert
                        > -->
                      </v-expand-transition>
                      <v-card-text class="d-flex align-center">
                        <v-row>
                          <v-col cols="6">
                            <v-text-field
                              v-model="item.name"
                              label="Organization Name*"
                              name="Organization Name"
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                              v-model="item.alias"
                              label="Alias"
                              name="alias"
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-select
                              v-model="item.organizationType"
                              :items="types"
                              item-text="name"
                              item-value="id"
                              label="Organization Type*"
                              name="organizationType"
                              outlined
                            ></v-select>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="item.email"
                              label="Email*"
                              name="email"
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="item.websiteAddress"
                              label="Website Address"
                              name="websiteAddress"
                              type="text"
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-checkbox
                              v-model="item.payStatus"
                              label="Pay Status*"
                              name="checkbox"
                              outlined
                            ></v-checkbox>
                          </v-col>
                          <v-col cols="12">
                            <v-select
                              v-model="item.entityStatus"
                              :items="types"
                              item-text="name"
                              item-value="id"
                              label="Entity Status*"
                              name="entityStatus"
                              outlined
                            ></v-select>
                          </v-col>
                          <v-col cols="4">
                            <v-select
                              v-model="item.idFormat"
                              :items="types"
                              item-text="name"
                              item-value="id"
                              label="ID Format*"
                              name="iDFormat"
                              outlined
                            ></v-select>
                          </v-col>
                          <v-col cols="8">
                            <v-text-field
                              v-model="item.idField"
                              label="ID Field"
                              name="iDField"
                              type="text"
                              outlined
                            ></v-text-field>
                          </v-col>
                          <!-- <v-col cols="12">
                            <base-chip-menu
                              v-model="item.tags"
                              :items="types"
                              label="Tags"
                              :disabled="loading"
                              class="py-2"
                            >
                            </base-chip-menu>
                          </v-col> -->
                        </v-row>
                      </v-card-text>
                      <v-divider />
                      <v-card-actions class="justify-end pb-3">
                        <v-btn
                          type="button"
                          text
                          :disabled="loading"
                          @click="cancel"
                        >
                        close
                        </v-btn>
                        <v-btn
                          type="submit"
                          color="primary"
                          class="mr-2"
                        >
                        save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </fieldset>
            </v-tab-item>
            <v-tab-item>
              <!-- create a component that has a stepper -->
              <!-- do something in the stepper -->
              <!-- on load: show progress within stepper -->
              <w-stepper></w-stepper>
            </v-tab-item>
            <!-- <v-tab-item>
              <ContactsGrid></ContactsGrid>
            </v-tab-item>
            <v-tab-item>
              <SiteAddresses></SiteAddresses>
            </v-tab-item>
            <v-tab-item>
              <OverpayHistory></OverpayHistory>
            </v-tab-item>
            <v-tab-item>
              <OrganizationNotes></OrganizationNotes>
            </v-tab-item> -->
          </v-tabs-items>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
const newItem = () => ({
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  money: '',
  description: '',
})
export default {
  data: () => ({
    dialog: true,
    drawer: false,
    item: newItem(),
    pendingChanges: 0,
    title: 'side pane',
    tab: null,
    tabs: ['hello', 'world'],
    types: ['hello', 'world'],
  }),
  computed: {
    loading() {
      return this.pendingChanges > 0
    },
  },
  methods: {
    cancel() {
        console.log('cancel')
    },
    getErrorMessages(errors) {
      let count = 0
      if (errors) {
        for (const key in errors) {
          count += errors[key].length
        }
      }
      this.errorCount = count
      return count
        ? `There are ${count} errors. Please correct them and submit again.`
        : null
    },
    getLights() {
      // todo <!-- api call to retrieve lights -->
    },
    open() {},
  },
}
</script>

<style></style>
