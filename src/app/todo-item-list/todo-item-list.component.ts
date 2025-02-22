import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToDoItem } from '../interface/todo';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-item-list',
  imports: [
    CommonModule, FormsModule, TodoItemComponent
  ],
  templateUrl: './todo-item-list.component.html',
  styleUrl: './todo-item-list.component.css'
})
export class TodoItemListComponent {
  items: ToDoItem[] = []

  inputValue: string = ""
  tempId: number = 0

  // Pure JS variants with event handling
  // changeInput = (event: any) => {
  //   // event.target.value === value of input field
  //   // in this part we assign text data to our field
  //   this.inputValue = event.target.value
  // }

  removeTask = (id: any) => {
    this.items = this.items.filter((el) => el.id !== id)
  }

  createTask = () => {
    if (this.items.length === 0) {
      this.tempId = 0
    }
    this.items.push({
      id: ++this.tempId,
      name: this.inputValue,
      isCompleted: false
    })
    this.inputValue = ""
  }
}
