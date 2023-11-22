import { styled } from '@/styles/theme'

export const Container = styled('div', {
  maxWidth: '92.8125rem',
  width: '100%',
  margin: '0 auto',

  '@media (max-width:600px) ': {
    paddingInline: '1rem',
  },
})
