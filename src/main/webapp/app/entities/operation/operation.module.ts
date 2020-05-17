import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterNoI18NSampleApplicationSharedModule } from 'app/shared/shared.module';
import { OperationComponent } from './operation.component';
import { OperationDetailComponent } from './operation-detail.component';
import { OperationUpdateComponent } from './operation-update.component';
import { OperationDeleteDialogComponent } from './operation-delete-dialog.component';
import { operationRoute } from './operation.route';

@NgModule({
  imports: [JhipsterNoI18NSampleApplicationSharedModule, RouterModule.forChild(operationRoute)],
  declarations: [OperationComponent, OperationDetailComponent, OperationUpdateComponent, OperationDeleteDialogComponent],
  entryComponents: [OperationDeleteDialogComponent],
})
export class JhipsterNoI18NSampleApplicationOperationModule {}
