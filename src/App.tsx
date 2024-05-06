import React from 'react';

import './App.css';
import BaseComponent from './BaseComponent/BaseComponent';
import UserManagement from './UserManagement/UserManagement';

function App() {
  return (
<div>
{ /* <BaseComponent title = "Hyee" name="nikitaa" ></BaseComponent> */ }
<UserManagement isLogin ={true}></UserManagement>
</div>
  );
}

export default App;
