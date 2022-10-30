import { ThemeVariables } from './theme'

export default function ({}: ThemeVariables) {
  return {
    logo: require('@/Assets/Images/TOM.png'),
    icons: {
      cat: require('@/Assets/icons/cat-icon.svg'),
      fish: require('@/Assets/icons/fish-icon.svg'),
      dog: require('@/Assets/icons/dog-icon.svg'),
      rabbit: require('@/Assets/icons/rabbit-icon.svg'),
      cow: require('@/Assets/icons/cow-icon.svg'),
      carbonPhonIcon: require('@/Assets/icons/carbon-phone-icon.svg'),
      dog24: require('@/Assets/icons/dog-24-icon.svg'),
      book: require('@/Assets/icons/book-icon.svg'),
      signal: require('@/Assets/icons/signal-icon.svg'),
      star: require('@/Assets/icons/star-icon.svg'),
    },
  }
}
