import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './screens/UserList';
import UserDetails from './screens/UserDetails';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Users" component={UserList} />
                <Stack.Screen name="UserDetails" component={UserDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default gestureHandlerRootHOC(App);
