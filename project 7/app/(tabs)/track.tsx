import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Camera } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

export default function TrackScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.headerTitle}>Track Progress</Text>
      
      <View style={styles.cameraCard}>
        {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
        <View style={styles.cameraContent}>
          <View style={styles.cameraIcon}>
            <Camera size={32} color="#9C27B0" />
          </View>
          <Text style={styles.cameraText}>Take Progress Photo</Text>
          <Text style={styles.cameraSubtext}>Keep the same pose and lighting for best results</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Measurement Update</Text>
      <View style={styles.measurementCard}>
        {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
        <View style={styles.measurementField}>
          <Text style={styles.measurementLabel}>Current Length</Text>
          <TouchableOpacity style={styles.input}>
            <Text style={styles.inputText}>Enter length in inches</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.measurementField}>
          <Text style={styles.measurementLabel}>Thickness Level</Text>
          <View style={styles.thicknessOptions}>
            {['Fine', 'Medium', 'Thick'].map((option) => (
              <TouchableOpacity key={option} style={styles.thicknessOption}>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Measurements</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Hair Health Check</Text>
      <View style={styles.healthCard}>
        {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
        <Text style={styles.healthText}>Rate your hair's health today</Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((rating) => (
            <TouchableOpacity key={rating} style={styles.ratingButton}>
              <Text style={styles.ratingText}>{rating}</Text>
            </TouchableOpacity>
          ))}
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
  cameraCard: {
    borderRadius: 20,
    backgroundColor: isWeb ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
    overflow: 'hidden',
    marginBottom: 32,
  },
  cameraContent: {
    padding: 24,
    alignItems: 'center',
  },
  cameraIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(156, 39, 176, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cameraText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 18,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  cameraSubtext: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#9C27B0',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 16,
    color: '#FFF',
  },
  sectionTitle: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 24,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  measurementCard: {
    borderRadius: 20,
    backgroundColor: isWeb ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
    padding: 20,
    marginBottom: 32,
    overflow: 'hidden',
  },
  measurementField: {
    marginBottom: 20,
  },
  measurementLabel: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#FFF',
  },
  inputText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: '#666',
  },
  thicknessOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  thicknessOption: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  optionText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 14,
    color: '#1A1A1A',
  },
  healthCard: {
    borderRadius: 20,
    backgroundColor: isWeb ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
    padding: 20,
    marginBottom: 32,
    overflow: 'hidden',
  },
  healthText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  ratingButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  ratingText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 16,
    color: '#1A1A1A',
  },
});