import { Component, OnInit, Input } from '@angular/core';
import { IconOptions } from './icon.enum';

@Component({
  selector: 'raqn-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() icon = IconOptions.plus as String

  @Input() viewBox="0 0 24 24"


  constructor() { }

  ngOnInit(): void {
  }
}

