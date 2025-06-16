import { PlatformPressable } from "@react-navigation/elements";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
// import Icon from "../constants/TabBarIcon";
import { IconSymbol } from "./ui/IconSymbol";

// type IconName = keyof typeof Icon;

interface TabBarButtonProps {
  name: string;
  href: string;
  accessibilityState?: any;
  accessibilityLabel?: string;
  testID: string;
  onPress?: () => void;
  onLongPress: () => void;
  label: string;
  isFocused: boolean;
}

const TabBarButton = ({
  href,
  accessibilityState,
  accessibilityLabel,
  testID,
  onPress,
  onLongPress,
  name,
  label,
  isFocused,
}: TabBarButtonProps) => {
  const { colors } = useTheme();

  const Icon = {
    index: (props: any) => (
      <IconSymbol name="house.fill" size={24} {...props} />
    ),
    transfer: (props: any) => (
      <IconSymbol name="banknote.fill" size={24} {...props} />
    ),
    plan: (props: any) => <IconSymbol name="note.text" size={24} {...props} />,
    profile: (props: any) => (
      <IconSymbol name="person.fill" size={24} {...props} />
    ),
  };
  return (
    <PlatformPressable
      href={href}
      accessibilityState={accessibilityState}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarItem}>
      {Icon[name as keyof typeof Icon]({
        color: isFocused ? colors.primary : colors.text,
      })}
      <Text style={{ color: isFocused ? colors.primary : colors.text }}>
        {label as string}
      </Text>
    </PlatformPressable>
  );
};

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingVertical: 10,
  },
});

export default TabBarButton;
