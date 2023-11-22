import { ReactNode } from 'react'
import { BoxContainer } from './styles'
import { IBox } from '@/types/globals'

interface FlexProps extends IBox {
  as?: React.ElementType
  children: ReactNode
}

export default function Box({ as = 'div', children, ...rest }: FlexProps) {
  return (
    <BoxContainer
      as={as}
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
      }}
    >
      {children}
    </BoxContainer>
  )
}
