import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  createBookFormGroup!: FormGroup;
  books: Book[] = [];
  createBook!: Book;
  
  constructor(private fb: FormBuilder, 
    private http: HttpClient){ }
  

  ngOnInit(){
    // this.createBookFormGroup = new FormGroup({
    //   title: new FormControl(),
    //   author: new FormControl(),
    //   genre: new FormControl(),
    //   year: new FormControl()
    // });
    this.createBookFormGroup = this.fb.group({
      title: [''],
      author: [''],
      genre: [''],
      year: [2020],
    });
  }
  onCreateBook(): void {
    console.log(this.createBookFormGroup.value);
    console.log(this.createBookFormGroup.valid);
  }
  
}
