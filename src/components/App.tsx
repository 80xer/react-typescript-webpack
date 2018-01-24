import * as React from 'react';

export class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentTask: '',
      tasks: [],
    };
  }
  public handSubmit(e: React.FormEvent<HTMLFormElement>): void {
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

  public deleteTask(id: number): void {
    const tasks: Array<ITask> = this.state.tasks.filter(
      (task: ITask) => task.id !== id
    );
    this.setState({ tasks });
  }

  public toggleDone(index: number): void {
    let task: ITask[] = this.state.tasks.splice(index, 1);
    task[0].completed = !task[0].completed;
    const tasks: ITask[] = [...this.state.tasks, ...task];
    this.setState({ tasks: tasks });
  }

  public renderTasks(): JSX.Element[] {
    return this.state.tasks.map((task: ITask, index: number) => {
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

  public render(): JSX.Element {
    console.log(this.state);
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

  private _timeInMilliseconds(): number {
    const date: Date = new Date();
    return date.getTime();
  }
}

interface IState {
  currentTask: string;
  tasks: Array<ITask>;
}

interface ITask {
  id: number;
  value: string;
  completed: boolean;
}
