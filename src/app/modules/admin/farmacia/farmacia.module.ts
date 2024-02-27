import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FarmaciaComponent } from './farmacia.component';

const farmaciaRoutes: Route[] = [
    {
        path: '',
        component: FarmaciaComponent,
    },
];

@NgModule({
    declarations: [FarmaciaComponent],
    imports: [RouterModule.forChild(farmaciaRoutes)],
})
export class FarmaciaModule {}
