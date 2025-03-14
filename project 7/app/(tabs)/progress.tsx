import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';
const { width } = Dimensions.get('window');
const cardWidth = width - 40; // 20px padding on each side

export default function ProgressScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.headerTitle}>Your Progress</Text>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
          <Text style={styles.statValue}>4.5"</Text>
          <Text style={styles.statLabel}>Total Growth</Text>
        </View>
        <View style={styles.statCard}>
          {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
          <Text style={styles.statValue}>89%</Text>
          <Text style={styles.statLabel}>Goal Progress</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Progress Timeline</Text>
      
      <View style={styles.timelineCard}>
        {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
        <View style={styles.timelineHeader}>
          <Text style={styles.timelineDate}>March 2025</Text>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>Latest</Text>
          </View>
        </View>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop' }}
          style={styles.timelineImage}
          contentFit="cover"
        />
        <View style={styles.timelineInfo}>
          <Text style={styles.timelineMetric}>Length: 18 inches</Text>
          <Text style={styles.timelineNotes}>Noticed significant improvement in thickness</Text>
        </View>
      </View>

      <View style={styles.timelineCard}>
        {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
        <View style={styles.timelineHeader}>
          <Text style={styles.timelineDate}>January 2025</Text>
        </View>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=800&auto=format&fit=crop' }}
          style={styles.timelineImage}
          contentFit="cover"
        />
        <View style={styles.timelineInfo}>
          <Text style={styles.timelineMetric}>Length: 15.5 inches</Text>
          <Text style={styles.timelineNotes}>Started new growth serum routine</Text>
        </View>
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
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    height: 100,
    borderRadius: 20,
    backgroundColor: isWeb ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  statValue: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 28,
    color: '#9C27B0',
  },
  statLabel: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  sectionTitle: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 24,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  timelineCard: {
    width: cardWidth,
    borderRadius: 20,
    backgroundColor: isWeb ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
    overflow: 'hidden',
    marginBottom: 20,
  },
  timelineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  timelineDate: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 18,
    color: '#1A1A1A',
  },
  badgeContainer: {
    backgroundColor: '#9C27B0',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 12,
    color: '#FFF',
  },
  timelineImage: {
    width: '100%',
    height: 250,
  },
  timelineInfo: {
    padding: 16,
  },
  timelineMetric: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 4,
  },
  timelineNotes: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#666',
  },
});