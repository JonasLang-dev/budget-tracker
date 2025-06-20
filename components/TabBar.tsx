import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useLinkBuilder } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet } from "react-native";
import TabBarButton from "./TabBarButton";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();

  return (
    <BlurView tint="default" intensity={100} style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.key}
            name={route.name}
            href={buildHref(route.name, route.params) ?? ""}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID ?? ""}
            onPress={onPress}
            onLongPress={onLongPress}
            label={String(label)}
            isFocused={isFocused}
          />
        );
      })}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 80,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    alignSelf: "center",
    width: "80%",
    overflow: "hidden",
  },
});
