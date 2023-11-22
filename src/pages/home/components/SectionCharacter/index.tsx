import Container from '@/components/wrappers/Container'
import {
  SectionCharacter as CharacterSection,
  AxImage,
  SectionCharacterContainer,
  LogoImage,
  ReleaseData,
} from './styles'

import Image from 'next/image'
import Text from '@/components/ui/Text'
import Heading from '@/components/ui/Heading'
import Flex from '@/components/ui/Flex'
import Box from '@/components/ui/Box'
import CharacterCard from '../CharacterCard'

import { useKeenSlider } from 'keen-slider/react'

const characteres = [
  {
    title: 'Kratos',
    subtitle: 'Deus da guerra',
    image: '/assets/img/kratos.jpg',
  },
  {
    title: 'Atreus',
    subtitle: 'Filho de kratos',
    image: '/assets/img/atreus.jpg',
  },
  {
    title: 'Mimir',
    subtitle: 'Aliado de Kratos',
    image: '/assets/img/mimir.jpg',
  },
  {
    title: 'Freya',
    subtitle: 'Mãe de baldur',
    image: '/assets/img/freya.jpg',
  },
  {
    title: 'Thor',
    subtitle: 'Filho de Odin',
    image: '/assets/img/thor.jpg',
  },
  {
    title: 'Thyr',
    subtitle: 'Deus da Guerra  da mitologia Nórdica',
    image: '/assets/img/thyr.jpg',
  },
]
export default function SectionCharacter() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(max-width: 1300px)': {
        slides: { perView: 3, spacing: 10 },
      },
      '(max-width: 900px)': {
        slides: { perView: 2, spacing: 10 },
      },
      '(max-width: 570px)': {
        slides: { perView: 1.2, spacing: 0 },
      },
      '(max-width:372px)': {
        slides: { perView: 1, spacing: 0 },
      },
    },
    slides: {
      perView: 4.2,
      spacing: 30,
    },
  })

  return (
    <CharacterSection>
      <Container>
        <SectionCharacterContainer>
          <Box>
            <Flex gap={10} align="center">
              <Image
                src={'/assets/img/bullet.svg'}
                width={10}
                height={10}
                alt="bullet"
              />
              <Text as="span" display="block">
                Conheça os personsagens
              </Text>
            </Flex>

            <Heading size="1xl" marginTop={20}>
              Toda grande aventura é uma história esperando para ser contada
            </Heading>

            <Text color="gray" margin="1.5rem 0 2.5rem 0">
              Reviva o começo da jornada nórdica épica de Kratos e Atreus em
              Mitos de Midgard. Um alerta para quem não está familiarizado com
              God of War: spoilers à frente.
            </Text>
          </Box>

          <Flex gap={20} align="center" wrap>
            <AxImage src={'/assets/img/machado.png'} />
            <ReleaseData>
              <LogoImage src={'/assets/img/logo.png'} alt="santa monica logo" />
              <Text as="span" align="center">
                Lançamento dia 09/11/2022{' '}
              </Text>
            </ReleaseData>
          </Flex>
        </SectionCharacterContainer>
      </Container>

      <div ref={ref} className="keen-slider">
        {characteres.map((character, index) => (
          <div
            className={`keen-slider__slide number-slide${index + 1}`}
            key={'character' + index}
          >
            <CharacterCard
              title={character.title}
              subtitle={character.subtitle}
              src={character.image}
            />
          </div>
        ))}
      </div>
    </CharacterSection>
  )
}
