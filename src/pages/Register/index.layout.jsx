import React from 'react';

export default function RegisterLayout({ handleChange, handleRegister}) {
  return (
    <div>
      <title>Sign Up</title>
      <form onSubmit={handleRegister}>
        <label htmlFor="email">email</label>
        <input
          onChange={handleChange}
          type="text"
          id="email"
          placeholder="user@email.com"
        />
        <label htmlFor="password">password</label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          placeholder="1Ge23Garik"
        />
        <button>Register</button>
      </form>
    </div>
  );
}
