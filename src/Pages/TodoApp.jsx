import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [deleteSuccess, setDeleteSuccess] = useState('')

  const handleAddTodo = () => {
    setTodos([...todos, { title: newTitle, description: newDescription }]);
    setNewTitle('');
    setNewDescription('');
  }

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setDeleteSuccess('Item Deleted SuccessFully')
  }

  const handleEditTodo = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditTitle(todos[index].title);
    setEditDescription(todos[index].description);
  }

  const handleSaveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = { title: editTitle, description: editDescription };
    setTodos(updatedTodos);
    setIsEditing(false);
    setEditIndex(null);
    setEditTitle('');
    setEditDescription('');
  }

  return (
    <div>
      {!isEditing ? (
        <>
          <div className='container'>
            <div className="card">
              <div className="card-body shadow rounded">
                <h1>Add Task</h1>
                <label className="form-label">Enter Title</label>
                <input type="text" className="form-control" placeholder="Add a new title" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
                <label className="form-label">Enter</label>
                <input type="text" className="form-control" placeholder="Add a new description" value={newDescription} onChange={e => setNewDescription(e.target.value)} />
                <button onClick={handleAddTodo} className="btn btn-primary" style={{ marginTop: '16px' }}>Save</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='container'>
            <div className="card">
              <div className="card-body shadow rounded">
                <h1>Edit Task</h1>
                <label className="form-label">Enter Title</label>
                <input type="text" className="form-control" placeholder="Add a new title" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                <label className="form-label">Enter</label>
                <input type="text" className="form-control" placeholder="Add a new description" value={editDescription} onChange={e => setEditDescription(e.target.value)} />
                <button onClick={handleSaveEdit} className="btn btn-primary" style={{ marginTop: '16px' }}>Update</button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className='container mt-3'>
        {todos.length !== 0 ?
          <div className="card">
            <div className="card-header">
              <button onClick={() => setIsEditing(false)} className="btn btn-primary">Add New Task</button>
            </div>
            <h6 className='text-danger'>{deleteSuccess}</h6>
            {todos.map((todo, index) => (
              <>
                <div className="card-body shadow rounded items" key={index}>
                  <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                  </div>
                  <div>
                    <button onClick={() => handleEditTodo(index)} className="btn btn-primary" style={{ marginRight: '1rem' }}>Edit</button>
                    <button onClick={() => handleDeleteTodo(index)} className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </>
            ))}
          </div>
          : ''}

      </div>
    </div>
  );
}

export default TodoApp;