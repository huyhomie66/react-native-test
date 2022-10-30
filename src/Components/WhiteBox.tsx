import { View, StyleSheet, ViewProps } from 'react-native'
import React, { FC } from 'react'
import { useTheme } from '@/Hooks'

interface Props extends ViewProps {}

const WhiteBox: FC<Props> = ({ children, ...props }) => {
  const { Colors } = useTheme()
  return (
    <View
      {...props}
      style={[
        styles.box,
        { backgroundColor: Colors.white, shadowColor: Colors.primary },
        props.style,
      ]}
    >
      {children}
    </View>
  )
}

export default WhiteBox

const styles = StyleSheet.create({
  box: {
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
})
