import { IconSymbol } from "../components/ui/IconSymbol.ios";

const Icon = {
  index: (props: any) => <IconSymbol name="house.fill" size={24} {...props} />,
  transfer: (props: any) => (
    <IconSymbol name="banknote.fill" size={24} {...props} />
  ),
  plan: (props: any) => <IconSymbol name="note.text" size={24} {...props} />,
  profile: (props: any) => (
    <IconSymbol name="person.fill" size={24} {...props} />
  ),
};

export default Icon;
