import { updateToDo } from '../../services/todos';
import './ToDo.css';
import trash from './trash.png';

export default function ToDo({ toDos, setToDos, handleDelete }) {
  const handleCheck = async (task) => {
    await updateToDo(task.id, !task.is_complete);
    setToDos((prevState) =>
      prevState.map((todo) =>
        todo.id === task.id ? { ...task, is_complete: !task.is_complete } : todo
      )
    );
  };

  return (
    <div>
      <h3>Your To Do List</h3>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <input type="checkbox" checked={toDo.is_complete} onChange={() => handleCheck(toDo)} />
            {toDo.task}
            <img src={trash} className="trash" onClick={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
