import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';
import { Trophy, Users, Calendar, TrendingUp } from 'lucide-react-native';

const isWeb = Platform.OS === 'web';

export default function ChallengesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.headerTitle}>Challenges</Text>

      <View style={styles.featuredChallenge}>
        {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1595436301907-0aef7630ca3d?q=80&w=800&auto=format&fit=crop' }}
          style={styles.featuredImage}
          contentFit="cover"
        />
        <View style={styles.featuredContent}>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>Featured</Text>
          </View>
          <Text style={styles.featuredTitle}>90-Day Growth Challenge</Text>
          <Text style={styles.featuredSubtitle}>Join 2,547 others in this transformative journey</Text>
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join Challenge</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
          <Trophy size={24} color="#9C27B0" />
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Challenges{'\n'}Completed</Text>
        </View>
        <View style={styles.statCard}>
          {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
          <Users size={24} color="#9C27B0" />
          <Text style={styles.statNumber}>847</Text>
          <Text style={styles.statLabel}>Co-challengers</Text>
        </View>
        <View style={styles.statCard}>
          {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
          <Calendar size={24} color="#9C27B0" />
          <Text style={styles.statNumber}>45</Text>
          <Text style={styles.statLabel}>Days Streak</Text>
        </View>
        <View style={styles.statCard}>
          {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
          <TrendingUp size={24} color="#9C27B0" />
          <Text style={styles.statNumber}>89%</Text>
          <Text style={styles.statLabel}>Success Rate</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Active Challenges</Text>
      
      <View style={styles.challengeCard}>
        {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
        <View style={styles.challengeHeader}>
          <Text style={styles.challengeTitle}>30-Day Protein Treatment</Text>
          <View style={styles.progressBadge}>
            <Text style={styles.progressText}>Day 18</Text>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '60%' }]} />
        </View>
        <Text style={styles.challengeMetrics}>352 participants • 4.9★ rating</Text>
      </View>

      <View style={styles.challengeCard}>
        {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
        <View style={styles.challengeHeader}>
          <Text style={styles.challengeTitle}>Rice Water Challenge</Text>
          <View style={styles.progressBadge}>
            <Text style={styles.progressText}>Day 5</Text>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '20%' }]} />
        </View>
        <Text style={styles.challengeMetrics}>1,247 participants • 4.8★ rating</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8FC',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 32,
    color: '#1A1A1A',
    marginBottom: 24,
  },
  featuredChallenge: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: isWeb ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
    marginBottom: 24,
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredContent: {
    padding: 20,
  },
  badgeContainer: {
    backgroundColor: '#9C27B0',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  badgeText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 12,
    color: '#FFF',
  },
  featuredTitle: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 24,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  featuredSubtitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  joinButton: {
    backgroundColor: '#9C27B0',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  joinButtonText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 16,
    color: '#FFF',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: isWeb ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    overflow: 'hidden',
  },
  statNumber: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 24,
    color: '#1A1A1A',
    marginTop: 8,
  },
  statLabel: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  sectionTitle: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 24,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  challengeCard: {
    backgroundColor: isWeb ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    overflow: 'hidden',
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  challengeTitle: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 18,
    color: '#1A1A1A',
  },
  progressBadge: {
    backgroundColor: 'rgba(156, 39, 176, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  progressText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 14,
    color: '#9C27B0',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#9C27B0',
    borderRadius: 2,
  },
  challengeMetrics: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#666',
  },
});