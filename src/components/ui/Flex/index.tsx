import { ReactNode } from 'react'
import { FlexContainer } from './styles'
import { IBox } from '@/types/globals'

type AlignTypes =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'

interface FlexProps extends IBox {
  as?: React.ElementType
  gap?: number
  wrap?: boolean
  direction?: 'row' | 'column'
  children: ReactNode
  align?: AlignTypes
  justify?: AlignTypes
}
export default function Flex({
  gap,
  wrap,
  direction = 'row',
  as = 'div',
  justify = 'flex-start',
  align = 'flex-start',
  children,
  ...rest
}: FlexProps) {
  return (
    <FlexContainer
      as={as}
      css={{
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: `${gap}px`,
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,

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
    </FlexContainer>
  )
}
