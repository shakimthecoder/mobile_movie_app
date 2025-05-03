import { StyleSheet, Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import { ImageBackground } from 'react-native';
import { images } from '@/assets/images';

const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
             name="index"
             options={{
                 title: 'Home',
                 headerShown: false,
                 tabBarIcon: ({ focused }) => {
                     <>
                     <ImageBackground
                      source={images.highlight}
                      className="flex flex-row w-full flex-1 min-w-[112px]"
                      />
                     </>
                 }
            }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    headerShown: false }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false }}
            />
        </Tabs>
    )
}

export default _Layout;
const styles = StyleSheet.create({});


