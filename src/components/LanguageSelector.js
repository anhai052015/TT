import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLanguage } from "../i18n/LanguageContext";
import { COLORS } from "../theme";

export default function LanguageSelector() {
  const { language, setLanguage, LANG_OPTIONS } = useLanguage();

  return (
    <View style={styles.container}>
      {LANG_OPTIONS.map((opt) => (
        <TouchableOpacity
          key={opt.code}
          style={[styles.btn, language === opt.code && styles.btnActive]}
          onPress={() => setLanguage(opt.code)}
        >
          <Text
            style={[
              styles.btnText,
              language === opt.code && styles.btnTextActive,
            ]}
          >
            {opt.flag} {opt.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  btn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  btnActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  btnText: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.text,
  },
  btnTextActive: {
    color: COLORS.white,
  },
});
