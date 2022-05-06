//Example fetch getting nba player info

document.querySelector('button').addEventListener('click',getPlayer)

function getPlayer() {

let player = document.querySelector('input').value.split(' ')

let firstName = player[0]
let lastName = player[1]


fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${firstName}%20${lastName}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      for (let i = 0; i <= data.player.length; i++) {
        if (data.player[i].strSport === 'Basketball') {
          document.querySelector('#fullName').innerHTML = data.player[i].strPlayer
          document.querySelector('img').src = data.player[i].strThumb
          document.querySelector('#description').innerHTML = data.player[i].strDescriptionEN
      }
    }
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
// get basbketball stats
// get player name
    fetch(`https://www.balldontlie.io/api/v1/players?search=${firstName}_${lastName}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
// convert name to id
      let playerNameToId = data.data[0].id
  
      fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerNameToId}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
// get baskteball stats
        document.querySelector('#gm').innerHTML = data.data[0].games_played
        document.querySelector('#min').innerHTML = data.data[0].min
        document.querySelector('#pts').innerHTML = data.data[0].pts
        document.querySelector('#fgm').innerHTML = data.data[0].fgm
        document.querySelector('#fga').innerHTML = data.data[0].fga
        document.querySelector('#fg').innerHTML = data.data[0].fg_pct
        document.querySelector('#threepm').innerHTML = data.data[0].fg3m
        document.querySelector('#threepa').innerHTML = data.data[0].fg3a
        document.querySelector('#threep').innerHTML = data.data[0].fg3_pct
        document.querySelector('#ftm').innerHTML = data.data[0].ftm
        document.querySelector('#fta').innerHTML = data.data[0].fta
        document.querySelector('#ft').innerHTML = data.data[0].ft_pct
        document.querySelector('#oreb').innerHTML = data.data[0].oreb
        document.querySelector('#dreb').innerHTML = data.data[0].dreb
        document.querySelector('#reb').innerHTML = data.data[0].reb
        document.querySelector('#assists').innerHTML = data.data[0].ast
        document.querySelector('#steals').innerHTML = data.data[0].stl
        document.querySelector('#block').innerHTML = data.data[0].blk
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });



}




