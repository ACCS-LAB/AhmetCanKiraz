import { ScrollView, StyleSheet } from 'react-native';
import { Header } from '@/components/home/Header';
import { FeaturedChallenge } from '@/components/home/FeaturedChallenge';
import { AchievementList } from '@/components/home/AchievementList';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Header />
      <FeaturedChallenge />
      <AchievementList />
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
});