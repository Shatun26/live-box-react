import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  // меняется короткое название редьюсера
  name: 'app',
  initialState: {
    // меняется начальное состояние редьюсера
    theme: 'light',
  },
  reducers: {
    // меняется набор редьюсеров
    changeTheme: (state, action) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

// меняются только названия переменных
const appReducer = appSlice.reducer;
// экспорт экшенов в компоненты
export const { changeTheme } = appSlice.actions;
// из слайса мы забираем редьюсер чтобы его экспортировать в стор
export default appReducer;
