import './ToDo.css';
import trash from './trash.png';

export default function ToDo({ toDos }) {
  return (
    <div>
      <h3>Your To Do List</h3>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <input type="checkbox" checked={toDo.is_complete} />
            {toDo.task}
            <img src={trash} className="trash" />
          </li>
        ))}
      </ul>
    </div>
  );
}
