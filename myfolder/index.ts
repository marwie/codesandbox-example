
// This is the main entry point of your npm package
// you can add your code here directly or use it to export your api

import { Behaviour, Renderer } from "@needle-tools/engine";
import { Material, MeshBasicMaterial } from "three";

// Learn more about npm definition packages: 
// https://docs.needle.tools/npmdef


export class ChangeRandomColor extends Behaviour {

    update() {
        if (Math.random() < 0.01) {
            const renderer = this.gameObject.getComponent(Renderer);
            if (renderer) {
                const mat = renderer.sharedMaterial as MeshBasicMaterial;
                mat.color.setHex(Math.random() * 0xffffff);
            }
        }
    }

}