import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// 간단히 화면 폭을 가져올 수도 있음 (필요하다면)
const { width } = Dimensions.get('window');

// 메뉴 리스트 데이터
const MUSIC_MENU = [
  { id: '1', icon: 'heart-o', label: '좋아한 음악' },
  { id: '2', icon: 'bookmark-o', label: '저장한 음악' },
  { id: '3', icon: 'apple', label: 'iTunes 음악' },
  { id: '4', icon: 'shopping-cart', label: '구매한 음악' },
  { id: '5', icon: 'history', label: '최근 들은 음악' },
  { id: '6', icon: 'star-o', label: '많이 들은 음악' },
];

export default function MySongScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 헤더 영역 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>내 음악</Text>
        <Pressable style={styles.headerRight}>
          {/* 여기서는 임시로 검색 아이콘, 원하는 아이콘/텍스트로 변경 가능 */}
          <FontAwesome name="search" size={20} color="#000" />
        </Pressable>
      </View>

      {/* 스크롤 가능한 메인 영역 */}
      <ScrollView style={styles.scrollContent}>
        {/* 메뉴 리스트 */}
        <View style={styles.menuContainer}>
          {MUSIC_MENU.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              {/* 왼쪽 아이콘 */}
              <FontAwesome
                name={item.icon as any}
                size={20}
                color="#333"
                style={styles.menuIcon}
              />
              {/* 가운데 라벨 */}
              <Text style={styles.menuLabel}>{item.label}</Text>
              {/* 오른쪽 화살표 아이콘 */}
              <FontAwesome name="angle-right" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        {/* 내 앨범 / 콜라보 앨범 / 편집 영역 */}
        <View style={styles.albumTabContainer}>
          <TouchableOpacity style={styles.albumTabItem}>
            <Text style={styles.albumTabText}>내 앨범</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.albumTabItem}>
            <Text style={styles.albumTabText}>콜라보 앨범</Text>
          </TouchableOpacity>
          {/* 오른쪽 '편집' */}
          <Pressable style={styles.albumEditButton}>
            <Text style={styles.albumEditText}>편집</Text>
          </Pressable>
        </View>

        {/* 여기서부터는 앨범 목록 등이 들어갈 수 있지만,
            "내 앨범 밑 부분은 구현 안 해도 된다" 하셨으므로 생략 */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /** 전체 컨테이너 */
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /** 헤더 영역 */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerRight: {
    padding: 4,
  },
  /** 스크롤 영역 */
  scrollContent: {
    flex: 1,
  },
  /** 메뉴 리스트 컨테이너 */
  menuContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  /** 앨범 탭 영역 */
  albumTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 8,
    borderTopColor: '#f7f7f7',
  },
  albumTabItem: {
    marginRight: 16,
    paddingVertical: 4,
  },
  albumTabText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
  albumEditButton: {
    marginLeft: 'auto', // 오른쪽 정렬
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  albumEditText: {
    fontSize: 14,
    color: '#666',
  },
});
