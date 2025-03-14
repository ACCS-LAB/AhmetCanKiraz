import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Award, Crown } from 'lucide-react-native';
import { Card } from '../ui/Card';

export function AchievementList() {
  const achievements = [
    {
      icon: Award,
      title: 'Saç Uzmanı',
      description: '30 gün kesintisiz bakım',
      progress: 80,
      current: 24,
      total: 30,
      iconColor: '#FFD700',
    },
    {
      icon: Crown,
      title: 'Trend Belirleyici',
      description: '1000 beğeni al',
      progress: 60,
      current: 612,
      total: 1000,
      iconColor: '#9C27B0',
      isNew: true,
    },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {achievements.map((achievement, index) => (
        <Card
          key={index}
          style={[
            styles.card,
            achievement.isNew && styles.newCard,
            index < achievements.length - 1 && styles.marginRight,
          ]}
        >
          <achievement.icon size={24} color={achievement.iconColor} />
          <Text style={styles.title}>{achievement.title}</Text>
          <Text style={styles.description}>{achievement.description}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${achievement.progress}%` }]} />
          </View>
          <Text style={styles.status}>{achievement.current}/{achievement.total}</Text>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  card: {
    width: 200,
    padding: 20,
  },
  newCard: {
    borderWidth: 2,
    borderColor: '#9C27B0',
  },
  marginRight: {
    marginRight: 16,
  },
  title: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 18,
    color: '#1A1A1A',
    marginTop: 12,
    marginBottom: 4,
  },
  description: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#9C27B0',
    borderRadius: 2,
  },
  status: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 14,
    color: '#666',
  },
});