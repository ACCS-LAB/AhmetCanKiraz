import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Bell, Crown } from 'lucide-react-native';
import { Badge } from '../ui/Badge';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Merhaba 👋</Text>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Sarah</Text>
          <View style={styles.levelBadge}>
            <Crown size={14} color="#FFD700" />
            <Text style={styles.levelText}>Seviye 12</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.notificationButton}>
        <Bell size={24} color="#9C27B0" />
        <View style={styles.notificationBadge} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  welcomeText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: '#666',
  },
  nameText: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 32,
    color: '#1A1A1A',
    marginTop: 4,
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  levelText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 14,
    color: '#FFD700',
  },
  notificationButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(156, 39, 176, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9C27B0',
  },
});