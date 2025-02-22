import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoItem } from '../interface/todo';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [FormsModule, NgClass, CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() item: ToDoItem;
  @Output() remove = new EventEmitter() // emitting event -> вызывает ивент

  isEditing: boolean = false

  constructor() {
    this.item = {
      id: 0,
      name: "1",
      isCompleted: false
    }
  }

  startEdit = () => {
    this.isEditing = !this.isEditing
  }

  changeState = () => {
    this.item.isCompleted = !this.item.isCompleted
  }

  removeTask = () => {
    this.remove.emit(this.item.id)
  }

}
