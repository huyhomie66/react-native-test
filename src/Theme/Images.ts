import { ThemeVariables } from './theme'

// svg icons
import Cat from '@/Assets/icons/cat-icon.svg'
import Dog from '@/Assets/icons/dog-icon.svg'
import Fish from '@/Assets/icons/fish-icon.svg'
import Rabbit from '@/Assets/icons/rabbit-icon.svg'
import Goat from '@/Assets/icons/goat-icon.svg'
import Cow from '@/Assets/icons/cow-icon.svg'
import whiteCat from '@/Assets/icons/cat-icon-white.svg'
import whiteDog from '@/Assets/icons/dog-icon-white.svg'
import whiteFish from '@/Assets/icons/fish-icon-white.svg'
import whiteRabbit from '@/Assets/icons/rabbit-icon-white.svg'
import whiteGoat from '@/Assets/icons/goat-icon-white.svg'
import whiteCow from '@/Assets/icons/cow-icon-white.svg'

export default function ({}: ThemeVariables) {
  return {
    logo: require('@/Assets/Images/TOM.png'),
    dog1: require('@/Assets/Images/dog1.jpg'),
    dog2: require('@/Assets/Images/dog2.jpg'),
    dog3: require('@/Assets/Images/dog3.jpg'),
    dog4: require('@/Assets/Images/dog4.jpg'),
    colorSvgIcon: {
      Cat,
      Dog,
      Fish,
      Rabbit,
      Goat,
      Cow,
    },
    whiteSvgIcon: {
      Cat: whiteCat,
      Dog: whiteDog,
      Fish: whiteFish,
      Rabbit: whiteRabbit,
      Goat: whiteGoat,
      Cow: whiteCow,
    },
  }
}
