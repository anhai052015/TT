import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getFlag } from "../utils/flag";
import { translateRegion } from "../utils/regionTranslate";
import { COLORS, getMagColor } from "../theme";
import { useLanguage } from "../i18n/LanguageContext";

export default function DetailScreen({ route, navigation }) {
  const { language, t } = useLanguage();
  const { earthquakeData, distance } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: t("detailTitle") });
  }, [language]);

  const rawRegion =
    earthquakeData.properties.flynn_region ||
    earthquakeData.properties.place ||
    t("unknownRegion");
  const regionName = translateRegion(rawRegion, language);

  const mag = earthquakeData.properties.mag;
  const magColor = getMagColor(mag);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{t("detailParams")}</Text>

        <View style={styles.header}>
          <View style={[styles.badge, { backgroundColor: magColor }]}>
            <Text style={styles.badgeValue}>{mag}</Text>
            <Text style={styles.badgeLabel}>{t("richter")}</Text>
          </View>
          <Text style={styles.region} numberOfLines={3}>
            <Text style={styles.flag}>{getFlag(rawRegion)}</Text> {regionName}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>{t("depthLabel")}</Text>
          <Text style={styles.value}>
            {earthquakeData.geometry.coordinates[2]} km
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>{t("distanceLabel")}</Text>
          <Text style={[styles.value, styles.highlight]}>{distance}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>{t("timeLabel")}</Text>
          <Text style={styles.value}>
            {new Date(earthquakeData.properties.time).toLocaleString()}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>{t("eventIdLabel")}</Text>
          <Text style={styles.value} numberOfLines={1}>
            {earthquakeData.id}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, padding: 20 },
  card: {
    backgroundColor: COLORS.card,
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
    color: COLORS.text,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    width: 68,
    height: 68,
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  badgeValue: { fontSize: 24, fontWeight: "700", color: "#fff" },
  badgeLabel: { fontSize: 10, color: "rgba(255,255,255,0.85)" },
  region: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
    lineHeight: 22,
  },
  flag: { fontSize: 16 },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  label: { fontSize: 14, color: COLORS.textSecondary },
  value: { fontSize: 14, color: COLORS.text, fontWeight: "600", flex: 1, textAlign: "right", marginLeft: 12 },
  highlight: { color: COLORS.accent },
});
