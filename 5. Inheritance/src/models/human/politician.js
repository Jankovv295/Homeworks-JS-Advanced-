import Human from "./human.js";

export default class Politician extends Human {
  constructor(name, age, gender, favSong, hasPet) {
    super(name, age, gender, favSong, hasPet);

    this.steal = true;
    this.hasGraduated = true;
    this.hasDiplomaticPassport = true;
    this.hasFullfilledHisPromises = false;
  }
  promising(promise = "prosecna plata 2k $") {
    console.log(promise);
  }
}
