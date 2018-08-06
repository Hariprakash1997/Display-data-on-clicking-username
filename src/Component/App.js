import React from 'react';
import UserDetail from '../Container/User-detail';
import UserList from '../Container/User-list';

const App = () => (
    <div>
        <h2>User List : </h2>
        <UserList />
        <hr />
        <h2>User Details : </h2>
        <UserDetail />
    </div>
);

export default App;