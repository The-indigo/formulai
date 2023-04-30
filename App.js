import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FormularsScreen from "./screens/FormularsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CalculatorScreen from "./screens/CalculatorScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormularDetailScreen from "./screens/FormularDetailScreen";
import PeriodicTableScreen from "./screens/PeriodicTableScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
            <Drawer.Screen name="Periodic" component={PeriodicTableScreen} />

      <Drawer.Screen name="Formulars" component={FormularsScreen} />
      <Drawer.Screen name="Calculator" component={CalculatorScreen} 
      options={{
        
        headerShown:true,
        sceneContainerStyle:{
          backgroundColor:'#070A52'
        },
        
        // headerTransparent:true,
        headerStyle:{
          backgroundColor:'#070A52',
          elevation:0,
          shadowOpacity:0,
          borderBottomWidth:0
        }
        // header
      }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{headerShown:false}}
          />
          <Stack.Screen name="formulardetail" component={FormularDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
