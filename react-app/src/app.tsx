import 'typeface-roboto';

import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import router from './router';
import { darkTheme, lightTheme } from './theme-provider';
import { IRootState } from './state';
import { CssBaseline } from '@mui/material';

function App() {
    const themeType = useSelector((state: IRootState) => state.ui.theme);

    return (
        <ThemeProvider theme={themeType == 'light' ? lightTheme : darkTheme}>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
}

export default App