import { Component, Input, OnInit } from '@angular/core';
import { ISocial } from '../mock';

@Component({
  selector: 'app-element-about',
  templateUrl: './element-about.component.html',
  styleUrls: ['./element-about.component.css']
})
export class ElementAboutComponent implements OnInit {

  @Input() activeSocial: ISocial;

  constructor() { }

  ngOnInit() {
  }


}
