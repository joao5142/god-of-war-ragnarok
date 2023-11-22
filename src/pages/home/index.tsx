import Container from '@/components/wrappers/Container'
import { Header, HeaderContent, PlatformButton, InfosContainer } from './styles'

import Image from 'next/image'
import Text from '@/components/ui/Text'

import Flex from '@/components/ui/Flex'
import Box from '@/components/ui/Box'
import SectionHero from './components/SectionHero'
import SectionPresentation from './components/SectionPresentation'
import SectionCharacter from './components/SectionCharacter'
import CharacterCard from './components/CharacterCard/index'

export default function Home() {
  return (
    <div>
      <>
        <Header>
          <Container>
            <HeaderContent>
              <Image
                src={'/assets/img/sony.svg'}
                width={40}
                height={40}
                alt="logo sony"
              />

              <Flex justify="center">
                <Image
                  src={'/assets/img/logo.png'}
                  width={190}
                  height={50}
                  alt="logo god of war"
                />
              </Flex>
              <Flex align="center" gap={20} justify="flex-end" wrap>
                <Text as="span" color="white">
                  Disponivel para
                </Text>

                <Flex gap={10}>
                  <PlatformButton>PS4</PlatformButton>
                  <PlatformButton>PS5</PlatformButton>
                </Flex>
              </Flex>
            </HeaderContent>
          </Container>
        </Header>
        <main>
          <SectionHero />

          <section>
            <Container>
              <Box padding="3rem 0">
                <InfosContainer>
                  <Flex
                    direction="column"
                    gap={12}
                    align="center"
                    justify="center"
                  >
                    <Image
                      src="/assets/img/jogo-offline.png"
                      width={35}
                      height={35}
                      alt="offline"
                    />
                    <Text as="span" color="gray">
                      Jogo offline habilitado
                    </Text>
                  </Flex>

                  <Flex
                    direction="column"
                    gap={10}
                    align="center"
                    justify="center"
                  >
                    <Image
                      src="/assets/img/single-player.png"
                      width={35}
                      height={35}
                      alt="single player"
                    />
                    <Text as="span" color="gray">
                      1 jogador
                    </Text>
                  </Flex>

                  <Flex
                    direction="column"
                    gap={10}
                    align="center"
                    justify="center"
                  >
                    <Image
                      src="/assets/img/remote.png"
                      width={35}
                      height={35}
                      alt="single player"
                    />
                    <Text as="span" color="gray">
                      Compatível com uso remoto
                    </Text>
                  </Flex>

                  <Flex
                    direction="column"
                    gap={10}
                    align="center"
                    justify="center"
                  >
                    <Image
                      src="/assets/img/vibration.png"
                      width={35}
                      height={35}
                      alt="vibracao"
                    />
                    <Text as="span" color="gray">
                      Função de vibração necessária
                    </Text>
                  </Flex>

                  <Flex
                    direction="column"
                    gap={10}
                    align="center"
                    justify="center"
                  >
                    <Image
                      src="/assets/img/gatilho.png"
                      width={35}
                      height={35}
                      alt="gatilho controle"
                    />
                    <Text as="span" color="gray">
                      Efeito gatilho necessário
                    </Text>
                  </Flex>

                  <Flex
                    direction="column"
                    gap={10}
                    align="center"
                    justify="center"
                  >
                    <Image
                      src="/assets/img/plus.png"
                      width={35}
                      height={35}
                      alt="icone de + com uma lampada"
                    />
                    <Text as="span" color="gray">
                      Compatível com a ajuda do jogo
                    </Text>
                  </Flex>
                </InfosContainer>
              </Box>
            </Container>
          </section>

          <SectionPresentation />

          <SectionCharacter />
        </main>
      </>
    </div>
  )
}
