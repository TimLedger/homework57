import React, { useState } from 'react';
import UserForm from '../UserForm/UserForm';
import Users from '../Users/Users';
import { User, FormState } from '../../types';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    active: false,
    role: 'user',
  });

  const addUser = () => {
    const newUser: User = {
      id: users.length + 1,
      ...formState,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setFormState({
      name: '',
      email: '',
      active: false,
      role: 'user',
    });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
  
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked as boolean) : value,
    }));
  };

 
  
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-md-6">
          <UserForm formState={formState} onFormChange={handleFormChange} onAddUser={addUser} />
        </div>
        <div className="col-md-6">
          <Users users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
