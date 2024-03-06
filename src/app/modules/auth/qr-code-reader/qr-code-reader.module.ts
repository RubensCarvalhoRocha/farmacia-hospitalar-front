import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeReaderComponent } from './qr-code-reader.component';
import { Route, RouterModule } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

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
        ZXingScannerModule
    ],
})
export class QrCodeReaderModule {}
