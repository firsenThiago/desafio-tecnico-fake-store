import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "@/screens";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
// import { ScreenContainer } from "react-native-screens";

const RootNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RootNavigation;
