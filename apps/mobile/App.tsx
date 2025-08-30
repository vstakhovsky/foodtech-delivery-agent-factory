import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: '600' }}>FoodTech Delivery (Expo)</Text>
      <Text>Home → Restaurant → Cart → Checkout → Tracking</Text>
      <Pressable style={{ marginTop: 16, padding: 12, backgroundColor: '#111', borderRadius: 8 }}>
        <Text style={{ color: 'white' }}>Open Demo Restaurant</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
