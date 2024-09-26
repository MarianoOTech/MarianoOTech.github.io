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
      fecha: "2019 - 2021",
      ubicacion: "Córdoba, Ver.",
      puesto: "Desarrollador Front-End",
      empresa: "HealthTech Solutions",
      logros: [
          { description: "Desarrollo de una interfaz para software de detección de enfermedades" },
      ]
  };

  let work2 = {
      fecha: "2022 - 2023",
      ubicacion: "Orizaba, Ver.",
      puesto: "Diseñador de Videojuegos",
      empresa: "Pixel Dreams",
      logros: [
          { description: "Colaboración con el equipo de arte para crear gráficos envolventes" }
      ]
  };

  let work3 = {
      fecha: "2023 - 2024",
      ubicacion: "Córdoba, Ver.",
      puesto: "Desarrollador de Software",
      empresa: "Melody Maker",
      logros: [
          { description: "Desarrollo de un software de creación musical con capacidades de inteligencia artificial" },
      ]
  };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);
    console.log(this.workExperience);
  }
}

