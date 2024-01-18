import React from 'react';
import { FormState } from '../../types';

interface UserFormProps {
  formState: FormState;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onAddUser: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ formState, onFormChange, onAddUser }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onAddUser(); }}>
      <h4>Create User</h4>
      <div className="mb-2">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" value={formState.name} onChange={onFormChange} />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={formState.email} onChange={onFormChange} />
      </div>
      <div className="mb-2 form-check">
        <input type="checkbox" className="form-check-input" id="active" name="active" checked={formState.active} onChange={onFormChange} />
        <label className="form-check-label" htmlFor="active">Active</label>
      </div>
      <div className="mb-2">
        <label htmlFor="role" className="form-label">Role</label>
        <select className="form-select" id="role" name="role" value={formState.role} onChange={onFormChange}>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="administrator">Administrator</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add User</button>
    </form>
  );
};

export default UserForm;