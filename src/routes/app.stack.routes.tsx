import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import CarDetails from "../screens/CarDetails";
import Schedulling from "../screens/Schedulling";
import SchedullingDetails from "../screens/SchedullingDetails";
import MyCars from "../screens/MyCars";
import Splash from "../screens/Splash";
import Confirmation from "../screens/Confirmation";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        //desabilitating going back from IOS
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="Splash" component={Splash} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Schedulling" component={Schedulling} />
      <Screen name="SchedullingDetails" component={SchedullingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
