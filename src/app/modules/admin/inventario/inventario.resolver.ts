import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
} from '@angular/router';
import { InventarioService } from './inventario.service';
import { Remedio } from 'app/model/Remedio';

@Injectable({
    providedIn: 'root',
})
export class ResolverRemedios implements Resolve<Remedio[]> {
    constructor(private _service: InventarioService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Remedio[]> {
        return this._service.listarRemedios();
    }
}

// @Injectable({
//     providedIn: 'root',
// })
// export class InventarioResolver2 implements Resolve<[]> {
//     constructor(private _service: InventarioService) {}

//     resolve(
//         route: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot
//     ): Observable<[]> {
//         return this._service.listarEventos();
//     }
// }
