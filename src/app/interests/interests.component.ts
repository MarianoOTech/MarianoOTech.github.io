import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  interets : Array<any> = []

  constructor() {}

  ngOnInit(): void{
    let interest1 = {
      name: "Technology"
    };

    let interest2 = {
      name: "Video Games"
    };

    let interest3 = {
      name: "Coding"
    };

    let interest4 = {
      name: "Animation"
    };

    let interest5 = {
      name: "Movies"
    };

    let interest6 = {
      name: "Desing"
    }

    let interest7 = {
      name: "Electronic Music"
    }

    let interest8 = {
      name: "Drawing"
    }

    this.interets.push(interest1);
    this.interets.push(interest2);
    this.interets.push(interest3);
    this.interets.push(interest4);
    this.interets.push(interest5);
    this.interets.push(interest6);
    this.interets.push(interest7);
    this.interets.push(interest8);
    console.log(this.interets);
  }
}
