import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { calculateDistance } from "../utils/distance";
import { useLanguage } from "../i18n/LanguageContext";
import { translateRegion } from "../utils/regionTranslate";
import { getFlag } from "../utils/flag";

export default function MapScreen({ route, navigation }) {
  const { language, t } = useLanguage();

  useEffect(() => {
    navigation.setOptions({ title: t("mapTitle") });
  }, [language]);

  const { earthquakeList, userLocation, selectedEvent } = route.params || {
    earthquakeList: [],
    userLocation: null,
    selectedEvent: null,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        toolbarEnabled={false}
        region={{
          latitude: selectedEvent ? selectedEvent.latitude : 20.0,
          longitude: selectedEvent ? selectedEvent.longitude : 0.0,
          latitudeDelta: selectedEvent ? 5.0 : 100.0,
          longitudeDelta: selectedEvent ? 5.0 : 100.0,
        }}
      >
        {earthquakeList.map((eq) => {
          const eqLon = eq.geometry.coordinates[0];
          const eqLat = eq.geometry.coordinates[1];

          let distanceText = t("calculatingDistance");
          if (userLocation) {
            const distance = calculateDistance(
              userLocation.latitude,
              userLocation.longitude,
              eqLat,
              eqLon,
            );
            distanceText = t("distanceFromYou", { distance });
          }

          const rawRegion = eq.properties.flynn_region || eq.properties.place || "";
          const regionName = translateRegion(rawRegion, language);
          const flag = getFlag(rawRegion);

          return (
            <Marker
              key={`${eq.id}-${language}`}
              coordinate={{ latitude: eqLat, longitude: eqLon }}
              pinColor="red"
              title={`${flag} ${regionName}`}
              description={`${t("magnitudeLabel", { mag: eq.properties.mag })} - ${distanceText} - ${t("tapForDetail")}`}
              onCalloutPress={() =>
                navigation.navigate("Detail", {
                  earthquakeData: eq,
                  distance: distanceText,
                })
              }
            />
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },
});
