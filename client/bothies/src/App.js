import React, { useState, useRef} from 'react';
import MainContainer from './containers/MainContainer'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { useOnClickOutside } from './hooks';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';


function App() {
const [open, setOpen] = useState(false);
const node = useRef();
const menuId = "main-menu";

useOnClickOutside(node, () => setOpen(false));

return (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <div ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
      <div>
        <MainContainer />
      </div>

    </>
  </ThemeProvider>
);
}

export default App;
