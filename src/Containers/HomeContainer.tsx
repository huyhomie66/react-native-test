/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  FlatList,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTheme } from '@/Hooks'
import {
  Location,
  Notification,
  SearchNormal1,
  Setting4,
} from 'iconsax-react-native'
import { TextInput } from 'react-native-gesture-handler'

// Static Data -----------------------------------
// const petsCategory = [
//   {
//     name: 'Dog',
//     key: 'dog',
//     Icon:
//   }
// ]

const HomeContainer = () => {
  const { Fonts, Gutters, Layout, Colors, MetricsSizes, FontSize } = useTheme()

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        { backgroundColor: Colors.screenBackground },
      ]}
    >
      {/* Header ----------------------------- */}
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
                <Text
                  style={[{ fontSize: FontSize.small, color: Colors.text }]}
                >
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
                // eslint-disable-next-line react-native/no-inline-styles
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
        <FlatList />
      </View>
      <View>
        <Text>This is home screen</Text>
        <Pressable>
          <Text>this is button</Text>
        </Pressable>
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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 20,
  },
  inputContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 42,
    marginTop: 11,
  },
})
