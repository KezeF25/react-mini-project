import React, { useEffect, useState } from 'react';
import { Success } from './components/Success';
import Users from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  
  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then((res) => res.json())
    .then((json) => setUsers(json.data))
    .catch((err) => {
      console.warn(err);
      alert('Ошибка при получении пользователя');
    })
    .finally(() => setLoading(false)); 
  }, []);

  function findValue(event){
    setSearchValue(event.target.value);
  }

  function onClickInvites(id){
    if (invites.includes(id)){
      setInvites((obj) => obj.filter((obj) => obj !== id));
    } else {
      setInvites((obj) => [...obj, id]);
    }
  }

  function onClickSendInvites(){
    if (invites.length === 0){
      alert('Добавьте хотя бы одного пользователя');
    } else {
      setSuccess(true);
    }
  }

  return (
    <div className="App">
      { success ? (<Success count={invites.length} onClickSendInvites={onClickSendInvites} />
        ) : (
        <Users 
          searchValue={searchValue} 
          findValue={findValue} 
          items={users} 
          isLoading={isLoading}
          invites={invites}
          onClickInvites={onClickInvites}
          onClickSendInvites={onClickSendInvites}
        />)
      }
    </div>
  );
}

export default App;
