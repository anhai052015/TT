import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import EarthquakeCard from "../components/EarthquakeCard";
import { useLanguage } from "../i18n/LanguageContext";
import { COLORS } from "../theme";

export default function SearchScreen({ route, navigation }) {
  const { language, t } = useLanguage();
  const { userLocation } = route.params || {};

  useEffect(() => {
    navigation.setOptions({ title: t("searchTitle") });
  }, [language]);

  const [startDate, setStartDate] = useState(new Date("1970-01-01"));
  const [endDate, setEndDate] = useState(new Date("1970-12-31"));
  const [minMag, setMinMag] = useState("5.0");

  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setHasSearched(true);
    setData([]);

    const startStr = startDate.toISOString().split("T")[0];
    const endStr = endDate.toISOString().split("T")[0];

    const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startStr}&endtime=${endStr}&minmagnitude=${minMag}&limit=50`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("USGS server error");
        }
        return response.json();
      })
      .then((json) => {
        setData(json.features || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setData([]);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterCard}>
        <Text style={styles.filterTitle}>{t("filterTitle")}</Text>

        <Text style={styles.label}>{t("fromDate")}</Text>
        <TouchableOpacity
          style={styles.inputBox}
          onPress={() => setShowStart(true)}
        >
          <Text style={styles.inputText}>📅 {startDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showStart && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowStart(Platform.OS === "ios");
              if (date) setStartDate(date);
            }}
          />
        )}

        <Text style={styles.label}>{t("toDate")}</Text>
        <TouchableOpacity
          style={styles.inputBox}
          onPress={() => setShowEnd(true)}
        >
          <Text style={styles.inputText}>📅 {endDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showEnd && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={(event, date) => {
              setShowEnd(Platform.OS === "ios");
              if (date) setEndDate(date);
            }}
          />
        )}

        <Text style={styles.label}>{t("minMagnitude")}</Text>
        <View style={styles.inputBox}>
          <Text style={styles.inputText}>📊 </Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={minMag}
            onChangeText={setMinMag}
            placeholder={t("placeholderMag")}
            placeholderTextColor={COLORS.textMuted}
          />
        </View>

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>{t("searchBtn")}</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
          style={{ marginTop: 24 }}
        />
      ) : hasSearched && data.length === 0 ? (
        <Text style={styles.noData}>{t("noData")}</Text>
      ) : (
        <FlatList
          data={data}
          key={`${language}-${data.length}`}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingTop: 12, paddingBottom: 20 }}
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, padding: 16 },
  filterCard: {
    backgroundColor: COLORS.card,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 6,
  },
  label: {
    fontWeight: "600",
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 10,
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 10,
  },
  inputText: { fontSize: 15, color: COLORS.text },
  input: {
    flex: 1,
    fontSize: 15,
    color: COLORS.text,
    paddingVertical: 0,
  },
  searchButton: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
  },
  searchButtonText: { color: COLORS.white, fontWeight: "700", fontSize: 16 },
  noData: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 15,
    color: COLORS.textSecondary,
  },
});
