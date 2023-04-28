import { Behaviour } from "@needle-tools/engine";

export class Rotate extends Behaviour {
    update(): void {
        this.gameObject.rotateY(this.context.time.deltaTime);
    }
}