import { createStitches } from '@stitches/react'

const themeConfigObj = {
  colors: {
    blue: '#3265EA',
    gray: '#BDC2CB',
    white: '#ffffff',
    black: '#000000',
    background: '#000201',
  },
  fontSizes: {
    xs: '0.675rem',
    sm: '0.9rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '2rem',
    '1xl': '3rem',
    '2xl': '4rem',
    '3xl': '5rem',
    '4xl': '6rem',
    '5xl': '7.5rem',
  },
}
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: themeConfigObj,
})

export type FontSizeTypes = keyof typeof themeConfigObj.fontSizes
export type ColorTypes = keyof typeof themeConfigObj.colors

type FontSizeValuesTypes = (typeof themeConfigObj.fontSizes)[FontSizeTypes]
type ColorValuesTypes = (typeof themeConfigObj.colors)[ColorTypes]

type ColorVariantsRecord = Record<ColorTypes, { color: ColorValuesTypes }>

export const colorVariants: ColorVariantsRecord = Object.entries(
  themeConfigObj.colors,
).reduce((acc, [key]) => {
  return {
    ...acc,
    [key]: { color: `$${key}` },
  }
}, {} as ColorVariantsRecord)

type FontSizeVariantsRecord = Record<
  FontSizeTypes,
  { fontSize: FontSizeValuesTypes }
>

export const fontSizeVariants: FontSizeVariantsRecord = Object.entries(
  themeConfigObj.fontSizes,
).reduce((acc, [key]) => {
  return {
    ...acc,
    [key]: { fontSize: `$${key}` },
  }
}, {} as FontSizeVariantsRecord)

console.log(colorVariants, fontSizeVariants)
