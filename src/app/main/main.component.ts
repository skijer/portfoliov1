import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
mouseOver=0;

OverFunction(i:number): void{
  this.mouseOver=i;
}
}
