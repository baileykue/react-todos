import './ToDo.css';

export default function ToDo({ toDos }) {
  return (
    <div>
      <h3>these will be your to dos</h3>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <input type="checkbox" checked={toDo.is_complete} />
            {toDo.task}
          </li>
        ))}
      </ul>
    </div>
  );
}
