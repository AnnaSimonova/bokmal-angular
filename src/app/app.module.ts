import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleService } from "./article.service";
import { MockXHRBackend } from './mock-xhr-backend';
import { MenuComponent } from './menu/menu.component';
import { SectionListComponent } from './section-list/section-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    MenuComponent,
    SectionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      BrowserAnimationsModule
  ],
  providers: [
    ArticleService,
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
