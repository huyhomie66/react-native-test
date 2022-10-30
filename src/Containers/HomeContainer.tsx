/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native'
import { useStatic, useTheme } from '@/Hooks'
import { HomePageHeader, NearByDogRow, PopularDogCard } from '@/Components'
import { PopularDog } from '@/Hooks/useStatic'

const HomeContainer = () => {
  const { Colors, FontSize } = useTheme()
  const { popularDogs } = useStatic()
  const [popularDg, setPopularDg] = useState<PopularDog[]>(popularDogs)

  // Utility functions ----------------------
  const onLikePress = (index: number) => {
    setPopularDg((prev: any) => {
      let data = [...prev]
      data[index].liked = !data[index].liked

      return [...data]
    })
  }

  return (
    <ScrollView
      contentContainerStyle={[{ backgroundColor: Colors.screenBackground }]}
    >
      {/* Header ----------------------------- */}
      <HomePageHeader />

      {/* Body ------------------------------------ */}
      <View style={[styles.bodyContainer]}>
        {/* Popular Dogs ------------------------------ */}
        <View>
          <Text
            style={[
              {
                fontSize: FontSize.large,
                fontWeight: '700',
                color: Colors.text,
                paddingHorizontal: 20,
              },
            ]}
          >
            Popular Dogs
          </Text>

          {/* dogs list --------------------------------- */}
          <FlatList
            contentContainerStyle={[
              {
                paddingHorizontal: 20,
                paddingVertical: 10,
              },
            ]}
            horizontal
            data={popularDg}
            renderItem={({ item, index }) => (
              <PopularDogCard
                {...item}
                index={index}
                onLikePress={onLikePress}
              />
            )}
            keyExtractor={({ name }) => name}
          />
        </View>
        {/* Nearby Dog Store ------------------------------ */}
        <View style={[{ marginTop: 10 }]}>
          <Text
            style={[
              {
                fontSize: FontSize.large,
                fontWeight: '700',
                color: Colors.text,
                paddingHorizontal: 20,
              },
            ]}
          >
            Nearby Dog Store
          </Text>
          {/* dogs list --------------------------------- */}
          <FlatList
            contentContainerStyle={[
              {
                paddingHorizontal: 20,
                paddingVertical: 10,
              },
            ]}
            data={popularDg}
            renderItem={({ item }) => <NearByDogRow {...item} />}
            keyExtractor={({ name }) => name}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeContainer

const styles = StyleSheet.create({
  circleIcon: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
  header: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingTop: 20,
  },
  inputContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 42,
    marginTop: 11,
  },
  categoryList: {
    paddingVertical: 15,
  },

  bodyContainer: {
    paddingVertical: 40,
  },
})
