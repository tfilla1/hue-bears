<template>
  <v-card :loading="loading">
    <v-card-title>games - home</v-card-title>
    <v-card-text v-for="game in games" :key="game">
      {{game}}
    </v-card-text>
  </v-card>
</template>

<script>
import api from '../../../services/api'
export default {
  name: 'home-view',
  data: () => ({
    pendingChanges: 0,
    games: [],
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

      api.events.getEvents().then((res) => {
        var items = res.data.items

        console.log(items)

        items.forEach((element) => {
          api.events.getEvent(element.$ref).then((res) => {
            console.log(res)
            this.games.push(res.data.name)
          })
        })
      })
      setTimeout(() => {
        this.pendingChanges--
      }, 2000)
    },
  },
}
</script>

<style></style>
