import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true, 
  imports: [FormsModule, CommonModule], 
  templateUrl: './student.html',
  styleUrls: ['./student.css'],
})
export class Student {
  name: string = "Swapnil";
  PRN: string = "24UAM301";
  dept: string = "AIML";

  cityArr: string[] = ['Pune', 'Sangli', 'Kolhapur'];

  changeName() {
    this.name = this.name === "Swapnil" 
      ? "Swapnil Bhosale" 
      : "Swapnil";
  }
}