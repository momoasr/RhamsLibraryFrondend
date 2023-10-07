import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'book-list',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})

export class BookComponents{
    title = 'List of Book';

    clickAction(){
        console.log('libery list was Clicked!!');
    }
}