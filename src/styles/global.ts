import { globalCss } from './theme'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  body: {
    backgroundColor: '$background',
    color: '$white',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: '"Archivo", sans-serif',

    '@media(max-width:600px)': {},
  },
})
