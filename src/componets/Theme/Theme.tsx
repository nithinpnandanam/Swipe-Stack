import { createTheme, ThemeProvider } from "@mui/material";
import { FC, ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemesProvider: FC<ThemeProviderProps> = ({ children }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#e9ecd6"
    },
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </>
  );
};
