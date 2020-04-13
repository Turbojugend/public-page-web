import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import {
    createMuiTheme,
    ThemeProvider as MuiThemeProvider,
    darken,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from "@emotion/styled";
import {ThemeProvider} from "emotion-theming";

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#6772e5',
        },
    },
});

const StyledButton = styled(Button)`
  ${({ theme }) => `
  background-color: ${theme.palette.primary.main};
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 10px;
  font-size: 13px;
  &:hover {
    background-color: ${darken(theme.palette.primary.main, 0.2)};
  }
  ${theme.breakpoints.up('sm')} {
    font-size: 14px;
    padding: 7px 14px;
  }
  `}
`;

export default function Home() {
    return (
        <NoSsr>
            <MuiThemeProvider theme={customTheme}>
                <ThemeProvider theme={customTheme}>
                    <Button>Default</Button>
                    <StyledButton>Customized</StyledButton>
                </ThemeProvider>
            </MuiThemeProvider>
        </NoSsr>
    );
}
