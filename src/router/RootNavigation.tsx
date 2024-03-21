import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Cart, Home, Product } from "@/screens";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

const RootNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Product"
            component={Cart}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={Product}
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
