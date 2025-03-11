"use client";

import {Button, Image, Link, useDisclosure} from "@heroui/react";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader,} from "@heroui/modal";

import bio from "../public/images/bio.webp";
import tequieroati from "../public/images/tequieroati.webp";
import contact from "../public/images/contact.webp";
import traveling from "../public/images/traveling.webp";

import SplitText from "@/components/splitText";
import FadeContent from "@/components/fadeContent";
import {ArrowRightIcon} from "@/components/icons";
import {LinksList} from "@/components/linksList";

export default function Home() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const links = [
    {
      label: "Spotify",
      link: "https://open.spotify.com/intl-es/track/2eGbbEDMUKoGd3ezp4W3E4?si=6bb9ceb2f5784056",
      color: "success",
    },
    {
      label: "Youtube Music",
      link: "https://music.youtube.com/playlist?list=OLAK5uy_nyeqBwhqzirCzKi5U3j8yhBmAnAwfeS84&feature=shared",
      color: "danger",
    },
    {
      label: "Deezer",
      link: "https://dzr.page.link/abMmAa34Hausb7ht8",
      color: "secondary",
    },
    {
      label: "qobuz",
      link: "https://open.qobuz.com/album/wyclop3sa2yzb",
      color: "default",
    },
  ];

  return (
      <section className="flex flex-col items-center justify-center gap-4">
        <h1>
          <SplitText
              animationFrom={{opacity: 0, transform: "translate3d(0,50px,0)"}}
              animationTo={{opacity: 1, transform: "translate3d(0,0,0)"}}
              className="font-normal text-4xl md:text-9xl text-center"
              delay={150}
              rootMargin="-50px"
              text="Pablo Marte"
              threshold={0.5}
          />
        </h1>
        <hr className=" dark:bg-white w-full my-4 md:my-10"/>
        <div className="w-full flex flex-wrap justify-center items-center py-2 md:py-10">
          <FadeContent
              blur={false}
              className="w-full md:w-1/2 flex flex-wrap md:flex-col justify-center items-center px-8 md:px-10"
              duration={2000}
              easing="ease-out"
              initialOpacity={0}
          >
            <div className="flex">
              <p className="font-normal text-lg md:text-[18px] md:px-10">
                Pablo Marte es un artista musical mexicano de 27 años que se ha
                destacado en la escena indie pop y alternativa. Su carrera musical
                comenzó de forma casual, pero pronto descubrió su pasión por la
                composición de canciones. Con un enfoque en letras introspectivas
                y melodías suaves, Marte ha logrado resonar con un público amplio,
                creando un estilo que combina elementos poéticos y sonoros que
                evocan emociones profundas.
              </p>
            </div>
            <div className="flex">
              <Button
                  as={Link}
                  className="my-6 w-full"
                  color="default"
                  href="https://www.youtube.com/watch?v=BOaXHL09ROk&feature=youtu.be"
                  isExternal={true}
                  size="lg"
                  variant="faded"
              >
                Mira &#34;Galaxias&#34;, el video más reciente <ArrowRightIcon/>
              </Button>
            </div>
          </FadeContent>
          <div className="w-full md:w-1/2 flex px-8 md:px-10">
            <Image
                alt="Travel with a song in the soul"
                className="object-contain"
                radius="none"
                src={bio.src}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <video autoPlay loop muted>
            <source src="/videos/Galaxias.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center py-2 md:py-10">
          <FadeContent
              blur={false}
              className="w-full md:w-1/2 flex flex-wrap md:flex-col justify-center items-center px-8 md:px-10"
              duration={1500}
              easing="ease-out"
              initialOpacity={0}
          >
            <div className="flex text-center">
              <h2 className="text-3xl md:text-5xl mb-6 md:mb-8">
                SINGLE MÁS RECIENTE
              </h2>
            </div>
            <div className="flex mb-4 md:mb-6">
              <q className="font-normal text-lg md:text-[18px] md:mx-10">
                Esta canción es una celebración del amor auténtico y el compromiso. Las letras transmiten un mensaje
                optimista sobre la conexión entre dos personas. La melodía es alegre y contagiosa, perfecta para los
                momentos de felicidad compartida.
              </q>
            </div>
            <div className="flex w-1/2 md:w-1/3">
              <Image
                  alt="Te quiero a ti cover image"
                  className="object-contain"
                  isBlurred={true}
                  radius="none"
                  src={tequieroati.src}
              />
            </div>
            <div className="flex">
              <Button
                  className="w-fit my-6"
                  color="default"
                  size="lg"
                  variant="faded"
                  onPress={onOpen}
              >
                Escucha &#34;Te Quiero a Ti&#34;
                <ArrowRightIcon/>
              </Button>
            </div>
          </FadeContent>
          <div className="w-full md:w-1/2 flex px-8 md:px-10">
            <Image
                alt="Viajando con una cancion en el corazon"
                className="object-contain"
                radius="none"
                src={traveling.src}
            />
          </div>
        </div>
        <div className="bg-foreground text-background w-full flex flex-wrap items-center justify-center text-center">
          <div className="w-full md:w-1/2 min-h-[40vh] flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold md:text-5xl w-full">Contáctame</h3>
            <Link
                className={"text-background text-2xl underline mt-8"}
                href={"mailto:pablo.marte37@gmail.com"}
                isExternal={true}
            >
              pablo.marte37@gmail.com
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative">
            <Image
                alt="Viajando con una cancion en el corazon"
                className="object-contain"
                radius="none"
                src={contact.src}
            />
          </div>
        </div>
        <Modal isOpen={isOpen} placement={"auto"} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-center">
                    Escúchalo en tu plataforma preferida
                  </ModalHeader>
                  <ModalBody className="flex flex-col items-center justify-center text-center">
                    {links.length > 0 ? (
                        links.map((element) => {
                          return (
                              <LinksList
                                  key={element.label}
                                  color={element.color}
                                  label={element.label}
                                  link={element.link}
                              />
                          );
                        })
                    ) : (
                        <p>Próximamente</p>
                    )}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
            )}
          </ModalContent>
        </Modal>
      </section>
  );
}
