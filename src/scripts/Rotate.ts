import {
  Behaviour,
  OpenURL,
  serializable,
  showBalloonMessage,
} from "@needle-tools/engine";

export class Rotate extends Behaviour {
  // Exposing a property for Unity!
  @serializable()
  speed: number = 5;

  update(): void {
    this.gameObject.rotateY(this.context.time.deltaTime * this.speed);
  }
}
