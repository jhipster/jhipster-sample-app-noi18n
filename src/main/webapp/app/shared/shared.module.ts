import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterNoI18NSampleApplicationSharedLibsModule,
  JhipsterNoI18NSampleApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterNoI18NSampleApplicationSharedLibsModule, JhipsterNoI18NSampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterNoI18NSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterNoI18NSampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterNoI18NSampleApplicationSharedModule
    };
  }
}
