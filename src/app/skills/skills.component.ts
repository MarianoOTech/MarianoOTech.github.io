import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Array<any> = [];

  ngOnInit(): void {
    let skill1 = {
      description: "Data Analysis"
    };

    let skill2 = {
      description: "Web Development"
    };

    let skill3 = {
      description: "Teamwork"
    };

    let skill4 = {
      description: "Communication"
    };

    let skill5 = {
      description: "Collaboration"
    };

    let skill6 = {
      description: "Collaboration"
    };

    let skill7 = {
      description: "Creativity"
    }


    this.skills.push(skill1);
    this.skills.push(skill2);
    this.skills.push(skill3);
    this.skills.push(skill4);
    this.skills.push(skill5);
    this.skills.push(skill6);
    this.skills.push(skill7);
    console.log(this.skills);
  }
}
