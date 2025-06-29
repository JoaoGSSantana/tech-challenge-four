import React, { useEffect, useState } from "react";
import { FlatList, TextInput, View, Text } from "react-native";
import { styles } from "./styles";

export default function HomeScreen() {
  const [posts, setPosts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

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
        renderItem={({ item, index }) => <Text>{index}</Text>}
      />
    </View>
  );
}
