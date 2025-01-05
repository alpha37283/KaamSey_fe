import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderInfoPage({ route }) {
  const { order } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{order.name}</Text>
      <Text style={styles.label}>Address: <Text style={styles.value}>{order.address}</Text></Text>
      <Text style={styles.label}>Order Status: <Text style={styles.value}>{order.status}</Text></Text>
      <Text style={styles.label}>Order Created On: <Text style={styles.value}>{order.createdOn}</Text></Text>
      <Text style={styles.label}>Order Delivery On: <Text style={styles.value}>{order.deliveryOn}</Text></Text>
      <Text style={styles.label}>Phone: <Text style={styles.value}>{order.phone}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  value: {
    fontWeight: 'bold',
  },
});
