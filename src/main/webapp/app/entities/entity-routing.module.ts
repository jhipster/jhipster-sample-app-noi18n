import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bank-account',
        data: { pageTitle: 'BankAccounts' },
        loadChildren: () => import('./bank-account/bank-account.routes'),
      },
      {
        path: 'label',
        data: { pageTitle: 'Labels' },
        loadChildren: () => import('./label/label.routes'),
      },
      {
        path: 'operation',
        data: { pageTitle: 'Operations' },
        loadChildren: () => import('./operation/operation.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
