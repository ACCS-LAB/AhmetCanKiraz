import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import Animated, { FadeIn, FadeInRight } from 'react-native-reanimated';

const questions = [
  {
    id: 'hair-type',
    question: 'Saç tipiniz nedir?',
    options: ['Düz', 'Dalgalı', 'Kıvırcık', 'Çok Kıvırcık'],
    images: [
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1634298857849-27b3bb28205c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'current-length',
    question: 'Şu anki saç uzunluğunuz?',
    options: ['Kısa (Omuz üstü)', 'Orta (Omuz hizası)', 'Uzun (Omuz altı)', 'Çok uzun (Sırt ortası)']
  },
  {
    id: 'goal',
    question: 'Ana hedefiniz nedir?',
    options: ['Uzunluk', 'Kalınlık', 'Onarım', 'Hızlı uzama']
  },
  {
    id: 'concerns',
    question: 'En büyük saç probleminiz?',
    options: ['Kırılma', 'Yavaş uzama', 'Uç kırıkları', 'İncelme']
  }
];

export default function QuizScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: answer,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      router.replace('/(tabs)');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else {
      router.back();
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <ArrowLeft size={24} color="#666" />
      </TouchableOpacity>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <Animated.View 
            entering={FadeInRight}
            style={[styles.progressFill, { width: `${progress}%` }]} 
          />
        </View>
        <Text style={styles.progressText}>{currentQuestion + 1}/{questions.length}</Text>
      </View>

      <Animated.View 
        entering={FadeIn}
        style={styles.content}
      >
        <Text style={styles.question}>{question.question}</Text>

        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => (
            <Animated.View
              key={option}
              entering={FadeInRight.delay(index * 100)}
              style={styles.optionWrapper}
            >
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  answers[question.id] === option && styles.optionButtonSelected
                ]}
                onPress={() => handleAnswer(option)}
              >
                <Text style={[
                  styles.optionText,
                  answers[question.id] === option && styles.optionTextSelected
                ]}>
                  {option}
                </Text>
                <ArrowRight 
                  size={20} 
                  color={answers[question.id] === option ? "#FFF" : "#9C27B0"} 
                />
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8FC',
    padding: 24,
    paddingTop: 60,
  },
  backButton: {
    marginBottom: 32,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 40,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#9C27B0',
    borderRadius: 4,
  },
  progressText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 14,
    color: '#666',
  },
  content: {
    flex: 1,
  },
  question: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 32,
    color: '#1A1A1A',
    marginBottom: 40,
    lineHeight: 40,
  },
  optionsContainer: {
    gap: 16,
  },
  optionWrapper: {
    width: '100%',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
  optionButtonSelected: {
    backgroundColor: '#9C27B0',
    borderColor: '#9C27B0',
  },
  optionText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 18,
    color: '#1A1A1A',
  },
  optionTextSelected: {
    color: '#FFF',
  },
});