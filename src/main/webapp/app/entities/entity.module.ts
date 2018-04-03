import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterNoI18NSampleApplicationBankAccountModule } from './bank-account/bank-account.module';
import { JhipsterNoI18NSampleApplicationLabelModule } from './label/label.module';
import { JhipsterNoI18NSampleApplicationOperationModule } from './operation/operation.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
  // prettier-ignore
  imports: [
        JhipsterNoI18NSampleApplicationBankAccountModule,
        JhipsterNoI18NSampleApplicationLabelModule,
        JhipsterNoI18NSampleApplicationOperationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterNoI18NSampleApplicationEntityModule {}
