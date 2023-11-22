import { colorVariants, fontSizeVariants, styled } from '@/styles/theme'

export const HeadingContainer = styled('h1', {
  variants: {
    size: fontSizeVariants,
    color: colorVariants,
  },
})
