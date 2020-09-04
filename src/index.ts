import app from "./server"
import Schema from 'async-validator';
import Player from './player'
import type {player} from './player'
import sort from './sort'

const rules:any = {
    name: [
      { required: true, type: 'string',  min: 3, max: 12, message: "Please input player name"},
      { min: 3, max: 12, message: "Length should be 3 to 12"},
    ],
    tankSR: [{ required: true, type: 'number', min: 0, max: 5000, message: "Please input valid tank rank"}],
    damageSR: [{ required: true, type: 'number', min: 0, max: 5000, message: "Please input valid damage rank"}],
    supportSR: [{ required: true, type: 'number', min: 0, max: 5000, message: "Please input valid support rank"}],
    tank: [{ required: true, type: 'boolean', message: "Please input"}],
    damage: [{ required: true, type: 'boolean', message: "Please input"}],
    support: [{ required: true, type: 'boolean', message: "Please input"}],
  };

const form = new Schema(rules);

const players: player[] = []

app.post('/', function (req, res) {
    form.validate(req.body, {}, (error) => {
      if (error) {
        return res.send(error)
      }
      players.push(new Player(req.body))
      return res.send('Ok')
    });  
  })

  app.get('/match/', async (req, res) => {
      const teams = await sort(players)
    return res.send(teams)
  })
