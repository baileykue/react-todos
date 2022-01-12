import './ToDoControls.css';

export default function ToDoControls({ task, setTask, handleSubmit }) {
  return (
    <div>
      <h2>Welcome User! We are happy you are here.</h2>
      <input
        type="text"
        placeholder="add a to do"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
