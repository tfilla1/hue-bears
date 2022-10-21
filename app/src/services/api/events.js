import axios from 'axios'

let baseUrl =
  'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events'
export default {
  getEvents() {
    return axios.get(`${baseUrl}`)
  },
  getEvent(url) {
    console.log(url)
    return axios.get(`${url}`)
  }
}
