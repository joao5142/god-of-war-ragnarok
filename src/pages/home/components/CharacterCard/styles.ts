import { styled } from '@/styles/theme'

export const CardButton = styled('button', {
  padding: '1rem 2rem',
  background: '$blue',

  border: 'none',
  outline: '0',

  fontSize: '$lg',
  fontWeight: 'bold',
  color: '$white',

  cursor: 'pointer',

  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 0,

  opacity: 0,

  transition: 'all 0.5s ease',

  textWrap: 'nowrap',
})

export const CardContainer = styled('div', {
  position: 'relative',
  width: '24rem',

  transition: 'all 0.7s ease',

  '&:hover': {
    img: {
      transform: 'scale(1.1)',
      filter: 'brightness(110%)',
    },
    [`${CardButton}`]: {
      opacity: 1,
      bottom: '100px',
    },
  },

  img: {
    cursor: 'pointer',
    objectFit: 'cover',

    marginTop: '-2px',
    marginLeft: '-2px',

    transition: 'all 0.5s ease',
  },

  '@media(max-width:430px)': {
    '&': {
      width: '20rem',
    },
    img: {
      width: '100%',
    },
  },

  '@media(max-width:375px)': {
    '&': {
      width: '100%',
    },
    img: {
      width: '100%',
    },
  },
})

export const CardImageContainer = styled('div', {
  overflow: 'hidden',
})
