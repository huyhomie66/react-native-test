import { FC } from 'react'
import { SvgProps } from 'react-native-svg'
import useTheme from './useTheme'

export interface PetCategory {
  name: string
  ActiveIcon: FC<SvgProps>
  InActiveIcon: FC<SvgProps>
}

export interface PopularDog {
  name: string
  age: string
  price: string
  liked: boolean
  image: any
}

const useStatic = () => {
  const { Images } = useTheme()

  const petsCategory: PetCategory[] = [
    {
      name: 'Dog',
      InActiveIcon: Images.colorSvgIcon.Dog,
      ActiveIcon: Images.whiteSvgIcon.Dog,
    },
    {
      name: 'Cat',
      InActiveIcon: Images.colorSvgIcon.Cat,
      ActiveIcon: Images.whiteSvgIcon.Cat,
    },
    {
      name: 'Fish',
      InActiveIcon: Images.colorSvgIcon.Fish,
      ActiveIcon: Images.whiteSvgIcon.Fish,
    },
    {
      name: 'Rabbit',
      InActiveIcon: Images.colorSvgIcon.Rabbit,
      ActiveIcon: Images.whiteSvgIcon.Rabbit,
    },
    {
      name: 'Cow',
      InActiveIcon: Images.colorSvgIcon.Cow,
      ActiveIcon: Images.whiteSvgIcon.Cow,
    },
    {
      name: 'Goat',
      InActiveIcon: Images.colorSvgIcon.Goat,
      ActiveIcon: Images.whiteSvgIcon.Goat,
    },
  ]

  const popularDogs: PopularDog[] = [
    {
      name: 'Beagle',
      age: '2 Years',
      price: '30,000',
      liked: false,
      image: Images.dog1,
    },
    {
      name: 'Schnauzer',
      age: '3 Years',
      price: '40,000',
      liked: false,
      image: Images.dog2,
    },
    {
      name: 'Dog 3',
      age: '2 Years',
      price: '50,000',
      liked: false,
      image: Images.dog3,
    },
    {
      name: 'Dog 4',
      age: '5 Years',
      price: '50,000',
      liked: false,
      image: Images.dog4,
    },
  ]

  return { petsCategory, popularDogs }
}

export default useStatic
