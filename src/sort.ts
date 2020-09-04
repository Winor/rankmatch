import type {player} from './player'

export default async function (players: player[]) {

    interface roles {
        tank: player[];
        damage: player[];
        support: player[];
    }

    const role:roles = {
        tank: [],
        damage:[],
        support:[]
    }

    const teamSettings = {
        supports: 2,
        tanks: 2,
        damages: 2,
        count: 6
    }

    const playersCount: number = players.length
    const teamsCount: number = Math.floor(playersCount / teamSettings.count)
    const roleCount: number = teamsCount * 2

    players.forEach((player: player) => {
        if (player.tank) {
            role.tank.push(player)
        }
        if (player.damage) {
            role.damage.push(player)
        }
        if (player.support) {
            role.support.push(player)
        }
    });

    const tankCount: number = role.tank.length
    const damageCount: number = role.damage.length
    const supportCount: number = role.support.length

    function available(inrole: 'tank'| 'damage' | 'support') {
        const available: player[] = []
        role[inrole].forEach((player: any) => {
            if(!player.team) {
                available.push(player)
            }
        });
        return available
    }

    // get random int
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // get random player from a selected role
    function assign_random(role: 'tank'|'damage'|'support') {
        const availableinrole = available(role)
        const availableCount = availableinrole.length
        if (availableCount === 0) {
            return false
        }
        const randomplayer = availableinrole[getRandomInt(availableCount)]
        randomplayer.assign()
        return randomplayer
    }

// create a random team
function randomteam() {
    const tank_players = []
    const support_players = []
    const damage_players = []
    let sr_sum = 0
    for (let tank = 0; tank < teamSettings.tanks; tank++) {
        const player = assign_random('tank')
        if(player) {
            sr_sum += player.tankSR
            tank_players.push(player)
        }
    }
    for (let support = 0; support < teamSettings.supports; support++) {
        const player = assign_random('support')
        if(player) {
            sr_sum += player.supportSR
            support_players.push(player)
        }
    }
    for (let damage = 0; damage < teamSettings.damages; damage++) {
        const player = assign_random('damage')
        if(player) {
            sr_sum += player.supportSR
            damage_players.push(player)
        }
    }
    return {
        tanks: tank_players,
        supports: support_players,
        damages: damage_players,
        sr_avg: Math.floor(sr_sum / teamSettings.count)
    }
}

// create as many teams as possible
function create_teams() {
    const teams = []
    for (let i = 0; i < teamsCount; i++) {
        teams.push(randomteam())
    }
    return teams
}

// sort teams based on average
function sort_teams() {
    let sort_teams = create_teams()
    sort_teams = sort_teams.sort((a, b) => (a.sr_avg > b.sr_avg) ? 1 : -1)
    return sort_teams
}

function match_teams() {
    const teams = sort_teams()
    const match_teams = []
    for (let i = 0; i < teams.length; i += 2) {
        match_teams.push(teams.slice(i, i + 2));
    }
    return match_teams
}

//

    return match_teams()
}
