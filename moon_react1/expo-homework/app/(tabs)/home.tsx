import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
  SafeAreaView,
  FlatList
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// 화면 너비를 가져오기 위해 Dimensions 사용
const { width } = Dimensions.get('window');

// 이미지 import
import reactLogo from '../../assets/images/react-logo.png';
import reactLogo2x from '../../assets/images/splash-icon.png';
import splashIcon from '../../assets/images/splash-icon.png';
import iconImage from '../../assets/images/icon.png';
import adaptiveIcon from '../../assets/images/adaptive-icon.png';
import favicon from '../../assets/images/favicon.png';
import promoImage from '../../assets/images/partial-react-logo.png';

// 샘플 음악 데이터 (나중에 서버나 DB 연동 가능)
const MUSIC_DATA = [
  { id: '1', title: '음악 1', cover: reactLogo },
  { id: '2', title: '음악 2', cover: reactLogo2x },
  { id: '3', title: '음악 3', cover: splashIcon },
  { id: '4', title: '음악 4', cover: iconImage },
];

// 가로 배너/카드에 들어갈 임시 데이터
const BANNER_DATA = [
  { id: 'b1', source: adaptiveIcon, title: '배너1' },
  { id: 'b2', source: iconImage, title: '배너2' },
  { id: 'b3', source: favicon, title: '배너3' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 헤더 영역 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>홈</Text>

        <View style={styles.headerIcons}>
          {/* 마이크 아이콘 */}
          <Pressable style={styles.iconButton}>
            <FontAwesome name="microphone" size={22} color="#000" />
          </Pressable>
          {/* 종(알림) 아이콘 */}
          <Pressable style={styles.iconButton}>
            <FontAwesome name="bell" size={22} color="#000" />
          </Pressable>
          {/* : (ellipsis-h) 아이콘 */}
          <Pressable style={styles.iconButton}>
            <FontAwesome name="ellipsis-h" size={22} color="#000" />
          </Pressable>
        </View>
      </View>

      {/* 전체 스크롤 영역: 상단부터 하단까지 세로로 스크롤 */}
      <ScrollView style={styles.content}>
        {/* (1) 뮤직4U 섹션 - 가로 스크롤 배너 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>뮤직4U</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            <Pressable
              style={styles.bannerItem}
              onPress={() => router.push('/(tabs)/(banner)/banner1')} // 배너1 클릭 시 banner1.tsx로 이동
            >
              <Image source={adaptiveIcon} style={styles.bannerImage} />
              <Text style={styles.bannerText}>배너1</Text>
            </Pressable>

            <Pressable
              style={styles.bannerItem}
              onPress={() => router.push('/(tabs)/(banner)/banner2')} // 배너2 클릭 시 banner2.tsx로 이동
            >
              <Image source={iconImage} style={styles.bannerImage} />
              <Text style={styles.bannerText}>배너2</Text>
            </Pressable>

            <Pressable
              style={styles.bannerItem}
              onPress={() => router.push('/(tabs)/(banner)/banner3')} // 배너3 클릭 시 banner3.tsx로 이동
            >
              <Image source={favicon} style={styles.bannerImage} />
              <Text style={styles.bannerText}>배너3</Text>
            </Pressable>
          </ScrollView>
        </View>

        {/* (2) 중간에 텍스트 + 이미지 섹션 예시 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>삼계월 삼십퍼센트 할인</Text>
          <Text style={styles.sectionSubtitle}>
            여기는 설명 문구를 적는 자리입니다.
          </Text>
          <Image source={promoImage} style={styles.promoImage} />
        </View>

        {/* (3) 최신 음악 섹션 - 세로 리스트 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>최신 음악</Text>
          <FlatList
            data={MUSIC_DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MusicItem item={item} />}
            nestedScrollEnabled
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/** 음악 아이템 컴포넌트 */
function MusicItem({ item }: { item: { id: string; title: string; cover: any } }) {
  return (
    <View style={styles.musicItem}>
      <Image source={item.cover} style={styles.musicCover} />
      <Text style={styles.musicTitle}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  /** 전체 컨테이너 */
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /** 헤더 */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 12,
  },
  /** 메인 스크롤 컨텐츠 */
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /** 각 섹션 공통 스타일 */
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  /** 가로 스크롤 배너 */
  horizontalScroll: {
    paddingLeft: 16,
  },
  bannerItem: {
    width: width * 0.6, // banner 이미지 크기 조정
    height: 120,
    marginRight: 10,
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    marginBottom: 5,
    resizeMode: 'cover',
  },
  bannerText: {
    fontSize: 14,
    fontWeight: '500',
  },
  /** 프로모션 이미지 */
  promoImage: {
    width: width - 60,
    height: 100,
    marginHorizontal: 16,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  /** 음악 아이템 */
  musicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  musicCover: {
    width: 50,
    height: 50,
    borderRadius: 4,
    marginRight: 12,
    resizeMode: 'cover',
  },
  musicTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
