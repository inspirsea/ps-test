import { Component, ViewChild, ElementRef } from '@angular/core';
import { ParticleSystem } from 'ips';
import { IpsOptions } from '../../../ins-particle-system/lib/model/ips-options';
import { EmitterOptions } from '../../../ins-particle-system/lib/model/emitter-options';
import { RenderMode } from '../../../ins-particle-system/lib/model/render-mode';
import { IpsEmitterOptions } from '../../../ins-particle-system/lib/model/ips-emitter-options';
import { IpsCoordinates } from '../../../ins-particle-system/lib/model/ips-coordinates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('canvas') canvas: ElementRef;
  title = 'app';

  constructor() {
  }

  ngAfterViewInit() {

    let options: IpsOptions = new IpsOptions();
    options.textures = [
      {
        key: "test2",
        image: "https://i.imgur.com/9fXIbBz.jpg"
      }
    ];
    let particleSystem = new ParticleSystem(options, this.canvas.nativeElement, 800, 600);

    let emitterOptions = new IpsEmitterOptions(new IpsCoordinates(400, 400, 300, 300), new IpsCoordinates(-1, 1, -1, 1), 10000);
    emitterOptions.alpha = 1;
    emitterOptions.color = "66f56f";
    emitterOptions.growth = 0;
    emitterOptions.size = { min: 1, max: 5 };
    emitterOptions.lifeTime = { min: 1000, max: 1000 };
    emitterOptions.particlesSec = 10000;
    //emitterOptions.textureKey = "test2"

    particleSystem.addEmitter(emitterOptions)

    let emitterOptions2 = new IpsEmitterOptions(new IpsCoordinates(400, 400, 300, 300), new IpsCoordinates(-1, 1, -1, 1), 10000);
    emitterOptions2.alpha = 0.8;
    emitterOptions2.color = "b22986";
    emitterOptions2.growth = 0;
    emitterOptions2.size = { min: 1, max: 5 };
    emitterOptions2.lifeTime = { min: 1000, max: 1000 };
    emitterOptions2.particlesSec = 10000;

    particleSystem.addEmitter(emitterOptions2)

    particleSystem.onLoad.subscribe(it => {
      particleSystem.start();
    });
  }
}
