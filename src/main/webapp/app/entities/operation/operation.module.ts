import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterNoI18NSampleApplicationSharedModule } from 'app/shared';
import {
  OperationService,
  OperationComponent,
  OperationDetailComponent,
  OperationUpdateComponent,
  OperationDeletePopupComponent,
  OperationDeleteDialogComponent,
  operationRoute,
  operationPopupRoute,
  OperationResolve
} from './';

const ENTITY_STATES = [...operationRoute, ...operationPopupRoute];

@NgModule({
  imports: [JhipsterNoI18NSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    OperationComponent,
    OperationDetailComponent,
    OperationUpdateComponent,
    OperationDeleteDialogComponent,
    OperationDeletePopupComponent
  ],
  entryComponents: [OperationComponent, OperationUpdateComponent, OperationDeleteDialogComponent, OperationDeletePopupComponent],
  providers: [OperationService, OperationResolve],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterNoI18NSampleApplicationOperationModule {}
