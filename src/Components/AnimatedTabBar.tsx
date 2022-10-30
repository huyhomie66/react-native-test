import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutChangeEvent,
  Dimensions,
} from 'react-native'
import React, { useReducer } from 'react'
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs'
import { useTheme } from '@/Hooks'
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import Svg, { Path } from 'react-native-svg'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')
const AnimatedSvg = Animated.createAnimatedComponent(Svg)
const tabHeight = 60

// get information about the components position on the screen -----------
const componentPositionReducer = (
  state: any,
  action: { x: number; index: number },
) => {
  // Add the new value to the state
  return [...state, { x: action.x, index: action.index }]
}

type TabComponentProps = {
  active: boolean
  options: BottomTabNavigationOptions
  onLayout: (e: LayoutChangeEvent) => void
  onPress: () => void
  width: number
}

const TabComponent = (props: TabComponentProps) => {
  // Props ----------------------------------------------
  const { active, options, onLayout, onPress, width } = props
  const { Layout, Colors } = useTheme()

  // animations ------------------------------------------------------

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, { duration: 250 }),
        },
      ],
    }
  })

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, { duration: 250 }),
      transform: [
        {
          translateY: withTiming(active ? -10 : 0, { duration: 250 }),
        },
      ],
    }
  })

  return (
    <Pressable
      onPress={onPress}
      onLayout={onLayout}
      style={[Layout.alignItemsCenter, styles.tabBarComp, { width }]}
    >
      <Animated.View
        style={[
          styles.tabComponentCircle,
          animatedComponentCircleStyles,
          { backgroundColor: Colors.white },
        ]}
      />
      <Animated.View
        style={[
          styles.tabIconContainer,
          animatedIconContainerStyles,
          Layout.justifyContentCenter,
          Layout.alignItemsCenter,
        ]}
      >
        {/* @ts-ignore */}
        {options.tabBarIcon ? options.tabBarIcon() : <Text>?</Text>}
      </Animated.View>
    </Pressable>
  )
}

const AnimatedTabBar = (props: BottomTabBarProps) => {
  // Props ----------------------------------------------------
  const {
    state: { index: activeIndex, routes },
    navigation,
    descriptors,
  } = props

  // State and Hooks ------------------------------------------
  const [layout, setLayout] = useReducer(componentPositionReducer, [])
  const { Layout, Colors } = useTheme()
  const { bottom } = useSafeAreaInsets()

  const tabWidth = width / routes.length

  // Utilities -------------------------------------------------
  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    setLayout({ x: event.nativeEvent.layout.x, index })
  }

  const xOffset = useDerivedValue(() => {
    return (width / routes.length) * activeIndex - tabWidth / tabWidth
  }, [activeIndex, layout])

  // Animation ---------------------------------------------------
  const animatedStyles = useAnimatedStyle(() => {
    return {
      // translateX to the calculated offset with a smooth transition
      transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
    }
  })

  return (
    <View style={[{ backgroundColor: Colors.white, paddingBottom: bottom }]}>
      <AnimatedSvg
        width={tabWidth}
        height={tabHeight}
        viewBox={`0 0 ${tabWidth} ${tabHeight}`}
        style={[styles.activeBackground, animatedStyles]}
      >
        <Path
          fill={Colors.screenBackground}
          d={`M0 0C27 10 15 33 33 40 46 45 49 45 62 40 80 33 68 10 ${tabWidth} 0`}
        />
      </AnimatedSvg>
      <View style={[Layout.row, { height: tabHeight }]}>
        {routes.map((route, index) => {
          const active = index === activeIndex
          const { options } = descriptors[route.key]

          return (
            <TabComponent
              key={route.key}
              active={active}
              options={options}
              onPress={() => navigation.navigate(route.name)}
              onLayout={e => handleLayout(e, index)}
              width={tabWidth}
            />
          )
        })}
      </View>
    </View>
  )
}

export default AnimatedTabBar

const styles = StyleSheet.create({
  tabBarComp: {
    height: tabHeight,
    marginTop: -5,
  },
  tabIconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabComponentCircle: {
    borderRadius: 50,
    height: 40,
    width: 40,
    marginBottom: 20,
  },
  activeBackground: {
    position: 'absolute',
  },
})
