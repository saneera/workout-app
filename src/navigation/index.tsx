import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage';
import PlannerPage from '../pages/PlannerPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';





const Navigation = () => {
    return(
        <NavigationContainer >
           <RootNavigator/>
        </NavigationContainer>
    )
}

export default Navigation


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Root' 
                component={BottomTabsNavigator}
                options={{headerShown: false}}
                
            />
            
        </Stack.Navigator>
    )
}


const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName="Home" >
            <BottomTabs.Screen 
                name='Home' 
                component={HomePage}
                options={{
                    tabBarIcon: ({color, size}) => 
                      <FontAwesome 
                         name="home" 
                         size={size} 
                         color={color}
                      />
                    
                }}
            />
            <BottomTabs.Screen 
                name='Planner' 
                component={PlannerPage}
                options={{
                    tabBarIcon: ({color, size}) => 
                    <Entypo 
                        name="add-to-list" 
                        size={size} 
                        color={color}
                    />                    
                }}
            />
        </BottomTabs.Navigator>
    )
}