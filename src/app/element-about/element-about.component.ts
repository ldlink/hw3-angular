import { Component, Input } from '@angular/core';
import { ISocial } from '../shared/interface';

@Component({
  selector: 'app-element-about',
  templateUrl: './element-about.component.html',
  styleUrls: ['./element-about.component.css']
})
export class ElementAboutComponent {

  @Input() activeSocial: ISocial;

}
