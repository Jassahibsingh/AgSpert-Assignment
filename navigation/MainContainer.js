import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import GuidesScreen from "./Screens/GuidesScreen";
import MyAccountScreen from "./Screens/MyAccountScreen";
import AlertScreen from "./Screens/AlertScreen";
import WeatherScreen from "./Screens/WeatherScreen";

// Screen names
const homeName = "Home";
const guidesName = "Guides";
const myAccountName = "My Account";
const weatherName = "Weather";
const alertName = "Alert";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "apps" : "apps-outline";
            } else if (rn === guidesName) {
              iconName = focused ? "bookmark" : "bookmark-outline";
            } else if (rn === alertName) {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (rn === weatherName) {
              iconName = focused ? "cloudy" : "cloudy-outline";
            } else if (rn === myAccountName) {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "purple",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: {
            padding: 5,
            height: 30,
            backgroundColor: "#e0e6ed",
          },
        }}
      >
        <Tab.Screen name={myAccountName} component={MyAccountScreen} />
        <Tab.Screen name={guidesName} component={GuidesScreen} />
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={weatherName} component={WeatherScreen} />
        <Tab.Screen name={alertName} component={AlertScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
