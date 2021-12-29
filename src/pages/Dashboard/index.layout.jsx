import React, { useEffect, useRef, useState } from 'react';
import * as H from './index.styled';

export default function DashboardLayout({ theme, handleChangeTheme }) {
  const ref = useRef();

  const [coordsX, setcoordsX] = useState();
  const [coordsY, setcoordsY] = useState();
  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const absoluteX = event.clientX - bounds.left;
    const absoluteY = event.clientY - bounds.top;
    setcoordsX(Math.round(((absoluteX * 100) / width - 50) * 0.9));
    setcoordsY(Math.round(((absoluteY * 100) / height - 50) * 0.9));
  };
  const handleLeave = () => {
    setcoordsX(0);
    setcoordsY(0);
  };
  return (
    <H.DasboardContainer theme={theme}>
      <button onClick={handleChangeTheme}>
        {theme === 'light' ? 'dark' : 'light'}
      </button>
      <H.AnimateBlock
        style={{
          transform: `rotateY(${-coordsX}deg) rotateX(${coordsY}deg) translate(${
            coordsX / 2
          }px , ${coordsY / 2}px)`,
        }}
        ref={ref}
        onMouseMove={(e) => handleMove(e)}
        onMouseLeave={handleLeave}
      >
        <p>Login</p>
        <button>Login with Facebook</button>
        <button>Login with Twitter</button>
        <p>Login with email</p>
        <input placeholder="login" type="text" />
        <input placeholder="password" type="text" />
        <button>LOGIN</button>
      </H.AnimateBlock>
    </H.DasboardContainer>
  );
}
