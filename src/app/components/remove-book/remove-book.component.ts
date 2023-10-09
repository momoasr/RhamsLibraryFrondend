import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.css']
})
export class RemoveBookComponent {
  removeBookFormGroup!: FormGroup;

  constructor(private fb: FormBuilder,
    private http:HttpClient){ }

  ngOnInit(){
    this.removeBookFormGroup = this.fb.group({
      
    })
  }
  

}