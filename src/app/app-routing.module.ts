import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponents } from './components/books.component';

const routes: Routes = [
  { path: 'books', component: BookComponents },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
