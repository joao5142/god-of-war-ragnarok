import { ReactNode } from 'react'
import { GridContainer } from './styles'
import { IBox } from '@/types/globals'

interface GridProps extends IBox {
  as?: React.ElementType
  gap?: number
  children: ReactNode
  templateColumns: string
  templateRows: string
}

export default function Grid({
  gap,
  as = 'div',
  templateColumns,
  templateRows,
  children,
  ...rest
}: GridProps) {
  return (
    <GridContainer
      as={as}
      css={{
        gap: `${gap}px`,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,

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
    </GridContainer>
  )
}
