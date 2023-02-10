import Mammal from "../mammal.js";

export default class Human extends Mammal {
  constructor(name, age, gender, favSong, hasPet) {
    super(name, age, gender);

    this.numberOfLegs = 2;
    this.speaks = true;
    this.favSong = favSong;
    this.hasPet = hasPet;
  }
  sneezes() {
    console.log("Ckouh");
  }
  singing(whatWasSang = "pesnice nekoe") {
    console.log(whatWasSang);
  }
}
