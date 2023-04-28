import { Behaviour, OpenURL, showBalloonMessage } from "@needle-tools/engine";

export class Rotate extends Behaviour {
  update(): void {
    this.gameObject.rotateY(this.context.time.deltaTime * 0.5);

    this.gameObject.position.y +=
      Math.sin(this.context.time.time) * this.context.time.deltaTime;
  }
}
