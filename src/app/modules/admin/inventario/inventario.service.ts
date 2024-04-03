import { BehaviorSubject, Observable, catchError, tap, of, map } from 'rxjs';
import { environment } from 'envinronments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Remedio } from 'app/model/Remedio';

@Injectable({
    providedIn: 'root',
})
export class InventarioService {
    private _remedios: BehaviorSubject<Remedio[]> =
        new BehaviorSubject([]);

    constructor(private http: HttpClient) {}

    get _remedios$(): Observable<Remedio[]> {
        return this._remedios.asObservable();
    }

    listarRemedios(): Observable<Remedio[]> {
        return this.http
            .get<Remedio[]>(`${environment.api}/farmacia`)
            .pipe(
                catchError((error) => {
                    this._remedios.next([]);
                    return of([]);
                }),
                tap((response: Remedio[]) => {
                    this._remedios.next(response);
                })
            );
    }

    getRemedioById(nomeDoMedicamento: number): Observable<Remedio> {
        return this._remedios.pipe(
            map((remedios: any[]) => remedios.find((remedio) => remedio.nomeMedicamento === nomeDoMedicamento))
        );
    }

}
