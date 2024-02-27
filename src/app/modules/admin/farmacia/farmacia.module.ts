import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { FarmaciaComponent } from './farmacia.component';

const farmaciaRoutes: Route[] = [
    {
        path: '',
        component: ExampleComponent,
    },
];

@NgModule({
    declarations: [FarmaciaComponent],
    imports: [RouterModule.forChild(farmaciaRoutes)],
})
export class FarmaciaModule {}
