/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import WhiteBox from './WhiteBox'
import { useTheme } from '@/Hooks'
import StartIcon from '@/Assets/icons/star-icon.svg'

interface NearByRowProps {
  image: any
  name: string
}

const NearByDogRow = (props: NearByRowProps) => {
  const { image, name } = props
  const { Layout, FontSize, Colors } = useTheme()

  return (
    <WhiteBox
      style={[
        styles.container,
        Layout.row,
        Layout.alignItemsCenter,
        Layout.justifyContentBetween,
      ]}
    >
      <View style={[Layout.row, Layout.alignItemsCenter]}>
        <Image style={[styles.image]} source={image} />

        <View style={[{ paddingVertical: 10 }]}>
          <Text
            style={[
              {
                fontSize: FontSize.regular,
                fontWeight: '700',
                color: Colors.text,
              },
            ]}
          >
            {name}
          </Text>
          <Text
            style={[
              {
                color: Colors.text,
                fontSize: FontSize.small,
                marginTop: 6,
              },
            ]}
          >
            Hoululu | 0.8 kms
          </Text>
        </View>
      </View>

      <View style={[Layout.alignItemsCenter]}>
        <StartIcon height={17} width={17} />
        <Text style={[{ fontSize: FontSize.small }]}>{4.9}</Text>
      </View>
    </WhiteBox>
  )
}

export default NearByDogRow

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  image: { height: 68, width: 79, marginRight: 10 },
})
