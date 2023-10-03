import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})

export class BookComponents{
    title = 'List of Book';
}