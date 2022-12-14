import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { rankingModel } from 'src/app/MODELS/rankingModel';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  actualizarForm = new BehaviorSubject<rankingModel>({} as any);

  constructor(private http: HttpClient) { }
  list: rankingModel[];
  
  obtenerClubs() {
    this.http.get('http://localhost:3000/api/ranking/').toPromise().then(data => { this.list = data as rankingModel[]; });
  }
  obtenerClubs1(): Promise<rankingModel[]> {
    return this.http.get('http://localhost:3000/api/ranking/')
      .toPromise()
      .then(data => this.list = data as rankingModel[]);
  }
}
