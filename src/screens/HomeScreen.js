import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Location from "expo-location";
import EarthquakeCard from "../components/EarthquakeCard";
import { COLORS } from "../theme";

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState(null);

  // Khối 1: Xin quyền GPS khi vừa mở app
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Cảnh báo",
          "Bạn cần cấp quyền vị trí để ứng dụng tính khoảng cách!",
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
    })();
  }, []);

  // Khối 2: Gọi API
  useEffect(() => {
    const fetchEarthquakes = () => {
      fetch(
        "https://www.seismicportal.eu/fdsnws/event/1/query?format=json&limit=10",
      )
        .then((response) => response.json())
        .then((json) => {
          setData(json.features);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setData([]);
          setLoading(false);
        });
    };

    fetchEarthquakes();
    const intervalId = setInterval(fetchEarthquakes, 60000);
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Đang tải dữ liệu động đất...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Cảnh báo động đất</Text>
        <Text style={styles.bannerSubtitle}>
          Nguồn EMSC • Cập nhật mỗi phút
        </Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary, { marginRight: 6 }]}
          onPress={() =>
            navigation.navigate("Map", {
              earthquakeList: data,
              userLocation: userLocation,
            })
          }
        >
          <Text style={styles.buttonText}>🗺️ Bản đồ tâm chấn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary, { marginLeft: 6 }]}
          onPress={() =>
            navigation.navigate("Search", { userLocation: userLocation })
          }
        >
          <Text style={styles.buttonTextSecondary}>🔍 Tra cứu lịch sử</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <EarthquakeCard
            item={item}
            userLocation={userLocation}
            onPress={() =>
              navigation.navigate("Map", {
                earthquakeList: data,
                userLocation: userLocation,
                selectedEvent: {
                  latitude: item.geometry.coordinates[1],
                  longitude: item.geometry.coordinates[0],
                },
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, padding: 16 },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.bg,
  },
  loadingText: { marginTop: 12, color: COLORS.textSecondary },
  banner: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
  },
  bannerTitle: { color: COLORS.white, fontSize: 20, fontWeight: "700" },
  bannerSubtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 13,
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 14,
  },
  button: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonPrimary: { backgroundColor: COLORS.primary },
  buttonSecondary: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  buttonText: { color: COLORS.white, fontWeight: "700", fontSize: 15 },
  buttonTextSecondary: { color: COLORS.primary, fontWeight: "700", fontSize: 15 },
});
