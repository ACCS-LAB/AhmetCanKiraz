import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Siren as Fire, Award, Users } from 'lucide-react-native';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export function FeaturedChallenge() {
  return (
    <Card style={styles.container}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop' }}
        style={styles.image}
        contentFit="cover"
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      />
      <View style={styles.content}>
        <Badge
          icon={Fire}
          text="Trend Meydan Okuma"
          color="#FFF"
          backgroundColor="rgba(255, 75, 75, 0.2)"
        />
        <Text style={styles.title}>30 Günlük Saç Dönüşümü</Text>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Users size={16} color="#FFF" />
            <Text style={styles.statText}>2.5K katılımcı</Text>
          </View>
          <View style={styles.stat}>
            <Award size={16} color="#FFF" />
            <Text style={styles.statText}>500 XP</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Hemen Katıl</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  title: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 28,
    color: '#FFF',
    marginVertical: 12,
  },
  stats: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 14,
    color: '#FFF',
  },
  button: {
    backgroundColor: '#9C27B0',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 16,
    color: '#FFF',
  },
});