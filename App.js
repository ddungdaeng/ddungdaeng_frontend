import { NavigationContainer } from "@react-navigation/native";

import Root from "./src/navigation/Roots";

export default function App() {
  //todo: pretendard 적용
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
