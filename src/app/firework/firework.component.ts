import { Component, OnInit } from '@angular/core';
import { Fireworks } from 'fireworks-js';

@Component({
  selector: 'app-firework',
  templateUrl: './firework.component.html',
  styleUrls: ['./firework.component.scss']
})
export class FireworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.startFireworks();
  }

  startFireworks = async () => {
    const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

    const fireworksContainer = document.getElementById("fireworks-container");
    const fireworksBlue = new Fireworks(fireworksContainer!, {
      hue: { min: 0, max: 240},
      trace: 4,
      acceleration: 1.01,
      particles: 100,
      traceSpeed: 8,
      mouse: {click: true, move: false, max: 3},
    });
    const fireworksRed = new Fireworks(fireworksContainer!, {
      hue: { min: 0, max: 0},
      trace: 4,
      acceleration: 1.01,
      particles: 30,
      traceSpeed: 8,
    });

    fireworksBlue.start();
    fireworksRed.start();
    await wait(2000);
  //   fireworksBlue.stop();
  //   fireworksRed.stop();
  }

}
