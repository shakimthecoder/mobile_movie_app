import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-blue-500 font-bold">Welcome to my app</Text>
        <Text className="text-[#123123] p-5">Register</Text>
        <Text className="text-primary p-5">Login</Text>
        <Text className="text-accent">Copyright 2025</Text>
    </View>
  );
}
