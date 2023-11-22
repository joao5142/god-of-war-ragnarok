import { styled } from '@/styles/theme'

export const SectionHero = styled('section', {
  minHeight: 'calc(100dvh - 5rem)',
  backgroundImage: 'url(/assets/img/bg-hero.png)',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',

  '@media(max-width:600px)': {
    height: 'auto',
    paddingBlock: '2rem',
  },
})

export const SectionHeroContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: 40,

  '@media(max-width:1160px)': {
    justifyContent: 'center',
  },
})

export const SectionHeroTitle = styled('h1', {
  fontSize: '$5xl',

  maxWidth: '650px',
  width: '100%',

  '@media(max-width:682px)': {
    fontSize: '$3xl',
  },
  '@media(max-width:470px)': {
    fontSize: '$2xl',
  },
})
export const TrailerImage = styled('img', {
  border: '1px solid $blue',

  '@media(max-width:450px)': {
    width: '100%',
  },
})

const Button = styled('button', {
  padding: '1.12rem 2.25rem',
  outline: '0',
  border: 'none',
})

export const PriceButton = styled(Button, {
  background: '$white',
  marginBottom: 15,
})

export const SellButton = styled(Button, {
  background: '$blue',
  marginBottom: 15,
})
