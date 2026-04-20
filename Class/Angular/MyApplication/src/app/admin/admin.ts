import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 1. Import it

@Component({
  selector: 'app-admin',
  imports: [FormsModule], // 2. Add to imports array
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  fname:string = "Swapnil";
  lname:string = "Bhosale";
  changeName() {
    if(this.fname === "Swapnil")
      this.fname = "Swap";
    else
      this.fname = "Swapnil";
  }
}
