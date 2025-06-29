import { FlatList, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Post } from '@/domain/entities/Post';
import { PostFactory } from '@/application/factories/postFactory';
import PostItem from './components/PostItem';
import { styles } from './styles';

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const fetchPosts = async () => {
      PostFactory.makeGetPostsUseCase().execute().then(setPosts);
    };

    fetchPosts();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Posts</Text>
      <TextInput
        placeholder="Buscar post..."
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostItem post={item} />}
      />
    </View>
  );
}
