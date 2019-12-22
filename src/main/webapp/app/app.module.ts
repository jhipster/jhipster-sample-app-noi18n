import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterNoI18NSampleApplicationSharedModule } from 'app/shared/shared.module';
import { JhipsterNoI18NSampleApplicationCoreModule } from 'app/core/core.module';
import { JhipsterNoI18NSampleApplicationAppRoutingModule } from './app-routing.module';
import { JhipsterNoI18NSampleApplicationHomeModule } from './home/home.module';
import { JhipsterNoI18NSampleApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterNoI18NSampleApplicationSharedModule,
    JhipsterNoI18NSampleApplicationCoreModule,
    JhipsterNoI18NSampleApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterNoI18NSampleApplicationEntityModule,
    JhipsterNoI18NSampleApplicationAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterNoI18NSampleApplicationAppModule {}
