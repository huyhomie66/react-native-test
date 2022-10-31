/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import WhiteBox from './WhiteBox'
import { useTheme } from '@/Hooks'
import { Heart } from 'iconsax-react-native'
import { PopularDog } from '@/Hooks/useStatic'

interface PopularDogCardProps extends PopularDog {
  onLikePress: (index: number) => void
  index: number
}

const PopularDogCard = (props: PopularDogCardProps) => {
  const { image, name, age, onLikePress, index } = props
  const { FontSize, Colors, Layout } = useTheme()
  return (
    <WhiteBox style={[styles.container]}>
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
          Age | {age}
        </Text>
      </View>

      <View
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
        ]}
      >
        <Text
          style={[
            {
              fontSize: FontSize.regular,
              fontWeight: '700',
              color: Colors.text,
            },
          ]}
        >
          ${props.price}
        </Text>
        <WhiteBox
          onPress={() => onLikePress(index)}
          style={[styles.likeContainer]}
        >
          <Heart
            variant="Bold"
            size={16}
            color={props.liked ? Colors.primary : Colors.inputBackground}
          />
        </WhiteBox>
      </View>
    </WhiteBox>
  )
}

export default PopularDogCard

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    marginRight: 35,
    width: 155,
  },
  image: { height: 109, width: 132 },
  likeContainer: { borderRadius: 50, padding: 3 },
})
