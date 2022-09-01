import React, {
  createContext,
  useState,
  useMemo,
} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    blank: true;
  }
}

declare module '@mui/material/styles' {
  interface PaletteColor {
    theme: string;
    filterWhite?: string;
    filterSilver?: string;
    filterBlack: string;
    filterBlue: string;
    filterGray: string;
    filterRed: string;
    filterBrown: string;
    filterGreen: string;
    filterYellow: string;
    carCheckButton: string;
    input: string;
    lightGray: string;
  } interface SimplePaletteColorOptions {
    theme: string;
    filterWhite?: string;
    filterSilver?: string;
    filterBlack: string;
    filterBlue: string;
    filterGray: string;
    filterRed: string;
    filterBrown: string;
    filterGreen: string;
    filterYellow: string;
    carCheckButton: string;
    input: string;
    lightGray: string;
  }
}

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const MainTheme = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () => createTheme({
      palette: {
        mode,
        ...(mode === 'light'
          ? {
            // palette values for light mode
            primary: {
              main: '#25CEDE',
              theme: '#FEFEFE',
              carCheckButton: '#F2F4F5',
              contrastText: '#ffffff',
              filterWhite: '#EBEBEB',
              filterSilver: '#C4C4C4',
              filterBlack: '#222222',
              filterBlue: '#2400FF',
              filterGray: '#7C7C7C',
              filterRed: '#FF0600',
              filterBrown: '#814E4D',
              filterGreen: '#006E0B',
              filterYellow: '#F2CB00',
              input: '#F8FAFB',
              lightGray: '#E5E5E5',
            },
            secondary: {
              main: '#1A324A',
              theme: '#FEFEFE',
              contrastText: '#ffffff',
              carCheckButton: '#F2F4F5',
              filterWhite: '#EBEBEB',
              filterSilver: '#C4C4C4',
              filterBlack: '#222222',
              filterBlue: '#2400FF',
              filterGray: '#7C7C7C',
              filterRed: '#FF0600',
              filterBrown: '#814E4D',
              filterGreen: '#006E0B',
              filterYellow: '#F2CB00',
              input: '#F8FAFB',
              lightGray: '#E5E5E5',
            },
            text: {
              primary: '#1A324A',
            },
          }
          : {
            // palette values for dark mode
            primary: {
              main: '#25CEDE',
              theme: '#15181E',
              contrastText: '#ffffff',
              carCheckButton: '#252930',
              filterWhite: '#EBEBEB',
              filterSilver: '#C4C4C4',
              filterBlack: '#222222',
              filterBlue: '#2400FF',
              filterGray: '#7C7C7C',
              filterRed: '#FF0600',
              filterBrown: '#814E4D',
              filterGreen: '#006E0B',
              filterYellow: '#F2CB00',
              input: '#252930',
              lightGray: '#252930',
            },
            secondary: {
              main: '#1A324A',
              theme: '#252930',
              contrastText: '#ffffff',
              carCheckButton: '#252930',
              filterWhite: '#EBEBEB',
              filterSilver: '#C4C4C4',
              filterBlack: '#222222',
              filterBlue: '#2400FF',
              filterGray: '#7C7C7C',
              filterRed: '#FF0600',
              filterBrown: '#814E4D',
              filterGreen: '#006E0B',
              filterYellow: '#F2CB00',
              input: '#252930',
              lightGray: '#252930',
            },
            text: {
              primary: '#fff',
            },
          }),
      },
      typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        button: {
          textTransform: 'none',
        },
      },
      components: {
        MuiButton: {
          variants: [
            {
              props: {
                variant: 'blank',
              },
              style: {
                borderRadius: '4px',
              },
            },
          ],
          styleOverrides: {
            sizeLarge: {
              height: '43px',
            },
          },
        },
      },
    }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          {children}
        </StyledThemeProvider>
      </ThemeProvider>
    </ColorModeContext.Provider >
  );
};
