import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function CoursesScreen() {
  const course = [
    { name: 'Angular', id: 1 },
    { name: 'React Js', id: 2 },
    { name: 'C++', id: 3 },
    { name: 'c programlama', id: 4 },
    { name: 'Bootstrap', id: 5 },
  ];
  return (
    <FlatList
      data={course}
      // horizantal={true}
      // showsHorizontalScrollIndicoator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text style={styles.content}>{item.name}</Text>
      }}
    />
  )
}

const styles = StyleSheet.create({
  content: {
    fontSize: 35,
    backgroundColor: 'yellow',
    marginVertical: 10,


  },
})