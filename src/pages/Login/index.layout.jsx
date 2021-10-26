import React from 'react';
export default function LoginLayout({handleLogin,handleChange}) {
  return (
    <div>
      <title>Sign In</title>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">email</label>
        <input  onChange={handleChange} type="text" id="email" placeholder="user@email.com" />
        <label htmlFor="password">password</label>
        <input onChange={handleChange} type="password" id="password" placeholder="1Ge23Garik" />
        <button>Login</button>
      </form>
    </div>
  );
}
