import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer,} from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/src/HomeScreen';
import CoursesScreen from './src/src/CoursesScreen';

const stack = createNativeStackNavigator();
export default function App() {

    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName='Home'>
                <stack.Screen name="Home" component={HomeScreen}></stack.Screen>
                <stack.Screen name="CoursesScreen" component={CoursesScreen}></stack.Screen>
            </stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});