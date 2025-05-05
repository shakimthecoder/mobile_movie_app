import { Text, View, ScrollView, TextInput, Image } from "react-native";
import { icons } from "@/constants/icons";

interface Props {
    placeholder: string;
    onPress: () => void;
}

export default function SearchBar({ placeholder, onPress } : Props) {
    return (
      <View className="flex-row items-center bg-dark-200-">
          <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8ff" />
          <TextInput
              onPress={onPress}
              placeholder={placeholder}
              value=""
              onChangeText={() => {}}
              placeholderTextColor="#ab8ff"
              className="flex-1 ml-2 text-white"

          />
        </View>
    );
}