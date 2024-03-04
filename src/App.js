import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === 'user' && password === 'password'){
      setError('');  
      setIsSubmitted(true);
    }else{
      setError('Invalid username or password');
      setIsSubmitted(false);
    }
  }


  return (
    <div className="App">
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p>Welcome, {username}</p>
        </div>
      ):
      <form onSubmit={handleSubmit} className='form'>
        {error && <p className={`form-popup ${isVisible ? 'visible' : ''}`}>{error}</p>}
        <label htmlFor='username'>Username:</label>
        <input id='username' type='text' value={username} placeholder='Username' onChange={e => setUsername(e.target.value)}/>
        <label htmlFor='password'>Password:</label>
        <input id='password' type='password' value={password} placeholder='Password' onChange={e => setPassword(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
      }   
    </div>
  );
}

export default App;
