import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Cart, Home, Product } from "@/screens";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "@/contexts/cart";

export type RootStackParamList = {
  Home: undefined;
  Product: { id: number } | undefined;
  Cart: undefined;
};

const RootNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <CartProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Product"
              component={Product}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </CartProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default RootNavigation;
