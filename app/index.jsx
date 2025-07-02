import { Text, View } from "react-native";

export default function Index() {
  return (
    <View 
      className="bg-slate-900"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-600">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
