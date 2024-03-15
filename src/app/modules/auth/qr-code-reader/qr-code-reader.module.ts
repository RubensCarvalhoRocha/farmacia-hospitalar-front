import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeReaderComponent } from './qr-code-reader.component';
import { Route, RouterModule } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from 'app/shared/shared.module';

const qrCodeRoutes: Route[] = [
    {
        path: '',
        component: QrCodeReaderComponent,
    },
];

// // Necessary to solve the problem of losing internet connection
// LOAD_WASM().subscribe();
@NgModule({
    declarations: [QrCodeReaderComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(qrCodeRoutes),
        ZXingScannerModule,

        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatMenuModule,
        SharedModule
    ],
})
export class QrCodeReaderModule {}
