import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TestScreen1 from '../screens/textScreen1';
import TestScreen2 from '../screens/textScreen2';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TestScreen1" component={TestScreen1} />
            <Tab.Screen name="TestScreen2" component={TestScreen2} />
        </Tab.Navigator>
    );
}

export default TopTabNavigation;