import Container from '@/components/wrappers/Container'
import {
  SectionHero as HeroSection,
  TrailerImage,
  PriceButton,
  SellButton,
  SectionHeroTitle,
  SectionHeroContainer,
} from './styles'
import Flex from '@/components/ui/Flex'
import Image from 'next/image'
import Text from '@/components/ui/Text'

export default function SectionHero() {
  return (
    <HeroSection>
      <Container>
        <SectionHeroContainer>
          <div>
            <Flex gap={10} align="center" marginBottom={25}>
              <Image
                src={'/assets/img/bullet.svg'}
                width={10}
                height={10}
                alt="bullet"
              />
              <Text as="span" display="block">
                Lançamento dia 09/11/2022{' '}
              </Text>
            </Flex>
            <SectionHeroTitle>God of War Ragnarök</SectionHeroTitle>
            <Text marginTop={5}>
              Os maiores heróis dos nove reinos, lutando por um futuro em que
              acreditam.
            </Text>
            <Flex marginTop={30} wrap>
              <PriceButton>
                <Text as="strong" color="black">
                  R$ 349,00
                </Text>
              </PriceButton>
              <SellButton>
                <Text as="strong" color="white">
                  Comprar na pré-venda
                </Text>
              </SellButton>
            </Flex>
          </div>

          <div>
            <Text as="span" display="block" marginBottom={10}>
              Assista aos trailer
            </Text>
            <TrailerImage src="/assets/img/thumbnail.gif" alt="trailer gif" />
            <Flex align="center" gap={10} marginTop={30}>
              <Image
                src="/assets/img/idade.png"
                width={40}
                height={40}
                alt="idade"
              />
              <Text size="sm">
                Drogas Lícitas, Linguagem Imprópria, Violência Extrema
              </Text>
            </Flex>
          </div>
        </SectionHeroContainer>
      </Container>
    </HeroSection>
  )
}
