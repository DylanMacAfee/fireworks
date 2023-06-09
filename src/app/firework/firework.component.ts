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
    const fireworksContainer = document.getElementById("fireworks-container");
    const fireworks = new Fireworks(fireworksContainer!, {
      trace: 8,
      acceleration: 1,
      particles: 30,
      traceSpeed: 5,
    });

    fireworks.start();
  }

}
