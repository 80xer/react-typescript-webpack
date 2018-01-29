import * as React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTask: '',
      tasks: [],
    };
  }
  handSubmit(e) {
    e.preventDefault();
    this.setState({
      currentTask: '',
      tasks: [
        ...this.state.tasks,
        {
          id: this._timeInMilliseconds(),
          value: this.state.currentTask,
          completed: false,
        },
      ],
    });
  }

  deleteTask(id) {
    const tasks = this.state.tasks.filter(
      (task) => task.id !== id
    );
    this.setState({ tasks });
  }

  toggleDone(index) {
    let task = this.state.tasks.splice(index, 1);
    task[0].completed = !task[0].completed;
    const tasks = [...this.state.tasks, ...task];
    this.setState({ tasks: tasks });
  }

  renderTasks() {
    return this.state.tasks.map((task, index) => {
      return (
        <div key={task.id} className="tdl-task">
          <span className={task.completed ? 'is-completed' : ''}>
            {task.value}
          </span>
          <button onClick={() => this.deleteTask(task.id)}>Delete</button>
          <button onClick={() => this.toggleDone(index)}>
            {task.completed ? 'undo' : 'done'}
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>l</h1>
        <form onSubmit={e => this.handSubmit(e)}>
          <input
            type="text"
            className="tdl-input"
            placeholder="Add a Task"
            onChange={e => this.setState({ currentTask: e.target.value })}
            value={this.state.currentTask}
          />
          <button type="submit">Add Task</button>
        </form>
        <section>{this.renderTasks()}</section>
      </div>
    );
  }

  _timeInMilliseconds() {
    const date = new Date();
    return date.getTime();
  }
}