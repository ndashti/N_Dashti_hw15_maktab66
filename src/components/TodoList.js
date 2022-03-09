import React, { Component } from "react";
import { BsPencil, BsTrash, BsCheck2Square, BsSquare } from "react-icons/bs";
import "./TodoList.scss";

export default class Todolist extends Component {
  render() {
    return (
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          {this.props.todoList.map((todo) => {
            return (
              <div
                key={todo.id}
                className="row px-3 my-2 align-items-center todo-item rounded border border-1 rounded "
              >
                <div
                  onClick={() => this.props.onChangeDone(todo.id)}
                  className="col-auto m-1 p-0 d-flex align-items-center"
                >
                  <h2 className="m-0 p-0">
                    {!todo.isDone ? (
                      <BsSquare
                        size="2em"
                        className="text-primary btn p-0"
                        title="Mark as complete"
                      />
                    ) : (
                      <BsCheck2Square
                        size="2em"
                        className="text-primary btn p-0"
                        title="Mark as todo"
                      />
                    )}
                  </h2>
                </div>
                <div className="col px-1 m-1 d-flex align-items-center">
                  {!todo.isDone ? (
                    <input className="todo bg-transparent rounded px-3" value={todo.title} />
                  ) : (
                    <input className="todo-isdone bg-transparent rounded px-3" value={todo.title} />
   
                  )}
                </div>

                <div className="d-flex col-auto m-1 p-0 todo-actions">

                    <h5
                      className="m-0 p-0 px-2"
                      onClick={() => this.props.onEdit(todo)}
                    >
                      <BsPencil
                        className="text-info btn p-0"
                        size="1.5em"
                        title="Edit todo"
                      />
                    </h5>
                    <h5
                      className="p-0 px-2"
                      onClick={() => this.props.onRemove(todo.id)}
                    >
                      <BsTrash
                        className="text-danger btn m-0 p-0"
                        size="1.5em"
                        title="Delete todo"
                      />
                    </h5>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    );
  }
}
