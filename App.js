import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./navigation/Tabs";
import Root from "./navigation/Roots";

import { ThemeProvider } from "styled-components";
import { theme } from "./Styled";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
