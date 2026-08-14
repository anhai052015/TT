import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { calculateDistance } from "../utils/distance";
import { getFlag } from "../utils/flag";
import { COLORS, getMagColor } from "../theme";

export default function EarthquakeCard({ item, userLocation, onPress }) {
  const eqLat = item.geometry.coordinates[1];
  const eqLon = item.geometry.coordinates[0];
  const mag = item.properties.mag;

  let hasLocation = false;
  let distanceText = "Vị trí của bạn chưa xác định";
  if (userLocation) {
    hasLocation = true;
    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      eqLat,
      eqLon,
    );
    distanceText = `Cách bạn ${distance} km`;
  }

  const regionName =
    item.properties.flynn_region ||
    item.properties.place ||
    "Không rõ khu vực";

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.badge, { backgroundColor: getMagColor(mag) }]}>
        <Text style={styles.badgeValue}>{mag}</Text>
        <Text style={styles.badgeLabel}>Richter</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.region} numberOfLines={2}>
          <Text style={styles.flag}>{getFlag(regionName)}</Text> {regionName}
        </Text>
        <Text
          style={[styles.distance, !hasLocation && styles.distanceMuted]}
        >
          {distanceText}
        </Text>
        <Text style={styles.time}>
          {new Date(item.properties.time).toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    padding: 14,
    marginBottom: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
  },
  badge: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  badgeValue: { fontSize: 20, fontWeight: "700", color: "#fff" },
  badgeLabel: { fontSize: 9, color: "rgba(255,255,255,0.85)" },
  info: { flex: 1 },
  region: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.text,
    lineHeight: 20,
  },
  flag: { fontSize: 15 },
  distance: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.accent,
    marginTop: 6,
  },
  distanceMuted: { color: COLORS.textMuted, fontWeight: "500" },
  time: { fontSize: 12, color: COLORS.textMuted, marginTop: 2 },
});
