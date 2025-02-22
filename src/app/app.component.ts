import { Component } from '@angular/core';
import { TodoItemListComponent } from './todo-item-list/todo-item-list.component';

@Component({
  selector: 'app-root',
  imports: [TodoItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lecture4';
}
