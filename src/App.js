import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>This is my app!</p>
    </div>
  );
};

export default App;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from './themeslice';

// const App = () => {
//   const theme = useSelector((state) => state.theme.theme);
//   const dispatch = useDispatch();

//   const handleToggle = () => {
//     dispatch(toggleTheme());
//   };

//   return (
//     <div className={theme}>
//       <h1>My App</h1>
//       <button onClick={handleToggle}>Toggle Theme</button>
//     </div>
//   );
// };

// export default App;
