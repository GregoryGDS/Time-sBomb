import { Component, ChangeDetectionStrategy, ViewChild, OnInit} from '@angular/core';
import { SplitComponent, SplitAreaDirective } from 'angular-split';

@Component({
  selector: 'sp-ex-simple',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
      'class': 'split-example-page'
  },
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @ViewChild('split', {static: false}) split: SplitComponent;
  @ViewChild('area1', {static: false}) area1: SplitAreaDirective;
  @ViewChild('area2', {static: false}) area2: SplitAreaDirective;
  @ViewChild('area3', {static: false}) area3: SplitAreaDirective;
  @ViewChild('area4', {static: false}) area4: SplitAreaDirective;
  
  direction: string = 'horizontal'
  sizes = {
      percent: {
          area1: 50,
          area2: 50,
          area3: 50,
          area4: 50,
      },
  } 

  constructor() {

      setTimeout(() => {
          console.log('>>> split > ', this.split);
          console.log('>>> area1 > ', this.area1);
          console.log('>>> area2 > ', this.area2);
          console.log('>>> area3 > ', this.area3);
          console.log('>>> area4 > ', this.area4);
      }, 1000);
  }

  dragEnd(unit, {sizes}) {
      if(unit === 'percent') {
          this.sizes.percent.area1 = sizes[0];
          this.sizes.percent.area2 = sizes[1];
          this.sizes.percent.area3 = sizes[2];
          this.sizes.percent.area4 = sizes[3];
      }
  }

  ngOnInit(): void {
  }

}