import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetectionPageComponent } from './components/detection-page/detection-page.component';

const routes: Routes = [
  { path: '', component: DetectionPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefectDetectionRoutingModule {}
