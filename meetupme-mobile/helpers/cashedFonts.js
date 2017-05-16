import { Font } from 'expo';

const cashedFonts = fonts => 
    fonts.map(font => Font.loadAsync(font));

export const fontAssets = cashedFonts([
      {
        montserrat: require('../assets/fonts/Montserrat-Regular.ttf')
      },
      {
        montserrat: require('../assets/fonts/Montserrat-Bold.ttf')
      },
      {
        montserrat: require('../assets/fonts/Montserrat-Light.ttf')
      },
      {
        montserrat: require('../assets/fonts/Montserrat-Medium.ttf')
      }
    ]);