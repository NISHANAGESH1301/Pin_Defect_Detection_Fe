import { Component, ElementRef, ViewChild } from '@angular/core';
import { DefectDetectionService } from '../../../../core/services/defect-detection.service';

@Component({
  selector: 'app-detection-page',
  templateUrl: './detection-page.component.html',
  styleUrls: ['./detection-page.component.scss']
})
export class DetectionPageComponent {

  preview: any = null;
  loading = false;
  prediction: any = null;

  resultText = '';
  confidenceText = '';
  resultType: 'ok' | 'defect' | null = null;
  resultClass = '';

  @ViewChild('canvasRef') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('imgRef') imgRef!: ElementRef<HTMLImageElement>;

  constructor(private defectService: DefectDetectionService) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => this.preview = reader.result;
    reader.readAsDataURL(file);

    this.loading = true;
    this.resultText = '';
    this.prediction = null;

    this.defectService.detectDefect(file).subscribe(res => {
      this.prediction = res;
      this.loading = false;

      if (res.detections.length > 0) {
        const maxConf = Math.max(...res.detections.map((d: any) => d.confidence));
        this.resultType = 'defect';
        this.resultClass = 'defect';
        this.resultText = 'Defect Detected';
        this.confidenceText = `Confidence: ${(maxConf * 100).toFixed(1)}%`;

        setTimeout(() => this.drawBoxes());
      } else {
        this.resultType = 'ok';
        this.resultClass = 'ok';
        this.resultText = 'No Defect Found';
        this.confidenceText = '';
      }
    });
  }

  drawBoxes() {
    if (!this.prediction?.detections.length) return;

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    const img = this.imgRef.nativeElement;

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;

    this.prediction.detections.forEach((d: any) => {
      const [x1, y1, x2, y2] = d.bbox;
      ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
    });
  }
}
