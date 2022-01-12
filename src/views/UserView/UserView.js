import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ToDo from '../../components/ToDo/ToDo';
import { signOut } from '../../services/users';
import { createToDo, fetchToDos } from '../../services/todos';
import { deleteById } from '../../services/todos';
import './UserView.css';

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

  const handleDelete = async () => {
    try {
      //await deleteById();
      alert('You have successfully removed this task!');
      console.log('throw it in the trash');
    } catch {
      alert('Something went wrong! Please try again.');
    }
  };

  if (loading) return <h3>Loading to dos...</h3>;

  return (
    <div className="user-view">
      <Header signOutUser={signOutUser} currentUser={currentUser} />
      <h2>Welcome User! We are happy you are here.</h2>
      <input
        type="text"
        placeholder="add a to do"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ToDo toDos={toDos} handleDelete={handleDelete} />
    </div>
  );
}
