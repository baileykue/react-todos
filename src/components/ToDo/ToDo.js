import './ToDo.css';
import trash from './trash.png';

export default function ToDo({ toDos, handleCheck, handleDelete }) {
  return (
    <div className="to-do">
      <h3 className="title">Your To Do List</h3>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <input type="checkbox" checked={toDo.is_complete} onChange={() => handleCheck(toDo)} />
            {toDo.task}
            <img id={toDo.id} src={trash} className="trash" onClick={() => handleDelete(toDo.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
