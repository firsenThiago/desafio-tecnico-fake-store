import { SafeAreaProvider } from "react-native-safe-area-context";

import RootNavigation from "@/router/RootNavigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
}
