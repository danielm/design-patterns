interface Amplifier {
  turnOn(): void;
  turnOff(): void;
  setVolume(volume: number): void;
}

interface Tuner {
  turnOn(): void;
  turnOff(): void;
  selectStation(station: number): void;
}

interface Player {
  play(): void;
  pause(): void;
  stop(): void;
}

class HomeTheaterFacade {
  private amplifier: Amplifier;
  private tuner: Tuner;
  private player: Player;

  constructor(amplifier: Amplifier, tuner: Tuner, player: Player) {
    this.amplifier = amplifier;
    this.tuner = tuner;
    this.player = player;
  }

  watchMovie() {
    this.amplifier.turnOn();
    this.tuner.turnOn();
    this.tuner.selectStation(1);
    this.player.play();
  }

  listenToMusic() {
    this.amplifier.turnOn();
    this.tuner.turnOn();
    this.tuner.selectStation(2);
  }
}

// Usage
const amplifier = new Amplifier();
const tuner = new Tuner();
const player = new Player();

const homeTheater = new HomeTheaterFacade(amplifier, tuner, player);

homeTheater.watchMovie();
homeTheater.listenToMusic();
