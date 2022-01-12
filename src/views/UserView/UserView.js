import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ToDo from '../../components/ToDo/ToDo';
import { signOut } from '../../services/users';
import { createToDo, fetchToDos, updateToDo, deleteById } from '../../services/todos';
import './UserView.css';
import ToDoControls from '../../components/ToDoControls/ToDoControls';

export default function UserView({ currentUser, setCurrentUser }) {
  const [toDos, setToDos] = useState([]);
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      setToDos(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const signOutUser = async () => {
    await signOut();
    setCurrentUser(null);
  };

  const handleSubmit = async () => {
    try {
      const [resp] = await createToDo(task);
      setToDos((prevState) => [...prevState, resp]);
      setTask('');
      alert('You have successfully added a todo!');
    } catch {
      alert('Something went wrong! Please try again');
    }
  };

  const handleCheck = async (task) => {
    await updateToDo(task.id, !task.is_complete);
    setToDos((prevState) =>
      prevState.map((todo) =>
        todo.id === task.id ? { ...task, is_complete: !task.is_complete } : todo
      )
    );
  };

  const handleDelete = async (id) => {
    try {
      await deleteById(id);
      alert('You have successfully removed this task!');
    } catch {
      alert('Something went wrong! Please try again.');
    }
  };

  if (loading) return <h3>Loading to dos...</h3>;

  return (
    <div className="user-view">
      <Header signOutUser={signOutUser} currentUser={currentUser} />
      <ToDoControls task={task} setTask={setTask} handleSubmit={handleSubmit} />
      <ToDo
        toDos={toDos}
        setToDos={setToDos}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    </div>
  );
}
