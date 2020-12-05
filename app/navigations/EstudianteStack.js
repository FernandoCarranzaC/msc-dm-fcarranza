import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Estudiantes from "../screens/Estudiante";

const Stack = createStackNavigator();

export default function EstudianteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="estudiante"
        component={Estudiantes}
        options={{ title: "Estudiante" }}
      />
    </Stack.Navigator>
  );
}
