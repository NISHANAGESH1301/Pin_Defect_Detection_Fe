import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DefectDetectionService {

  constructor(private http: HttpClient) {}

  detectDefect(file: File): Observable<DefectApiResponse> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<DefectApiResponse>(
      `http://127.0.0.1:8000/yolo/predict_image`,
      formData
    );
  }
}

export interface Detection {
  class: string;
  confidence: number;
  bbox: number[];
}

export interface DefectApiResponse {
  detections: Detection[];
  count?: number;
}

