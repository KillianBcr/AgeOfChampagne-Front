import React, { useContext,useState } from 'react';
import { BASE_URL } from '../services/api/users';
import { UserContext } from '../services/api/users';

const LoginForm = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { setUser } = useContext(UserContext);

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
setPassword(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
fetch(`${BASE_URL}login`, {
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: email,
    password: password,
  }),
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Login failed.');
    }
  })
  .then((data) => {
    setUser(data);
  })
  .catch((error) => {
    console.error(error);
  });
};

return (
<form onSubmit={handleSubmit}>
<label>
Email:
<input type="email" value={email} onChange={handleEmailChange} />
</label>
<label>
Password:
<input type="password" value={password} onChange={handlePasswordChange} />
</label>
<button type="submit">Submit</button>
</form>
);
};

export default LoginForm;