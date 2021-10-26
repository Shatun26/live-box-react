import React, { useEffect, useRef, useState } from 'react';
import * as H from './index.styled';

export default function DashboardLayout({ theme, handleChangeTheme }) {
  const ref = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  console.log(coords);
  function relativeCoords(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const absoluteX = event.clientX - bounds.left;
    const absoluteY = event.clientY - bounds.top;
    const relativeX = Math.round(((absoluteX * 100) / width - 50) * 0.9);
    const relativeY = Math.round(((absoluteY * 100) / height - 50) * 0.9);
    return { x: relativeX, y: relativeY };
  }

  useEffect(() => {
    const mousemove = ref.current.addEventListener('mousemove', (e) => {
      setCoords({ x: relativeCoords(e).x, y: relativeCoords(e).y });
    });
    const mouseout = ref.current.addEventListener('mouseout', (e) => {
      setCoords({ x: null, y: null });
    });

    return () => {
      mousemove.remove();
      mouseout.remove();
    };
  }, []);

  return (
    <H.DasboardContainer theme={theme}>
      <button onClick={handleChangeTheme}>
        {theme === 'light' ? 'dark' : 'light'}
      </button>
      <H.AnimateBlock ref={ref} coords={coords}>
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
