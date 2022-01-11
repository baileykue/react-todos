import { client, checkError } from './client';

export async function fetchToDos() {
  const response = await client.from('todos').select();
  return checkError(response);
}

export async function fetchById(id) {
  const response = await client.from('todos').select().match({ id }).single();
  return checkError(response);
}

export async function createToDo(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function updateToDo(id, task, is_complete) {
  const response = await client.from('todos').update({ task, is_complete }).eq('id', id);
  return checkError(response);
}

export async function deleteById(id) {
  const response = await client.from('todos').delete().match({ id });
  return checkError(response);
}
