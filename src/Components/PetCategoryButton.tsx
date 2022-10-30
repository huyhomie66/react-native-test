import { useTheme } from '@/Hooks'
import { PetCategory } from '@/Hooks/useStatic'
import React from 'react'
import { StyleSheet } from 'react-native'
import WhiteBox from './WhiteBox'

interface PetCategoryProps extends PetCategory {
  activeCategory: string
  setActiveCategory: (value: string) => void
}

const PetCategoryButton = (props: PetCategoryProps) => {
  const { name, ActiveIcon, InActiveIcon, activeCategory, setActiveCategory } =
    props
  const { Layout, Colors } = useTheme()
  return (
    <WhiteBox
      onPress={() => setActiveCategory(name)}
      style={[
        Layout.alignItemsCenter,
        styles.categoryBox,
        {
          backgroundColor:
            activeCategory === name ? Colors.primary : Colors.white,
        },
      ]}
    >
      {props.activeCategory === props.name ? (
        <ActiveIcon height={25} width={25} />
      ) : (
        <InActiveIcon height={25} width={25} />
      )}
    </WhiteBox>
  )
}

export default PetCategoryButton

const styles = StyleSheet.create({
  categoryBox: {
    margin: 10,
    marginLeft: 0,
    marginRight: 15,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
})
