import { View, Text, StyleSheet } from 'react-native';
import { Video as LucideIcon } from 'lucide-react-native';

interface BadgeProps {
  icon?: LucideIcon;
  text: string;
  color?: string;
  backgroundColor?: string;
}

export function Badge({ icon: Icon, text, color = '#FFF', backgroundColor = 'rgba(255, 75, 75, 0.2)' }: BadgeProps) {
  return (
    <View style={[styles.badge, { backgroundColor }]}>
      {Icon && <Icon size={14} color={color} />}
      <Text style={[styles.badgeText, { color }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
    gap: 6,
  },
  badgeText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 14,
  },
});