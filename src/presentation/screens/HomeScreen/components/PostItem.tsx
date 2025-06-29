import { StyleSheet, Text, View } from 'react-native';

import { Post } from '@/domain/entities/Post';
import React from 'react';

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.author}>Autor: {post.author}</Text>
      <Text numberOfLines={2}>{post.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  author: {
    fontStyle: 'italic',
    marginBottom: 6,
  },
});
