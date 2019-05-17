import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ArticleListComponent} from "./article-list/article-list.component";

const routes: Routes = [
  { path: ':art_section', component: ArticleListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
