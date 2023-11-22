import { HTMLAttributes, ReactNode } from 'react'
import { TextContainer } from './styles'
import { ColorTypes, FontSizeTypes } from '@/styles/theme'
import { IBox } from '@/types/globals'

interface TextProps
  extends Omit<HTMLAttributes<HTMLElement>, 'color' | 'size'>,
    IBox {
  as?: 'p' | 'span' | 'strong'
  children: ReactNode
  size?: FontSizeTypes
  color?: ColorTypes
  align?: 'center' | 'end' | 'start'
}
export default function Text({
  as = 'p',
  size = 'md',
  children,
  color = 'white',
  ...rest
}: TextProps) {
  return (
    <TextContainer
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
      {' '}
      {children}
    </TextContainer>
  )
}
