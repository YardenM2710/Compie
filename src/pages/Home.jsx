import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userService } from '../services/UserService';

export function Home() {
  const [user, setUser] = useState(null);
  const history = useHistory();
  useEffect(() => {
    const loggedUser = userService.getLoggedinUser();
    setUser(loggedUser);
    console.log(loggedUser);
    if (!loggedUser) history.push('/login');
  }, []);

  if (!user) return <div>Loading..</div>;
  return (
    <div>
      <h1>Welcome {user.username}</h1>
    </div>
  );
}
