import Text from '@/components/ui/Text'
import { CardButton, CardContainer, CardImageContainer } from './styles'
import Flex from '@/components/ui/Flex'

interface CharacterCardProps {
  src: string
  title: string
  subtitle: string
}
export default function CharacterCard({
  src,
  title,
  subtitle,
}: CharacterCardProps) {
  return (
    <CardContainer>
      <CardImageContainer>
        <img src={src} alt="card image" />
      </CardImageContainer>
      <Flex direction="column" gap={5} marginTop={10}>
        <Text as="strong">{title}</Text>
        <Text as="span" color="gray">
          {subtitle}
        </Text>
      </Flex>

      <CardButton>Saiba Mais</CardButton>
    </CardContainer>
  )
}
