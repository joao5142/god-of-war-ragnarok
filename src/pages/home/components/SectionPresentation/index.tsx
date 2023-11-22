import Container from '@/components/wrappers/Container'
import {
  SectionPresentation as PresentationSection,
  KratosAtreusImage,
  SectionPresentationTextContainer,
  SectionPresentationContainer,
} from './styles'
import Flex from '@/components/ui/Flex'
import Image from 'next/image'
import Text from '@/components/ui/Text'
import Box from '@/components/ui/Box'
import Heading from '@/components/ui/Heading'
export default function SectionPresentation() {
  return (
    <PresentationSection>
      <Container>
        <SectionPresentationContainer>
          <SectionPresentationTextContainer>
            <Flex gap={10} align="center">
              <Image
                src={'/assets/img/bullet.svg'}
                width={10}
                height={10}
                alt="bullet"
              />
              <Text as="span" display="block">
                Sony Interactive Entertainment
              </Text>
            </Flex>

            <Heading size="1xl" marginTop={20} paddingRight={100}>
              Embarque com Kratos e Atreus em uma jornada épica{' '}
            </Heading>

            <Text color="gray" margin="1.5rem 0 2.5rem 0">
              O Fimbulwinter já começou. Kratos e Atreus devem viajar pelos Nove
              Reinos em busca de respostas enquanto as forças asgardianas se
              preparam para uma batalha profetizada que causará o fim do mundo.
              Nessa jornada, eles explorarão paisagens míticas impressionantes e
              enfrentarão inimigos aterradores: deuses nórdicos e monstros. A
              ameaça do Ragnarök se aproxima. Kratos e Atreus terão de escolher
              entre a segurança deles próprios e a dos reinos.
            </Text>

            <Box>
              <Flex gap={40} align="center">
                <Image
                  src={'/assets/img/santa-monica.png'}
                  width={150}
                  height={60}
                  alt="santa monica logo"
                />
                <Text color="gray">
                  Do Santa Monica Studio, esta é a sequência da aclamada versão
                  de 2018 de God of War.{' '}
                </Text>
              </Flex>
            </Box>
          </SectionPresentationTextContainer>

          <KratosAtreusImage
            src={'/assets/img/kratos-atreus.png'}
            alt="bullet"
          />
        </SectionPresentationContainer>
      </Container>
    </PresentationSection>
  )
}
