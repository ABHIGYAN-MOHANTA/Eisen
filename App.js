import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoList from "./src/components/TodoList";
import ImportantUrgent from "./src/components/ImportantUrgent";
import ImportantNotUrgent from "./src/components/ImportantNotUrgent";
import NotImportantUrgent from "./src/components/NotImportantUrgent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#6AC06B",
          tabBarInactiveTintColor: "#CED4DA",
          tabBarActiveBackgroundColor: "#212529",
          tabBarInactiveBackgroundColor: "#333333",
          headerStyle: {
            backgroundColor: "#212529",
          },
          headerTitleStyle: {
            color: "#6AC06B",
            fontSize: 18,
          },
        }}
      >
        <Tab.Screen
          name="Important Urgent"
          component={ImportantUrgent}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="clockcircle"
                size={24}
                color={focused ? "#008080" : "#FFFFFF"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Important Not-Urgent"
          component={ImportantNotUrgent}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-calendar"
                size={24}
                color={focused ? "#6AC06B" : "#FFFFFF"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Not-Important Urgent"
          component={NotImportantUrgent}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="share-all-outline"
                size={24}
                color={focused ? "#FFC107" : "#FFFFFF"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Not-Important Not-Urgent"
          component={TodoList}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-trash"
                size={24}
                color={focused ? "#CED4DA" : "#FFFFFF"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
