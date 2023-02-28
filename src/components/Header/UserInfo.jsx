import axios from 'axios';
import { useEffect, useState } from 'react';

function UserInfo() {
  const [user, setUser] = useState('Guest');

  useEffect(() => {
    axios('https://8nv4v2.sse.codesandbox.io/name').then(data =>
      setUser(data.data)
    );
  });

  return <span>{user}</span>;
}

export default UserInfo;
