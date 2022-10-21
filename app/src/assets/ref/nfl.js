import axios from 'axios'
let nfl = {
  events: {
    $refs: [
      "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events",
      "http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/401437791",
      "http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/${id}"
    ],
    items: [],
    calls: [{
        url: "http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events",
        getById: (id) => {
          axios.get(`${this.url}/${id}`)
        }
    }]
  }
}
