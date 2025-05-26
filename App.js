import "./global.css";

import { NavigationContainer } from "@react-navigation/native";

import Root from "./navigation/Roots";

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
