import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponents } from './components/Books/book-list.component';

const routes: Routes = [
  { path: 'book-list', component: BookComponents },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
