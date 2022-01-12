import './ToDo.css';
import trash from './trash.png';

export default function ToDo({ toDos, handleDelete }) {
  return (
    <div>
      <h3>Your To Do List</h3>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <input type="checkbox" />
            {toDo.task}
            <img src={trash} className="trash" onClick={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
