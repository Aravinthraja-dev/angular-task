import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <div *ngFor="let num of numbers">
      {{ printNumber(num) }}
    </div>
  `,
})
export class App implements OnInit{
  name = 'Aravinth Raja';
  numbers: number[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= 50; i++) {
      this.numbers.push(i);
    }
  }

  printNumber(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) {
      return "amazon";
    } else if (num % 3 === 0) {
      return "google";
    } else if (num % 5 === 0) {
      return "facebook";
    } else {
      return num.toString();
    }
  }
}

bootstrapApplication(App);
