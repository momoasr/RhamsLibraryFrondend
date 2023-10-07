import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponents } from './components/books.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'book-list', component: BookComponents },
  { path: 'search-book', component: DetailsComponent},
  { path: 'add-book', component: AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
