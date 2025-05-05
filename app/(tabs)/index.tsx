import { Text, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import SearchBar from "../components/SearchBar";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <ScrollView className="flex-1 px-5">
        <View className="flex-1 mt-5">
          <SearchBar />
        </View>
      </ScrollView>
    </View>
  );
}
