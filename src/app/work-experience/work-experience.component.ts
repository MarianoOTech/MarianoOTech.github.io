import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];
  ngOnInit(): void {
    let work1 = {
      fecha: "2018 - 2022",
      ubicacion: "Ixtac Ver.",
      puesto: "CEO",
      empresa: "Waves Lab",
      logros: [
        {description: "Constructor de un ERP en la nube de google"},
        {description: "Creacion de un cluster en hadoop y spark"}
      ]
    };

    let work2 = {
      fecha: "2014 - 2024",
      ubicacion: "Orizaba Ver.",
      puesto: "CEO",
      empresa: "Kubeet",
      logros: [
        {description: "Constructor de un invernadero hidroponico"},
        {description: "Creacion de un dron autonomo"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);
  }
}

