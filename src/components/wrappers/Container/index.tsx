import { ReactNode } from 'react'
import { Container as StyledContainer } from './styles'

interface ContainerProps {
  children: ReactNode
}
export default function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>
}
