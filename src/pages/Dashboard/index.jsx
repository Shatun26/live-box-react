import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/slices/app';
import DashboardLayout from './index.layout';

export default function Dashboard() {
  // useSelector хук для того что бы взять что-то из redux
  const {theme} = useSelector((state) => state.app);
  // функция которая вызывает экшены
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(changeTheme())
  };

  return <DashboardLayout handleChangeTheme={handleChangeTheme} theme={theme} />;
}
