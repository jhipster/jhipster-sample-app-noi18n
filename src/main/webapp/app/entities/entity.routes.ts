import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'Authorities' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
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
];

export default routes;
