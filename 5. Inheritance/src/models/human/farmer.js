import Human from "./human.js";

export default class Farmer extends Human {
  constructor(name, age, gender, favSong, hasPet) {
    super(name, age, gender, favSong, hasPet);

    this.wakesUpAt = 5;
    this.milksACow = true;
  }
  callsASheep() {
    console.log("crni, dojdi vamu");
  }
  drivesATractor(tractorMadeTheSound = "Brm Brm Brm") {
    console.log(tractorMadeTheSound);
  }
}
