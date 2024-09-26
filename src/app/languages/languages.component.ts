import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  languages: Array<any> = []

  constructor() {}

  ngOnInit(): void {

    let lenguage1 = {
      name: "Spanish"
    }

    let lenguage2 = {
      name: "English"
    }

    this.languages.push(lenguage1);
    this.languages.push(lenguage2);
    console.log(this.languages);
  }
}
