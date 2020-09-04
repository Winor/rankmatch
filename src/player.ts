export interface player {
  name:string;
  tankSR: number;
  damageSR: number;
  supportSR: number;
  tank: boolean;
  damage: boolean;
  support: boolean;
  team: boolean;
  flex: boolean;
  assign(): any;
}

export default class Player implements player {
    name:string;
    tankSR: number;
    damageSR: number;
    supportSR: number;
    tank: boolean;
    damage: boolean;
    support: boolean;
    team: boolean;

    constructor(player: { name: string, tank: boolean, damage: boolean, support: boolean, tankSR: number, damageSR: number, supportSR: number }) {
        this.name = player.name;
        this.tank = player.tank;
        this.damage = player.damage;
        this.support = player.support;
        this.tankSR = player.tankSR;
        this.damageSR = player.damageSR;
        this.supportSR = player.supportSR;
        this.team = false;
      }

    get flex() {
      return this.tank ? (this.damage || this.support) : (this.damage && this.support)
    }

    assign() {
      this.team = true
    }
      
}