import { styled } from '@/styles/theme'
import Text from '../../components/ui/Text/index'

export const Header = styled('header', {
  minHeight: '5rem',
  display: 'flex',
  alignItems: 'center',
  '& > *': {
    width: '100%',
  },
})

export const HeaderContent = styled('header', {
  display: 'grid',
  gridTemplateColumns: 'minmax(100px,300px) 1fr minmax(100px,300px)',
  gap: 30,
  alignItems: 'center',
  '@media(max-width:450px)': {
    '& > :nth-child(1),& > :nth-child(3)': {
      display: 'none',
    },
    '&': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const PlatformButton = styled('div', {
  padding: '0.5rem',
  border: '1.5px solid $white',
  width: 'max-content',
  fontWeight: 600,
})

export const InfosContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(6,1fr)',
  gap: 20,

  [`& *`]: {
    textAlign: 'center',
  },

  '@media(max-width:750px)': {
    gridTemplateColumns: 'repeat(2,1fr)',
  },

  '@media(max-width:450px)': {
    gridTemplateColumns: '1fr',
  },
})
