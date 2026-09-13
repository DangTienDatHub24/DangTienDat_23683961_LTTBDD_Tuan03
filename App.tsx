import React, { useState } from 'react'; 

import { View, ScrollView, StyleSheet, Alert } from 'react-native'; 

import { StatusBar } from 'expo-status-bar'; 

import { Header } from './components/Header';
import { CategoryChips } from './components/CategoryChips'; 

import { BookGrid } from './components/BookGrid'; 

import { FloatingCartButton } from './components/FloatingCartButton'; 

import { BOOKS } from './data'; 

 

export default function App() { 

  const [cartCount, setCartCount] = useState(0); 

 

    const handlePressBook = (id: number) => { 

    setCartCount((c) => c + 1); 

  }; 

 

  return ( 

     

    <View style={styles.screen}> 

      {/* 1. Header cố định trên cùng */} 

      <Header /> 

 

      {/* 2. ScrollView chứa Chips + Grid — nhớpaddingBottom đủlớn để 

          FloatingCartButton không che mất sách cuối cùng */} 

      <ScrollView contentContainerStyle={styles.content}> 

        <CategoryChips /> 

 

        <BookGrid books={BOOKS} onPressBook={handlePressBook} /> 

      </ScrollView> 

 

      {/* 3. Nút giỏnổi — NGOÀI ScrollView */} 

      <FloatingCartButton 

        count={cartCount} 

        onPress={() => Alert.alert('Giỏ hàng', `Bạn có ${cartCount} sản phẩm`)} 

      /> 

 

      <StatusBar style="auto" /> 

    </View> 

  ); 

} 

 

const styles = StyleSheet.create({ 

  screen: { flex: 1, backgroundColor: '#F8FAFC' }, 

  content: { padding: 16, paddingBottom: 100 }, 

}); 

 