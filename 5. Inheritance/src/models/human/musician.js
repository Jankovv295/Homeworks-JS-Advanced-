import Human from "./human.js";

export default class Musician extends Human {
  constructor(name, age, gender, favSong, hasPet) {
    super(name, age, gender, favSong, hasPet);

    this.workout = false;
    this.canSing = true;
    this.canBeBalerine = true;
  }
  singsOpera() {
    console.log("LA LA LA ");
  }
  spinsLikeBalerine() {
    console.log("salto pravi");
  }
}
