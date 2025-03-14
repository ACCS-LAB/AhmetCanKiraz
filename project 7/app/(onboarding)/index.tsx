import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, Platform } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight, Sparkles, Clock, Award, Heart } from 'lucide-react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const features = [
  {
    icon: Sparkles,
    title: 'Kişiselleştirilmiş',
    description: 'Saç tipinize özel bakım',
    color: '#FF6B6B',
  },
  {
    icon: Clock,
    title: 'Günlük Takip',
    description: 'İlerlemeni gör',
    color: '#4ECDC4',
  },
  {
    icon: Award,
    title: 'Ödüllü Sistem',
    description: 'Başarılarını kutla',
    color: '#FFD93D',
  },
  {
    icon: Heart,
    title: 'Topluluk',
    description: 'Deneyim paylaş',
    color: '#FF8B94',
  },
];

export default function OnboardingWelcome() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Animated.View 
        entering={FadeInUp.delay(200)}
        style={[styles.imageContainer, { height: height * 0.5 }]}
      >
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop' }}
          style={[styles.heroImage, { width }]}
          contentFit="cover"
        />
        <LinearGradient
          colors={['transparent', '#FAF8FC']}
          style={styles.gradient}
          locations={[0, 0.8]}
        />
      </Animated.View>

      <View style={styles.contentContainer}>
        <Animated.Text 
          entering={FadeInDown.delay(400)}
          style={styles.title}
        >
          Sağlıklı Saçlar için{'\n'}Yeni Bir Başlangıç
        </Animated.Text>

        <View style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <Animated.View
              key={index}
              entering={FadeInDown.delay(600 + index * 100)}
              style={styles.featureCard}
            >
              <View style={[styles.iconContainer, { backgroundColor: `${feature.color}20` }]}>
                <feature.icon size={20} color={feature.color} />
              </View>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </Animated.View>
          ))}
        </View>

        <Animated.View 
          entering={FadeInDown.delay(1000)}
          style={styles.footer}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/(onboarding)/quiz')}
          >
            <Text style={styles.buttonText}>Hemen Başla</Text>
            <ArrowRight size={20} color="#FFF" />
          </TouchableOpacity>

          <Text style={styles.footerText}>
            50.000+ kullanıcı tarafından tercih ediliyor
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8FC',
  },
  imageContainer: {
    overflow: 'hidden',
  },
  heroImage: {
    height: '100%',
  },
  gradient: {
    height: '50%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  contentContainer: {
    flex: 1,
    padding: 24,
    marginTop: -20,
  },
  title: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 32,
    color: '#1A1A1A',
    marginBottom: 24,
    lineHeight: 40,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  featureCard: {
    width: '47%',
    backgroundColor: Platform.select({
      web: 'rgba(255, 255, 255, 0.8)',
      default: 'rgba(255, 255, 255, 0.9)',
    }),
    padding: 12,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureTitle: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 14,
    color: '#1A1A1A',
    marginBottom: 4,
  },
  featureDescription: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 12,
    color: '#666',
  },
  footer: {
    gap: 16,
    marginTop: 'auto',
  },
  button: {
    backgroundColor: '#9C27B0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 16,
    gap: 8,
  },
  buttonText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 18,
    color: '#FFF',
  },
  footerText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});