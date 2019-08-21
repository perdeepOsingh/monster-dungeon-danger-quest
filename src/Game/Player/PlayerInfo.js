export default class PlayerInfo {
  constructor(jsonObj = {}) {
    this.name = jsonObj.name || null
    this.health = Number(jsonObj.health) || 100 // default health is 100
    this.attack = Number(jsonObj.attack) || 10 // default attack is 10
    this.defence = Number(jsonObj.defence) || 10 // default defence is 10
  }
}