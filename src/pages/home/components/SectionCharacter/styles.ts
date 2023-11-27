import Text from '@/components/ui/Text'
import { styled } from '@/styles/theme'

export const SectionCharacter = styled('section', {
  backgroundImage: 'url(/assets/img/bg-characters.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',

  paddingBottom: 200,
})
export const SectionCharacterContainer = styled('div', {
  marginTop: 250,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  alignItems: 'center',
  justifyContent: 'space-between',

  '& > :nth-child(1)': {
    maxWidth: '600px',
    width: '100%',
  },
})

export const AxImage = styled('img', {
  objectFit: 'contain',
  width: '100%',

  maxWidth: '350px',
})

export const LogoImage = styled('img', {
  maxWidth: '150px',
})

export const ReleaseData = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',

  gap: 17,

  [`& span`]: {
    fontWeight: 500,
    fontSize: '$md',
    lineHeight: 1.4,

    marginLeft: '0.5rem',
  },

  '@media(max-width:440px)': {
    display: 'none',
  },
})
