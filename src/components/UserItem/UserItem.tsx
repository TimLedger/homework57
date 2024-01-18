import React from 'react';
import { User } from '../../types';

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Active: {user.active ? 'Yes' : 'No'}</p>
        <p className="card-text">Role: {user.role}</p>
      </div>
    </div>
  );
};

export default UserItem;
