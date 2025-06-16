import { Tabs } from "expo-router";
import React from "react";

import { TabBar } from "@/components/TabBar";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: "Transfer",
          tabBarIcon: (isFocused) => (
            <MaterialIcons
              name={isFocused ? "attach-money" : "attach-money"}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="plan"
        options={{
          title: "Plan",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}
