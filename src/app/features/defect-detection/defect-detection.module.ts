import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectionPageComponent } from './components/detection-page/detection-page.component';
import { DefectDetectionRoutingModule } from './defect-detection-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [DetectionPageComponent],
  imports: [
    CommonModule,
    DefectDetectionRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class DefectDetectionModule { }
