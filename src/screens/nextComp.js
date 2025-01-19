import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ServiceContext } from './context/createServiceContext';

const NextComponent = () => {
  const { title, desc, category, tags, hours, workers, price, img } = useContext(ServiceContext);

  return (
    <View>
      <Text>Title: {title}</Text>
      <Text>Description: {desc}</Text>
      <Text>Category: {category}</Text>
      <Text>Tags: {tags}</Text>
      <Text>Hours: {hours}</Text>
      <Text>Workers: {workers}</Text>
      <Text>Price: {price}</Text>
      <Text>Image URI: {img}</Text>
    </View>
  );
};

export default NextComponent;
