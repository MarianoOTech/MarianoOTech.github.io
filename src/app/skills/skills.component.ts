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
      description: "Data Analysis",
      percentage: 80 // Porcentaje de habilidad
    };

    let skill2 = {
      description: "Web Development",
      percentage: 90
    };

    let skill3 = {
      description: "Teamwork",
      percentage: 70
    };

    let skill4 = {
      description: "Communication",
      percentage: 85
    };

    let skill5 = {
      description: "Collaboration",
      percentage: 75
    };

    let skill6 = {
      description: "Problem Solving",
      percentage: 65
    };

    let skill7 = {
      description: "Creativity",
      percentage: 60
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
