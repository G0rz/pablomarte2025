"use client";

import { Button, Image, Link, useDisclosure } from "@heroui/react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/modal";

import SplitText from "@/components/SplitText";
import FadeContent from "@/components/FadeContent";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h1>
        <SplitText
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          className="font-normal text-6xl md:text-9xl"
          delay={150}
          rootMargin="-50px"
          text="Pablo Marte"
          threshold={0.5}
        />
      </h1>
      <hr className=" dark:bg-white w-full my-4 md:my-10" />
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
              className="w-fit my-6"
              color="default"
              href="https://www.youtube.com/watch?v=BOaXHL09ROk&feature=youtu.be"
              isExternal={true}
              size="lg"
              variant="ghost"
            >
              Mira &#34;Galaxias&#34; el video mas reciente &rarr;
            </Button>
          </div>
        </FadeContent>
        <div className="w-full md:w-1/2 flex px-8 md:px-10">
          <Image
            alt="Travel with a song in the soul"
            radius="none"
            src={"/bio.png"}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <video autoPlay loop muted>
          <source src="/Galaxias.mp4" type="video/mp4" />
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
          <div className="flex">
            <h2 className="text-3xl md:text-5xl mb-6 md:mb-8">
              SINGLE MAS RECIENTE
            </h2>
          </div>
          <div className="flex mb-4 md:mb-6">
            <q className="font-normal text-lg md:text-[18px] md:mx-10">
              Esta canción es una celebración del amor auténtico y el
              compromiso. Las letras transmiten un mensaje optimista sobre la
              conexión entre dos personas. La melodía es alegre y contagiosa,
              perfecta para momentos de felicidad compartida.
            </q>
          </div>
          <div className="flex w-1/2 md:w-1/3 mb-4 md:mb-6">
            <Image
              alt="Travel with a song in the soul"
              radius="none"
              src={"/tequieroati.png"}
            />
          </div>
          <div className="flex">
            <Button
              className="w-fit my-6"
              color="default"
              size="lg"
              variant="ghost"
              onPress={onOpen}
            >
              Escucha &#34;Te Quiero A Ti&#34; &rarr;
            </Button>
          </div>
        </FadeContent>
        <div className="w-full md:w-1/2 flex px-8 md:px-10">
          <Image
            alt="Travel with a song in the soul"
            radius="none"
            src={"/newest.jpg"}
          />
        </div>
      </div>
      <div
        className="bg-black dark:bg-white text-white dark:text-black  w-full flex flex-wrap items-center justify-center text-center">
        <div className="w-full md:w-1/2 min-h-[30vh]">
          <h3 className="text-3xl md:text-5xl py-8">Contactame</h3>
          <Link className={'text-white dark:text-black'} href={"mailto:pablo.marte37@gmail.com"}
                isExternal={true}> pablo.marte37@gmail.com</Link>
        </div>
        <div className="w-full md:w-1/2 flex">
          <Image
            alt="Travel with a song in the soul"
            radius="none"
            src={"/contact.webp"}
          />
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        placement={"auto"}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Escúchalo en tu plataforma preferida
              </ModalHeader>
              <ModalBody className="flex flex-col gap-1 text-center">
                <p>Cooming Soon</p>
                {/*<ListboxWrapper>*/}
                {/*  <Listbox aria-label="Listbox menu with icons" variant="faded">*/}
                {/*    <ListboxItem*/}
                {/*      key="new"*/}
                {/*      startContent={<AddNoteIcon className={iconClasses} />}*/}
                {/*    >*/}
                {/*      New file*/}
                {/*    </ListboxItem>*/}
                {/*    <ListboxItem*/}
                {/*      key="copy"*/}
                {/*      startContent={*/}
                {/*        <CopyDocumentIcon className={iconClasses} />*/}
                {/*      }*/}
                {/*    >*/}
                {/*      Copy link*/}
                {/*    </ListboxItem>*/}
                {/*    <ListboxItem*/}
                {/*      key="edit"*/}
                {/*      showDivider*/}
                {/*      startContent={*/}
                {/*        <EditDocumentIcon className={iconClasses} />*/}
                {/*      }*/}
                {/*    >*/}
                {/*      Edit file*/}
                {/*    </ListboxItem>*/}
                {/*    <ListboxItem*/}
                {/*      key="delete"*/}
                {/*      className="text-danger"*/}
                {/*      color="danger"*/}
                {/*      startContent={*/}
                {/*        <DeleteDocumentIcon*/}
                {/*          className={cn(iconClasses, "text-danger")}*/}
                {/*        />*/}
                {/*      }*/}
                {/*    >*/}
                {/*      Delete file*/}
                {/*    </ListboxItem>*/}
                {/*  </Listbox>*/}
                {/*</ListboxWrapper>*/}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
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
