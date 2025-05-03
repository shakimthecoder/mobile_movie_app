import {Image, StyleSheet, Text, View} from 'react-native';
import { Tabs } from 'expo-router';
import { ImageBackground } from 'react-native';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

const TabIcon = ({ icon, title, focused } : any) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full
                      flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center
                      round-full overflow-hidden">
                <Image
                    source={icon}
                    tintColor="#151312"
                    className="size-5"
                />
                <Text className="text-secondary text-base ml-2 font-semibold">{title}</Text>
            </ImageBackground>
        );
    }
    return (
        <View className="size-full justify-center items-center">
            <Image source={icon} tintColor="#A8B5DB" className="size-5"></Image>
        </View>
    )
}
const _Layout = () => {
    return (
        <Tabs
         screenOptions={{ tabBarShowLabel: false }}
        >
            <Tabs.Screen
             name="index"
             options={{
                 title: 'Home',
                 headerShown: false,
                 tabBarIcon: ({ focused }) => (
                     <TabIcon
                      focused={focused}
                      icon={icons.home}
                      title="Home"
                     />
                 )
            }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.profile}
                            title="Profile"
                        />
                    )
            }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.save}
                            title="Saved"
                        />
                    )
            }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                            title="Search"
                        />
                    )}}
            />
        </Tabs>
    )
}

export default _Layout;
const styles = StyleSheet.create({});


