import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 1. Import it

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  name : string = "Swapnil";
  PRN : string = "24UAM301";
  dept : string = "AIML";

  changeName(){
    if(this.name === "Swapnil"){
      this.name = "Swapnil Bhosale";
    }
    else{
      this.name = "Swapnil";
    }
  }

  cityArr :string[] = ['Pune','Sangli','Kolhapur'];
}
