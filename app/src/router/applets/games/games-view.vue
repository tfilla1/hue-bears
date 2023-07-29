<template>
  <!-- <v-card :loading="loading">
    <v-card-title>games - home</v-card-title>
    <v-card-text v-for="game in games" :key="game">
      {{game}}
    </v-card-text>
  </v-card> -->
  <!-- v-model="selected" -->

  <v-data-table
    :items="games"
    :headers="headers"
    :item-class="(item) => (item.selected ? 'selected-row' : '')"
  >
    <!-- <template v-slot:[`data-table-select`]="{ item }">
      <div class="bg-warning">{{ item.name }}</div>
    </template> -->
  </v-data-table>
</template>

<script>
import api from '../../../services/api'
export default {
  name: 'home-view',
  data: () => ({
    pendingChanges: 0,
    games: [],
    selected: [],
    headers: [
      {
        text: 'name',
        value: 'name',
        class: 'text-no-wrap',
        cellClass: 'text-no-wrap',
        checked: true,
        toggleable: true,
      },
    ],
  }),
  computed: {
    loading() {
      return this.pendingChanges > 0
    },
  },
  mounted() {
    this.load()
  },
  methods: {
    checkEvent(eventId) {
      console.log(eventId)
      return api.events.getEvent(eventId).then((res) => {
        console.log(res.data.name)
        //return res
      })
    },
    load() {
      this.pendingChanges++
      this.games = [
        {
          id: 1,
          name: 'hello',
          selected: true
        },
        {
          id: 2,
          name: 'bye',
          selected: false
        },
        {
          id: 3,
          name: 'something',
          selected: false
        },
      ]

      // this.selected = this.games.filter((x) => x.id === 1)
      // api.events.getEvents().then((res) => {
      //   var items = res.data.items

      //   items.forEach((element) => {
      //     api.events.getEvent(element.$ref).then((res) => {
      //       this.games.push(res.data.name)
      //     })
      //   })
      // })
      console.log(this.games)
      setTimeout(() => {
        this.pendingChanges--
      }, 2000)
    },
  },
}
</script>

<style>
.selected-row {
  border: 1px solid black;
  background-color: #f0a;
}
</style>
