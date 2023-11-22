export interface IBox {
  padding?: number | string
  paddingLeft?: number | string
  paddingRight?: number | string
  paddingTop?: number | string
  paddingBottom?: number | string

  margin?: number | string
  marginLeft?: number | string
  marginRight?: number | string
  marginTop?: number | string
  marginBottom?: number | string

  display?: 'block' | 'inline'

  width?: string | number
  height?: string | number
}
