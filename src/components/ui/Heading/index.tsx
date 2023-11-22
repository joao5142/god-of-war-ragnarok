import { HTMLAttributes, ReactNode } from 'react'
import { HeadingContainer } from './styles'
import { ColorTypes, FontSizeTypes } from '@/styles/theme'
import { IBox } from '@/types/globals'

interface TextProps
  extends Omit<HTMLAttributes<HTMLElement>, 'color' | 'size'>,
    IBox {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  size?: FontSizeTypes
  color?: ColorTypes
  align?: 'center' | 'end' | 'start'
}
export default function Heading({
  as = 'h1',
  size,
  children,
  color,
  ...rest
}: TextProps) {
  return (
    <HeadingContainer
      as={as}
      size={size}
      color={color}
      css={{
        padding: rest.padding ?? '',
        paddingTop: rest.paddingTop ?? ' ',
        paddingBottom: rest.paddingBottom ?? ' ',
        paddingLeft: rest.paddingLeft ?? '',
        paddingRight: rest.paddingRight,

        margin: rest.margin ?? '',
        marginTop: rest.marginTop ?? ' ',
        marginBottom: rest.marginBottom ?? ' ',
        marginLeft: rest.marginLeft ?? '',
        marginRight: rest.marginRight,

        display: rest.display ?? '',
        textAlign: rest.align ?? '',
      }}
      {...rest}
    >
      {children}
    </HeadingContainer>
  )
}
