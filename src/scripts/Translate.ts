import { Behaviour, serializable } from "@needle-tools/engine";

export class Translate extends Behaviour {
  @serializable()
  factor: number = 1;

  update() {
    this.gameObject.position.y +=
      Math.sin(this.context.time.time) * 0.01 * this.factor;
  }
}
