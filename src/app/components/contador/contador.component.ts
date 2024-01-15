import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  count:number = 0;
  
  clickCount():void{
    this.count++;
  }
}
