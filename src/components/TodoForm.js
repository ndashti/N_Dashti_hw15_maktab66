import React, { Component } from 'react';
import './todoFrom.scss';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  titleChangeHandler = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.title === '') {
      return;
    }
    if (Object.keys(this.props.currentTodo).length !== 0 ) {
        this.props.updateTodo({
            ...this.props.currentTodo, title: this.state.title
        });
    } else {
      this.props.addTodo(this.state.title);
    }
    this.setState({
      title: '',
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.currentTodo !== prevProps.currentTodo && this.props.currentTodo) {
        this.setState({
            title: this.props.currentTodo.title,
          });
    }
  }

  render() {
    return (
      <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
          <form
            onSubmit={this.onSubmit}
            className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center"
          >
            <div className="col">
              <input
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                type="text"
                onChange={this.titleChangeHandler}
                value={this.state.title || ''}
                placeholder="تعريف كار جديد"
              />
            </div>
            <div className="col-auto px-0 mx-0 mr-2">
              <button type="submit" className="btn btn-primary">
                { Object.keys(this.props.currentTodo).length !== 0  ? 'ويرايش' : 'افزودن'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


