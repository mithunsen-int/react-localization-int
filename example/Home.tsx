import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "./LocalizationProvider";

export const Home: React.FC = () => {
  const { t, changeLocale, locale } = useTranslation();
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <TouchableOpacity
        style={{
          marginBottom: 50,
          padding: 5,
          backgroundColor: "#30a3dc",
          borderWidth: 1,
          borderColor: "#0b7970",
          borderRadius: 5,
        }}
        onPress={() => changeLocale(locale == "en" ? "fr" : "en")}
      >
        <Text style={{ color: "#fff" }}>Change Language</Text>
      </TouchableOpacity>
      <Text>{t("greeting")}</Text>
      <Text>{t("welcome")}</Text>
      <Text>{t("home.title")}</Text>
    </View>
  );
};
