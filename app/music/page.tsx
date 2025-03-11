"use client";

import {
  Button,
  Card,
  CardFooter,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Image,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";

import tequieroati from "../../public/images/tequieroati2.webp";
import luna from "../../public/images/luna.webp";
import particulas from "../../public/images/particulas.webp";
import taqnf from "../../public/images/taqnf.webp";
import ardll from "../../public/images/ardll.webp";
import galaxias from "../../public/images/galaxias.webp";
import nightingale from "../../public/images/nightingale.webp";
import paisaje from "../../public/images/paisaje.webp";
import luminiscencia from "../../public/images/luminiscencia.webp";
import lenaalfuego from "../../public/images/lenaalfuego.webp";
import tiempodequerer from "../../public/images/tiempodequerer.webp";
import petricor from "../../public/images/petricor.webp";

import { title } from "@/components/primitives";
import { LinksList } from "@/components/linksList";

const songsList = [
  {
    id: 12,
    title: "Luna",
    image: luna.src,
    description: "La luz de tu amor en mi eterna oscuridad.",
    links: [
      {
        label: "Spotify",
        link: "https://open.spotify.com/intl-es/track/1Mj7FYp9wc3qjEVWBjdt55?si=45128da3574f44b2",
        color: "success",
      },
      {
        label: "Youtube Music",
        link: "https://music.youtube.com/watch?v=VJCVHxUpDMo&feature=shared",
        color: "danger",
      },
      {
        label: "Deezer",
        link: "https://dzr.page.link/rBpCqhTM7MLdNnJB6",
        color: "secondary",
      },
      {
        label: "qobuz",
        link: "https://open.qobuz.com/album/p21mo1490rmic",
        color: "default",
      },
    ],
    active: true,
  },
  {
    id: 11,
    title: "Te Quiero A Ti",
    image: tequieroati.src,
    description: "Un eco eterno de deseo y certeza.",
    links: [
      {
        label: "Spotify",
        link: "https://open.spotify.com/intl-es/track/2eGbbEDMUKoGd3ezp4W3E4?si=f587856a076c4d26",
        color: "success",
      },
      {
        label: "Youtube Music",
        link: "https://music.youtube.com/watch?v=V3LidtjtKns&feature=shared",
        color: "danger",
      },
      {
        label: "Deezer",
        link: "https://dzr.page.link/sDgfiTUW42gh4x1aA",
        color: "secondary",
      },
      {
        label: "qobuz",
        link: "https://open.qobuz.com/album/wyclop3sa2yzb",
        color: "default",
      },
    ],
    active: true,
  },
  {
    id: 10,
    title: "Partículas",
    image: particulas.src,
    description: "Fragmentos de un amor que trasciende el tiempo.",
    links: [
      {
        label: "Spotify",
        link: "https://open.spotify.com/album/7KZweZrr93Vu68fJGqX0us?si=TNY9zVAqRk-z0w0wB5P2kQ",
        color: "success",
      },
      {
        label: "Youtube Music",
        link: "https://music.youtube.com/watch?v=sOSnVdYZ67g&feature=shared",
        color: "danger",
      },
      {
        label: "Deezer",
        link: "https://dzr.page.link/EAZvyXLVrs4VwqVV8",
        color: "secondary",
      },
      {
        label: "qobuz",
        link: "https://open.qobuz.com/album/j3qshezo8vp8a",
        color: "default",
      },
    ],
    active: true,
  },
  {
    id: 9,
    title: "Tu Amor Que Nunca Fue - Acoustic Version",
    image: taqnf.src,
    description: "Un susurro al viento, esperando respuesta.",
    links: [
      {
        label: "Spotify",
        link: "https://open.spotify.com/album/008b2824i5JKHGzaeTEdpU?si=rnqTQj5RSY29cupkHisi3A",
        color: "success",
      },
      {
        label: "Youtube Music",
        link: "https://music.youtube.com/watch?v=9cy4UTSgFD0&feature=shared",
        color: "danger",
      },
      {
        label: "Deezer",
        link: "https://dzr.page.link/RQZuMDtTnJ7b7rY29",
        color: "secondary",
      },
      {
        label: "qobuz",
        link: "https://open.qobuz.com/album/evkwf92gvyyac",
        color: "default",
      },
    ],
    active: true,
  },
  {
    id: 8,
    title: "Al Ritmo De La Luz",
    image: ardll.src,
    description: "Un baile eterno entre sombras y estrellas.",
    links: [
      {
        label: "Spotify",
        link: "https://open.spotify.com/album/7akvqvPMKXZD8lKnKTE37h?si=3uN4N0LHTOaQUlFd2dM4Tw",
        color: "success",
      },
      {
        label: "Youtube Music",
        link: "https://music.youtube.com/watch?v=LLkq-KlGgSk&feature=shared",
        color: "danger",
      },
      {
        label: "Deezer",
        link: "https://dzr.page.link/cKGyRNKsCmHjMymHA",
        color: "secondary",
      },
      {
        label: "qobuz",
        link: "https://open.qobuz.com/album/hsfsd07oxmaoc",
        color: "default",
      },
    ],
    active: true,
  },
  {
    id: 7,
    title: "Galaxias",
    image: galaxias.src,
    description: "Dos almas orbitando un destino inevitable.",
    links: [
      {
        label: "Spotify",
        link: "https://open.spotify.com/album/3YElGAGrxkJf9ZVHoN3I02?si=J59mo_XXTO-dbSj91P2gYA",
        color: "success",
      },
      {
        label: "Youtube Music",
        link: "https://music.youtube.com/watch?v=_bndnrufMBI&feature=shared",
        color: "danger",
      },
      {
        label: "Deezer",
        link: "https://dzr.page.link/DT2MXbaydmsZVat28",
        color: "secondary",
      },
      {
        label: "qobuz",
        link: "https://open.qobuz.com/album/hq9z5l4lj78ga",
        color: "default",
      },
    ],
    active: true,
  },
  {
    id: 6,
    title: "Nightingale",
    image: nightingale.src,
    description: "La melodía secreta que solo el alma entiende.",
    links: [
      {
        label: "Spotify",
        link: "https://open.spotify.com/album/1gwHne2KNxHYds3YVGjoyQ?si=mA7BbyYVQbiWL-x6BTiCJQ",
        color: "success",
      },
      {
        label: "Youtube Music",
        link: "https://music.youtube.com/watch?v=FxNg3JGD2w4&feature=shared",
        color: "danger",
      },
      {
        label: "Deezer",
        link: "https://dzr.page.link/fRUMGAFFo7aPuPZj7",
        color: "secondary",
      },
      {
        label: "qobuz",
        link: "https://open.qobuz.com/album/a5xrcl3amke3a",
        color: "default",
      },
    ],
    active: true,
  },
  {
    id: 5,
    title: "Paisaje",
    image: paisaje.src,
    description: "La silueta de tu amor dibujada en el horizonte.",
    links: [
      {
        label: "Spotify",
        link: "https://open.spotify.com/album/5wYMWFsy69a9eTdB61Yt6X?si=E4Q4WnaeTtSK0_inkjdKXw",
        color: "success",
      },
      {
        label: "Youtube Music",
        link: "https://music.youtube.com/watch?v=b84Gur7YUFY&feature=shared",
        color: "danger",
      },
      {
        label: "Deezer",
        link: "https://dzr.page.link/vZpr93bDwpvDjapv6",
        color: "secondary",
      },
      {
        label: "qobuz",
        link: "https://open.qobuz.com/album/m9zziigikd2pb",
        color: "default",
      },
    ],
    active: true,
  },
  {
    id: 4,
    title: "Luminiscencia",
    image: luminiscencia.src,
    description: "Destellos de un amor que nunca deja de brillar.",
    links: [
      {
        label: "Spotify",
        link: "https://open.spotify.com/album/5SBjQelg4jZb7gU5ZbuXxA?si=HGhCWNl-QvOAmpdpSAbqpg",
        color: "success",
      },
      {
        label: "Youtube Music",
        link: "https://music.youtube.com/watch?v=Bo7X_G6WEgI&feature=shared",
        color: "danger",
      },
      {
        label: "Deezer",
        link: "https://dzr.page.link/5WsgiqSSaTG2ca9m7",
        color: "secondary",
      },
      // {
      //   label: "qobuz",
      //   link: "https://open.qobuz.com/album/wyclop3sa2yzb",
      //   color: "default",
      // },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Leña Al Fuego",
    image: lenaalfuego.src,
    description: "Un incendio de pasión que devora el tiempo.",
    links: [
      {
        label: "Spotify",
        link: "https://open.spotify.com/album/15jLxjem402oC1CqwmaYE5?si=VGSPmrh2SjeoIN9Ko62VGw",
        color: "success",
      },
      {
        label: "Youtube Music",
        link: "https://music.youtube.com/watch?v=cw8eMB0ie0Y&feature=shared",
        color: "danger",
      },
      {
        label: "Deezer",
        link: "https://dzr.page.link/pxCDsN754MbK47qA9",
        color: "secondary",
      },
      // {
      //   label: "qobuz",
      //   link: "https://open.qobuz.com/album/wyclop3sa2yzb",
      //   color: "default",
      // },
    ],
    active: true,
  },
  {
    id: 2,
    title: "Tiempo De Querer",
    image: tiempodequerer.src,
    description: "Un amor que florece en el instante perfecto.",
    links: [
      {
        label: "Spotify",
        link: "https://open.spotify.com/album/2Mhs7SUNynimGufspDXaMs?si=PBm8ZvlrS-uMZqic5R5ojg",
        color: "success",
      },
      {
        label: "Youtube Music",
        link: "https://music.youtube.com/watch?v=gdreQ0eDPhQ&feature=shared",
        color: "danger",
      },
      {
        label: "Deezer",
        link: "https://dzr.page.link/whZB2FTru9APzRzk8",
        color: "secondary",
      },
      // {
      //   label: "qobuz",
      //   link: "https://open.qobuz.com/album/wyclop3sa2yzb",
      //   color: "default",
      // },
    ],
    active: true,
  },
  {
    id: 1,
    title: "Petricor",
    image: petricor.src,
    description: "La nostalgia perfumada de un amor bajo la lluvia.",
    links: [
      {
        label: "Spotify",
        link: "https://open.spotify.com/album/7BoBjCLhn4BXvA0CaBhW2a?si=QGuiumz2QNSM5QB81Qo8GA",
        color: "success",
      },
      {
        label: "Youtube Music",
        link: "https://music.youtube.com/watch?v=eRC-ShjdU9A&feature=shared",
        color: "danger",
      },
      {
        label: "Deezer",
        link: "https://dzr.page.link/hAM5oakgjAfoUeSX7",
        color: "secondary",
      },
      // {
      //   label: "qobuz",
      //   link: "https://open.qobuz.com/album/wyclop3sa2yzb",
      //   color: "default",
      // },
    ],
    active: true,
  },
];

export default function MusicPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentSong, setCurrentSong] = useState<any>();

  return (
    <>
      <div className="text-center w-full my-4 md:my-10">
        <h1 className={title()}>Música</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 md:px-16">
        {songsList.length &&
          songsList.map((song, index) => {
            return (
              <Card
                key={index}
                isFooterBlurred
                className="border-none"
                radius="lg"
              >
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={250}
                  src={song.image}
                  width={250}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-white/80" style={{textShadow: '1px 0 lightgray'}}>
                    {song.title.length ? song.title : "Próximamente"}
                  </p>
                  <Button
                    className="text-tiny text-white bg-black/20"
                    color="default"
                    radius="lg"
                    size="sm"
                    variant="flat"
                    onPress={() => {
                      onOpen();
                      setCurrentSong(song);
                    }}
                  >
                    {song.active ? "Ver más" : "Próximamente"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
      </div>
      <Drawer
        backdrop={"transparent"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                {currentSong.title}
              </DrawerHeader>
              <DrawerBody className={"flex items-center justify-start"}>
                <Image
                  alt={currentSong.title}
                  className="object-cover"
                  height={250}
                  src={currentSong.image}
                  width={250}
                />
                <p>{currentSong.description}</p>
                {currentSong.links.length > 0 ? (
                  currentSong.links.map(
                    (
                      element: { label: string; color: any; link: string },
                      index: number,
                    ) => {
                      return (
                        <LinksList
                          key={index}
                          color={element.color}
                          label={element.label}
                          link={element.link}
                        />
                      );
                    },
                  )
                ) : (
                  <p>Próximamente</p>
                )}
              </DrawerBody>
              <DrawerFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
