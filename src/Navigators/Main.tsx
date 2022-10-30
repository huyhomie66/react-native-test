/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeContainer } from '@/Containers'
import { AnimatedTabBar } from '@/Components'
import { Home, Shop, FavoriteChart, Setting, Icon } from 'iconsax-react-native'
import { useTheme } from '@/Hooks'

const Tab = createBottomTabNavigator()

interface IBottomTabScreens {
  name: string
  component: () => JSX.Element
  BarIcon: Icon
}

const bottomTabScreens: IBottomTabScreens[] = [
  {
    name: 'Home',
    component: HomeContainer,
    BarIcon: Home,
  },
  {
    name: 'Shop',
    component: HomeContainer,
    BarIcon: Shop,
  },
  {
    name: 'Favorite',
    component: HomeContainer,
    BarIcon: FavoriteChart,
  },
  {
    name: 'Setting',
    component: HomeContainer,
    BarIcon: Setting,
  },
]

const MainNavigator = () => {
  const { Colors, MetricsSizes } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <AnimatedTabBar {...props} />}
    >
      {bottomTabScreens.map((screen: IBottomTabScreens, index: number) => {
        const { BarIcon } = screen
        return (
          <Tab.Screen
            key={index}
            {...screen}
            options={{
              tabBarIcon: () => (
                <BarIcon size={MetricsSizes.large} color={Colors.primary} />
              ),
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default MainNavigator
