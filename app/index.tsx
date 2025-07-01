import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-green-600 font-bold text-3xl text-center">
        Edit app/index.tsx to edit this screen.{" "}
      </Text>
    </View>
  );
}
