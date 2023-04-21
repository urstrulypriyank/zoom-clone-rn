// import Navigation from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home";
import MeetingRoom from "./screen/MeetingRoom";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Room"
          component={MeetingRoom}
          options={{
            title: "Start a Meeting",
            headerStyle: {
              backgroundColor: "#1c1c1c",
              shadowOpacity: 0,
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
