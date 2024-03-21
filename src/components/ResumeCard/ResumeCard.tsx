import { StyleSheet, View, Image } from "react-native";
import { Text } from "../Text";

interface ResumeCardProps {
  image: string;
  title: string;
}

const ResumeCard = ({ image, title }: ResumeCardProps) => {
  return (
    <View style={styles.container}>
      <Text size={20}>{title.charAt(0).toUpperCase() + title.slice(1)}</Text>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default ResumeCard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    gap: 16,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
});
