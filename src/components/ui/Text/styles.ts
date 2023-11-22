import { colorVariants, fontSizeVariants, styled } from '@/styles/theme'

export const TextContainer = styled('p', {
  variants: {
    size: fontSizeVariants,
    color: colorVariants,
  },
})
