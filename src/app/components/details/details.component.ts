import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  searchBookFormGroup!: FormGroup;

  constructor(private fb: FormBuilder,
    private http:HttpClient){ }

  ngOnInit(){
    this.searchBookFormGroup = this.fb.group({
      
    })
  }
  

}
