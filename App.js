import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { LanguageProvider, useLanguage } from "./src/i18n/LanguageContext";
import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";
import DetailScreen from "./src/screens/DetailScreen";
import SearchScreen from "./src/screens/SearchScreen";
import { COLORS } from "./src/theme";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { t } = useLanguage();

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.white,
          headerTitleStyle: { fontWeight: "700" },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: t("homeTitle") }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: t("mapTitle") }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: t("detailTitle") }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: t("searchTitle") }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppNavigator />
    </LanguageProvider>
  );
}
