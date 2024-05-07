import { Component } from '@angular/core';

import { ChangeDetectionStrategy, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-qr-code-reader',
    templateUrl: './qr-code-reader.component.html',
    styleUrls: ['./qr-code-reader.component.scss'],
})
export class QrCodeReaderComponent {
    @Input() drawer: MatDrawer;

    qrCodeValue: string | null = null;

    onScanSuccess(result: string): void {
        this.qrCodeValue = result;
    }

    enviarCodigoObtido(){

    }
}
