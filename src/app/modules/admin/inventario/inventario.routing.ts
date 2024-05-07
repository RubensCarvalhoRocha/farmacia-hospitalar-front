import { Route } from '@angular/router';
import { InventarioComponent } from './inventario.component';
import { ItemComponent } from './item/item.component';
import { ResolverRemedios } from './inventario.resolver';

export const InventarioRoutes: Route[] = [
    {
        path: '',
        component: InventarioComponent,
        resolve: { ResolverRemedios },
    },

    {
        path: ':id',
        component: ItemComponent,
        resolve: {},
    },
];
