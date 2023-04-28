import {
  Behaviour,
  OpenURL,
  serializable,
  showBalloonMessage,
} from "@needle-tools/engine";

export class Rotate extends Behaviour {
  @serializable()
  speed: number = 5;

  update(): void {
    this.gameObject.rotateY(this.context.time.deltaTime * this.speed);

    this.gameObject.position.y +=
      Math.sin(this.context.time.time) * this.context.time.deltaTime;
  }
}
