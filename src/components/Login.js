import React, { useState } from 'react';

const MAX_ATTEMPTS = 5;

function Login() {
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would check the credentials
    const credentialsAreValid = false; // Replace with actual validation

    if (!credentialsAreValid) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= MAX_ATTEMPTS) {
        setIsLocked(true);
      }
    } else {
      // Handle successful login
    }
  };

  if (isLocked) {
    return <div>Account locked. Too many failed attempts.</div>;
  }

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
      {attempts > 0 && <p>Attempt {attempts} of {MAX_ATTEMPTS}</p>}
    </form>
  );
}

export default Login;
