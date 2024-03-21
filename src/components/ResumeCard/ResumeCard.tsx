import { StyleSheet, View, Image, Pressable } from "react-native";
import { Text } from "../Text";

interface ResumeCardProps {
  image: string;
  title: string;
  onPress: (id?: number) => void;
}

const ResumeCard = ({ image, title, onPress }: ResumeCardProps) => {
  return (
    <Pressable style={styles.container} onPress={() => onPress()}>
      <Text size={14} weight="700">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </Text>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
    </Pressable>
  );
};

export default ResumeCard;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 16,
    borderRadius: 16,
    gap: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
});
