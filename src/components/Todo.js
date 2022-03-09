import React, { Component } from 'react';
import { BsCardChecklist } from 'react-icons/bs';

import TodoForm from './TodoForm';
import Todolist from './TodoList';

import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './todo.scss';


export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      currentTodo: {},
    };
  }

  addTodo = (title) => {
    if (title) {
      this.setState({
        todoList: [
          ...this.state.todoList,
          {
            id: Math.floor(Math.random() * 10000000000),
            title: title,
            isDone: false,
          },
        ],
      });
    } else {
      alert('متن را وارد کنید.');
    }
  };

  updateTodo = (todo) => {
    this.setState({
      todoList: [
        ...this.state.todoList.filter((todoItem) => todoItem.id !== todo.id),
        {
          id: todo.id,
          title: todo.title,
          isDone: todo.isDone,
        },
      ],
      currentTodo: {},
    });
  };

  handleDelete = (todoId) => {
    const todos = this.state.todoList.filter((t) => {
      return t.id !== todoId;
    });
    this.setState({ todoList: todos });
  };

  handleDone = (todoId) => {
    const todos = [...this.state.todoList];
    todos.map((t) => {
      if (t.id === todoId) {
        t.isDone = !t.isDone;
      }
      return t;
    });
    this.setState({ todoList: todos });
  };

  handleEdit = (todo) => {
    this.setState({ currentTodo: todo });
    
  };

  render() {
    return (
      <>
        <div className="container w-60 m-5 p-2 rounded mx-auto bg-light shadow">
          <div className="row m-1 p-4">
            <div className="col">
              <div className="header h1 text-primary d-flex align-items-center justify-content-center">
                <BsCardChecklist 
                size="3em"
                className="p-2 me-2" />
                <h2>My Todo List</h2>
              </div>
            </div>
          </div>
          <TodoForm
            addTodo={this.addTodo}
            updateTodo={this.updateTodo}
            currentTodo={this.state.currentTodo}
          />

          <div className="p-2 mx-4 border-black-25 border-bottom"></div>

          <Todolist
            todoList={this.state.todoList}
            onChangeDone={this.handleDone}
            onEdit={this.handleEdit}
            onRemove={this.handleDelete}
          />
        </div>
      </>
    );
  }
}


