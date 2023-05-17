import {Component, Input} from '@angular/core';
import {Picture} from "../../models/picture";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class PictureComponent {

  @Input({ required: true }) picturePropertie: Picture;
  @Input() imageClass: string;
}
