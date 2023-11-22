import { styled } from '@/styles/theme'

export const SectionPresentation = styled('section', {
  backgroundImage: 'url(/assets/img/bg-story.png)',
  backgroundRepeat: 'no-repeat',

  paddingTop: '10rem',
  backgroundPosition: 'top center',
  paddingBottom: '5rem',

  position: 'relative',

  overflow: 'hidden',

  '@media(max-width:1485px)': {
    background: 'none',
  },
})
export const SectionPresentationContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 40,
  '@media(max-width:1485px)': {
    justifyContent: 'center',
  },
})
export const SectionPresentationTextContainer = styled('div', {
  width: '100%',
  maxWidth: '35.0625rem',
})
export const KratosAtreusImage = styled('img', {
  height: '39rem',
  width: '47.6875rem',
  position: 'relative',
  left: '-0.875rem',
  top: '1.125rem',

  '@media(max-width:900px)': {
    width: '100%',
    height: 'auto',
  },
})
