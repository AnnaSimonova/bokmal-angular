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
import { HeaderComponent } from './header/header.component';
import { SortPipe } from './sort.pipe';
import { SortParametersComponent } from './sort-parameters/sort-parameters.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from "@angular/forms";
import { HighlightSearchPipe } from './highlight-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    MenuComponent,
    HeaderComponent,
    SortPipe,
    SortParametersComponent,
    FooterComponent,
    SearchPipe,
    HighlightSearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      BrowserAnimationsModule,
      FormsModule
  ],
  providers: [
    ArticleService,
      ArticleListComponent,
      SortParametersComponent,
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
