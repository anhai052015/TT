import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { calculateDistance } from "../utils/distance";

export default function MapScreen({ route, navigation }) {
  // Bổ sung thêm biến selectedEvent để nhận tọa độ vừa gửi sang
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
        // Thay initialRegion bằng region để bản đồ tự động di chuyển khi dữ liệu thay đổi
        region={{
          // Nếu có selectedEvent thì lấy tọa độ đó, không thì để 20.0 (bao quát)
          latitude: selectedEvent ? selectedEvent.latitude : 20.0,
          longitude: selectedEvent ? selectedEvent.longitude : 0.0,
          // Nếu có selectedEvent thì Zoom gần lại (5.0), không thì Zoom xa (100.0)
          latitudeDelta: selectedEvent ? 5.0 : 100.0,
          longitudeDelta: selectedEvent ? 5.0 : 100.0,
        }}
      >
        {earthquakeList.map((eq) => {
          const eqLon = eq.geometry.coordinates[0];
          const eqLat = eq.geometry.coordinates[1];

          let distanceText = "Đang tính khoảng cách...";
          if (userLocation) {
            const distance = calculateDistance(
              userLocation.latitude,
              userLocation.longitude,
              eqLat,
              eqLon,
            );
            distanceText = `Cách bạn: ${distance} km`;
          }

          return (
            <Marker
              key={eq.id}
              coordinate={{ latitude: eqLat, longitude: eqLon }}
              pinColor="red"
              title={`Độ lớn: ${eq.properties.mag} Richter`}
              description={`${distanceText} - Bấm xem chi tiết >`}
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
