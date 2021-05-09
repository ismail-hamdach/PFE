import React from 'react';

import Home from "../screens/Home"
import Profile from "../screens/Profile"
import ClassesChat from "../screens/ClassesChat"
import ChatOptions from "../screens/ChatOptions"
import RoomScreen from "../screens/RoomScreen"
import ChatList from "../screens/ChatList"
import Messages from "../screens/Messages"
import Classes from "../screens/Classes"
import Cours from "../screens/Cours"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const tab = createBottomTabNavigator();

const homeStack = createStackNavigator();
const messageStack = createStackNavigator();
const profileStack = createStackNavigator();
const coursStack = createStackNavigator();


const AppStack = () => {
    return(
        <tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#2e64e5'}}  >
            <tab.Screen 
                name= "Home" 
                component={homeStackScreen}
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name='home-outline'
                            color={color}
                            size={size}
                        />
                    ),    
                }}
            />
            <tab.Screen 
                name= "Messages" 
                component={messageStackScreen}
                options={{
                    tabBarLabel: 'Message',
                    tabBarIcon: ({color, size}) => (
                        <AntDesign
                            name='message1'
                            color={color}
                            size={size}
                        />
                    ),    
                }}
            />
            <tab.Screen 
                name= "Cours" 
                component={coursStackScreen}
                options={{
                    tabBarLabel: 'Cours',
                    tabBarIcon: ({color, size}) => (
                        <Feather
                            name='book-open'
                            color={color}
                            size={size}
                        />
                    ),    
                }}
            />
            <tab.Screen 
                name= "Profile" 
                component={profileStackScreen}
                options={{
                    tabBarColor: '#3d3d3d',
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color, size}) => (
                        <AntDesign
                            name='profile'
                            color={color}
                            size={size}
                        />
                    ),    
                }}
            />
            
        </tab.Navigator>
    );
}

export default AppStack;

const homeStackScreen = () => {
    return(
        <homeStack.Navigator tabBarOptions={{activeTintColor: '#2e64e5'}}  >
            <homeStack.Screen 
                name= "Home" 
                component={Home}
                options={{
                    headerTitle: 'Accueil',
                    headerIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name='home-outline'
                            color={color}
                            size={size}
                        />
                    ),    
                }}
            />
        </homeStack.Navigator>
    );
}


const messageStackScreen = () => {
    return(
        <messageStack.Navigator tabBarOptions={{activeTintColor: '#2e64e5'}}  >
            <messageStack.Screen 
                name= "ChatOptions" 
                component={ChatOptions}
                options={{
                    headerTitle: "Messages"
                }}
            />
            <messageStack.Screen 
                name= "ChatList" 
                component={ChatList}
                options={{
                    headerTitle: "Messages"
                }}
            />
            <messageStack.Screen 
                name= "Classes" 
                component={ClassesChat}
                options={{
                    headerTitle: "Classes"
                }}
            />
            <messageStack.Screen 
                name= "Messages" 
                component={Messages}
                options={{
                    headerTitle: "Messages"
                }}
            />
            <messageStack.Screen 
                name= "Room" 
                component={RoomScreen}
                options={{
                    headerTitle: "Administration",
                    
                }}
            />
        </messageStack.Navigator>
    );
}

const profileStackScreen = () => {
    return(
        <profileStack.Navigator tabBarOptions={{activeTintColor: '#2e64e5'}}  >
            <profileStack.Screen 
                name= "Profile" 
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name='home-outline'
                            color={color}
                            sizee={size}
                        />
                    ),    
                }}
            />
        </profileStack.Navigator> 
    );
}

const coursStackScreen = () => {
    return(
        <coursStack.Navigator >
            <coursStack.Screen 
                name= "Classes"
                component= {Classes}
            />
            <coursStack.Screen 
                name= "listCours"
                component= {Cours}
            />
        </coursStack.Navigator>
    )
}