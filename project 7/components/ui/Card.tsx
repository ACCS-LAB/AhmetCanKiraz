import { View, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';

const isWeb = Platform.OS === 'web';

interface CardProps {
  children: React.ReactNode;
  style?: any;
}

export function Card({ children, style }: CardProps) {
  return (
    <View style={[styles.card, style]}>
      {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: isWeb ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
    overflow: 'hidden',
  },
});