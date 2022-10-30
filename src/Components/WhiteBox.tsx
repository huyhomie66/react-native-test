import {
  View,
  StyleSheet,
  ViewProps,
  PressableProps,
  Pressable,
} from 'react-native'
import React, { FC } from 'react'
import { useTheme } from '@/Hooks'

interface Props extends PressableProps {}

const WhiteBox: FC<Props> = ({ children, ...props }) => {
  const { Colors } = useTheme()
  return (
    <Pressable
      {...props}
      style={[
        styles.box,
        { backgroundColor: Colors.white, shadowColor: Colors.primary },
        // @ts-ignore
        props.style,
      ]}
    >
      {children}
    </Pressable>
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
