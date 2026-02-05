import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Alert } from 'app/shared/alert/alert';
import { AlertError } from 'app/shared/alert/alert-error';
import { FormatMediumDatetimePipe } from 'app/shared/date';
import { IOperation } from '../operation.model';

@Component({
  selector: 'jhi-operation-detail',
  templateUrl: './operation-detail.html',
  imports: [FontAwesomeModule, NgbModule, Alert, AlertError, RouterLink, FormatMediumDatetimePipe],
})
export class OperationDetail {
  operation = input<IOperation | null>(null);

  previousState(): void {
    globalThis.history.back();
  }
}
