import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RouterModule } from '@angular/router'

// import { HomePageRoutingModule } from './home-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
        NgCircleProgressModule.forRoot({
          "radius": "94",
          "maxPercent": "100",
          "unitsFontSize": "20",
          "outerStrokeWidth": 10,
          "outerStrokeColor": "#c45fb6",
          "innerStrokeColor": "#26785f",
          "innerStrokeWidth": 5,
          "titleFontSize": "40",
          "titleFontWeight": "500",
          "animationDuration": "3500",
          "clockwise": false,
        })
      ],
  declarations: [HomePage]

})
export class HomePageModule {}
