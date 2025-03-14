import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Heart, MessageCircle, Share2 } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

export default function CommunityScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community</Text>
        <TouchableOpacity style={styles.newPostButton}>
          <Text style={styles.newPostText}>New Post</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.postCard}>
        {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
        <View style={styles.postHeader}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.userName}>Emily Chen</Text>
            <Text style={styles.postTime}>2 hours ago</Text>
          </View>
        </View>
        <Text style={styles.postText}>
          Just hit my 6-month milestone! Can't believe the progress I've made with this amazing community's support 🌟
        </Text>
        <View style={styles.progressImages}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop' }}
            style={styles.progressImage}
            contentFit="cover"
          />
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop' }}
            style={styles.progressImage}
            contentFit="cover"
          />
        </View>
        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Heart size={20} color="#666" />
            <Text style={styles.actionText}>2.5k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MessageCircle size={20} color="#666" />
            <Text style={styles.actionText}>148</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Share2 size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.postCard}>
        {!isWeb && <BlurView intensity={40} style={StyleSheet.absoluteFill} />}
        <View style={styles.postHeader}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.userName}>Sarah Johnson</Text>
            <Text style={styles.postTime}>5 hours ago</Text>
          </View>
        </View>
        <Text style={styles.postText}>
          Quick tip: I've been using rice water rinses twice a week and the results are amazing! Anyone else tried this method? 💫
        </Text>
        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Heart size={20} color="#666" />
            <Text style={styles.actionText}>1.8k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MessageCircle size={20} color="#666" />
            <Text style={styles.actionText}>256</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Share2 size={20} color="#666" />
          </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontFamily: 'PlayfairDisplay-Bold',
    fontSize: 32,
    color: '#1A1A1A',
  },
  newPostButton: {
    backgroundColor: '#9C27B0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  newPostText: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 14,
    color: '#FFF',
  },
  postCard: {
    borderRadius: 20,
    backgroundColor: isWeb ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
    padding: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 16,
    color: '#1A1A1A',
  },
  postTime: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#666',
  },
  postText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: '#1A1A1A',
    marginBottom: 16,
    lineHeight: 24,
  },
  progressImages: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  progressImage: {
    flex: 1,
    height: 200,
    borderRadius: 12,
  },
  postActions: {
    flexDirection: 'row',
    gap: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionText: {
    fontFamily: 'PlusJakartaSans-Medium',
    fontSize: 14,
    color: '#666',
  },
});