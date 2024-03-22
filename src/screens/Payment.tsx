import { Text } from "@/components";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/router";
import { Button } from "@/components/Button";

export const Payment = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>Tela de pagamento...</Text>
      <Button
        title="Voltar a tela principal"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default Payment;
