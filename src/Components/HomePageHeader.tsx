/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native'
import React, { useState } from 'react'
import { useStatic, useTheme } from '@/Hooks'
import {
  Location,
  Notification,
  SearchNormal1,
  Setting4,
} from 'iconsax-react-native'
import { PetCategoryButton } from '.'

const HomePageHeader = () => {
  const { Layout, Colors, MetricsSizes, FontSize, Gutters, Fonts } = useTheme()
  const { petsCategory } = useStatic()
  const [activeCategory, setActiveCategory] = useState<string>(
    petsCategory[0].name,
  )

  return (
    <View
      style={[
        styles.header,
        styles.shadow,
        { backgroundColor: Colors.white, shadowColor: Colors.primary },
      ]}
    >
      <View style={[{ paddingHorizontal: 20 }]}>
        {/* Header Top Row ------------------- */}
        <View
          style={[
            Layout.row,
            Layout.alignItemsCenter,
            Layout.justifyContentBetween,
          ]}
        >
          <View style={[]}>
            <Text
              style={[
                {
                  fontSize: FontSize.large,
                  fontWeight: '700',
                  color: Colors.text,
                },
              ]}
            >
              Hello Jane
            </Text>
            <View style={[Layout.row, Layout.alignItemsCenter]}>
              <Location
                size={MetricsSizes.regular}
                color={Colors.primary}
                style={[Gutters.tinyRMargin]}
              />
              <Text style={[{ fontSize: FontSize.small, color: Colors.text }]}>
                Hoululu, united state.
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.circleIcon,
              Layout.center,
              styles.shadow,
              { backgroundColor: Colors.white, shadowColor: Colors.primary },
            ]}
          >
            <Notification
              color={Colors.primary}
              size={MetricsSizes.regular + 4}
            />
          </View>
        </View>

        {/* Input Component */}
        <View
          style={[
            Layout.row,
            Layout.alignItemsCenter,
            styles.inputContainer,
            { backgroundColor: Colors.inputBackground },
          ]}
        >
          <SearchNormal1
            size={MetricsSizes.large - 4}
            color={Colors.primary}
            style={[Gutters.tinyHMargin]}
          />
          <TextInput
            style={[Layout.fill, Fonts.textRegular, { color: Colors.white }]}
          />
          <Pressable
            style={[
              Layout.fullHeight,
              Layout.center,
              {
                backgroundColor: Colors.primary,
                paddingHorizontal: 16,
              },
            ]}
          >
            <Setting4 size={MetricsSizes.large - 6} color={Colors.white} />
          </Pressable>
        </View>
      </View>

      {/* Pet Category ------------------------------- */}
      <FlatList
        style={[styles.categoryList]}
        contentContainerStyle={[
          {
            paddingHorizontal: 20,
          },
        ]}
        horizontal
        data={petsCategory}
        renderItem={({ item }) => (
          <PetCategoryButton
            {...item}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        )}
        keyExtractor={({ name }) => name}
      />
    </View>
  )
}

export default HomePageHeader

const styles = StyleSheet.create({
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
  shadow: {
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
  circleIcon: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  categoryList: {
    paddingVertical: 15,
  },
})
