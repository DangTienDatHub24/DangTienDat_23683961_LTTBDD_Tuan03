import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import { Header } from './components/Header';
import { CategoryChips } from './components/CategoryChips';
import { BookGrid } from './components/BookGrid';
import { FloatingCartButton } from './components/FloatingCartButton';
import { BOOKS } from './data';

export default function App() {
  // Trạng thái lưu số lượng trong giỏ hàng (mặc định 4 theo đề bài)
  const [cartCount, setCartCount] = useState(4);

  const handlePressBook = (id: number) => {
    Alert.alert('Thông báo', `Bạn vừa chọn sách có ID: ${id}`);
  };

  const handlePressCart = () => {
    Alert.alert('Giỏ hàng', `Hiện đang có ${cartCount} sản phẩm trong giỏ.`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle='light-content' backgroundColor='#1E1B4B' />
      <View style={styles.screen}>
        {/* 1. Header cố định trên cùng màn hình (không nằm trong ScrollView để không bị cuộn) */}
        <Header />

        {/* 2. ScrollView chứa CategoryChips và Lưới sách BookGrid */}
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.section}>
            <CategoryChips />
          </View>
          <View style={styles.section}>
            <BookGrid books={BOOKS} onPressBook={handlePressBook} />
          </View>
        </ScrollView>

        {/* 3. Nút giỏ hàng tròn nổi NGOÀI ScrollView (position: absolute góc dưới-phải) */}
        <FloatingCartButton count={cartCount} onPress={handlePressCart} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1B4B',
  },
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 16,
    paddingBottom: 100, // Đệm dưới đủ lớn để nút giỏ hàng không che mất cuốn sách cuối
  },
  section: {
    marginBottom: 20,
  },
});
