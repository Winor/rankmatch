'use strict'

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let team = {
    supports: 2,
    tanks: 2,
    dpss: 2,
    count: 6
}

let players = require('./players.js')

function find(key, value) {
    try {
        const vals = []
        let index = 0
        players.forEach(player => {
            if (player[key] === value) {
                vals.push([index,player.player_name])
            }
            index ++
        })
        return vals
    } catch (e) {
        console.log(e)
    }
}

function findrole(key, value) {
    try {
        const vals = []
        let index = 0
        players.forEach(player => {
            if ((player[key] === value) && (!player.hasteam)) {
                vals.push([index,player.player_name, player[value+'_rank']])
            }
            index ++
        })
        return vals
    } catch (e) {
        console.log(e)
    }
}

// get random player from a selected role
function assign_player(role) {
    const playersinrole = findrole('wantstoplay', role)
    const randomplayer = playersinrole[getRandomInt(playersinrole.length)]
    players[randomplayer[0]].hasteam = true
    return randomplayer
}

// create a random team
function randomteam() {
    const tank_players = []
    const support_players = []
    const dps_players = []
    let sr_sum = 0
    for (let tank = 0; tank < team.tanks; tank++) {
        const player = assign_player('tank')
        sr_sum += player[2]
        tank_players.push(player)  
    }
    for (let support = 0; support < team.supports; support++) {
        const player = assign_player('support')
        sr_sum += player[2]
        support_players.push(player) 
    }
    for (let dps = 0; dps < team.dpss; dps++) {
        const player = assign_player('dps')
        sr_sum += player[2]
        dps_players.push(player)  
    }
    return {
        tanks: tank_players,
        supports: support_players,
        dpss: dps_players,
        sr_avg: Math.floor(sr_sum/team.count)
    }
}


// create as many teams as possible
function create_teams () {
    const teams_count = Math.floor(players.length/team.count)
    const teams = []
    for (let i = 0; i < teams_count; i++) {
        teams.push(randomteam())
    }
    return teams
}

// sort teams based on average
function sort_teams () {
    let sort_teams = create_teams()
    sort_teams = sort_teams.sort((a, b) => (a.sr_avg > b.sr_avg) ? 1 : -1)
    return sort_teams
}

function match_teams () {
    const teams = sort_teams()
    const match_teams = []
    for(let i = 0; i < teams.length; i += 2) {
        match_teams.push(teams.slice(i, i+ 2));
      }
      return match_teams
}

// // calculate average
// function average (...rank) {
//     return theArgs.reduce((previous, current) => {
//         return Math.floor((previous + current)/rank.length);
//   })
// }

console.log(match_teams())
console.log('not in a team: ' + find('hasteam', false))
