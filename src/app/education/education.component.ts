import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationExperience : Array<any> = [];
  ngOnInit(): void {
    let educ1 = {
      fecha: "2022 - Presente",
      ubicacion: "Ixtac Ver.",
      puesto: "Universidad Veracruzana",
      empresa: "Software Engineer",
    };

    let educ2 = {
      fecha: "2019 - 2022",
      ubicacion: "Cordoba Ver.",
      puesto: "CBTIS No. 47",
      empresa: "Programming",
    };

    this.educationExperience.push(educ1);
    this.educationExperience.push(educ2);
    console.log(this.educationExperience);
  }
}
