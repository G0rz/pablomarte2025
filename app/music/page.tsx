"use client";

import {
  Button,
  Card,
  CardFooter,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Image,
  Tooltip,
  useDisclosure,
} from "@heroui/react";
import {useState} from "react";


import tequieroati from "../../public/images/pablo_marte_tequieroati2.webp";
import luna from "../../public/images/pablo_marte_luna.webp";
import particulas from "../../public/images/pablo_marte_particulas.webp";
import taqnf from "../../public/images/pablo_marte_taqnf.webp";
import ardll from "../../public/images/pablo_marte_ardll.webp";
import galaxias from "../../public/images/pablo_marte_galaxias.webp";
import nightingale from "../../public/images/pablo_marte_nightingale.webp";
import paisaje from "../../public/images/pablo_marte_paisaje.webp";
import luminiscencia from "../../public/images/pablo_marte_luminiscencia.webp";
import lenaalfuego from "../../public/images/pablo_marte_lenaalfuego.webp";
import tiempodequerer from "../../public/images/pablo_marte_tiempodequerer.webp";
import petricor from "../../public/images/pablo_marte_petricor.webp";

import {title} from "@/components/primitives";
import {LinksList} from "@/components/linksList";
import {AngleLeftIcon} from "@/components/icons";
import ShinyText from "@/components/ShinyText";

const songsList = [
  {
    id: 12,
    title: "Luna",
    image: luna.src,
    description: 'Es la canción más íntima que he escrito, la que más me desnuda el alma y me hace sentir vulnerable. En sus versos escondí su nombre, como un secreto que solo ella conoce, para que siempre sepa que es para ella a quien siempre estuve esperando…',
    links: [
      {
        label: "Apple Music",
        link: "https://music.apple.com/mx/album/luna-single/1778749802",
        color: "danger",
      },{
        label: "Spotify",
        link: "https://open.spotify.com/intl-es/track/1Mj7FYp9wc3qjEVWBjdt55?si=45128da3574f44b2",
        color: "success",
      },{
        label: "Amazon Music",
        link: "https://music.amazon.com.mx/albums/B0DMF2VPZJ?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_tfl8IVRTl1Yy2GK0n3iiHzuKF",
        color: "default",
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
      }
    ],
    active: true,
  },
  {
    id: 11,
    title: "Te Quiero A Ti",
    image: tequieroati.src,
    description: 'Deje morir la idea por muchos años por falta de inspiración, al no encontrar el amor, pero recobro vida al sentir que podia volverme a enamorar y confiar...',
    links: [
      {
        label: "Apple Music",
        link: "https://music.apple.com/mx/album/te-quiero-a-ti/1753498529?i=1753498530",
        color: "danger",
      },{
        label: "Spotify",
        link: "https://open.spotify.com/intl-es/track/2eGbbEDMUKoGd3ezp4W3E4?si=f587856a076c4d26",
        color: "success",
      },{
        label: "Amazon Music",
        link: "https://music.amazon.com.mx/albums/B0D7SYWBNW?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_BTthKgi5m4RitjELwPmCYaFGy",
        color: "default",
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
    description: 'Nada me salía bien, me enfermé, me llovían criticas por todos lados, pase de ser productivo a sentir que no avanzaba, me canse de lo malo del mundo que me quería morir…',
    links: [
      {
        label: "Apple Music",
        link: "https://music.apple.com/mx/album/part%C3%ADculas/1746538885?i=1746538886",
        color: "danger",
      },{
        label: "Spotify",
        link: "https://open.spotify.com/album/7KZweZrr93Vu68fJGqX0us?si=TNY9zVAqRk-z0w0wB5P2kQ",
        color: "success",
      },{
        label: "Amazon Music",
        link: "https://music.amazon.com.mx/albums/B0D47RTR6C?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_S8QH1YMqX2PrDl5e1hEsSzVkx",
        color: "default",
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
    description: 'Soñaba con encontrar a esa persona que me hiciera sentir único, que me dijera con sus palabras lo que yo escribí en esta canción. Alguien que me hiciera sentir que valía la pena esperar…',
    links: [
      {
        label: "Apple Music",
        link: "https://music.apple.com/mx/album/tu-amor-que-nunca-fue-acoustic-version/1746568563?i=1746568565",
        color: "danger",
      },{
        label: "Spotify",
        link: "https://open.spotify.com/album/008b2824i5JKHGzaeTEdpU?si=rnqTQj5RSY29cupkHisi3A",
        color: "success",
      },{
        label: "Amazon Music",
        link: "https://music.amazon.com.mx/albums/B0D481Y868?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_EC2NTClWD2JOxD2OQJ8OaDUuS",
        color: "default",
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
    description: 'La escribí para aplicar a una maestría de composición, me aceptaron pero no tuve dinero para pagar así que todo lo que quedó fue ese sueño, guardado en las notas de esta canción.',
    links: [
      {
        label: "Apple Music",
        link: "https://music.apple.com/mx/album/al-ritmo-de-la-luz/1746567063?i=1746567065",
        color: "danger",
      },{
        label: "Spotify",
        link: "https://open.spotify.com/album/7akvqvPMKXZD8lKnKTE37h?si=3uN4N0LHTOaQUlFd2dM4Tw",
        color: "success",
      },{
        label: "Amazon Music",
        link: "https://music.amazon.com.mx/albums/B0D47ZK47F?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_TeYucmNyLafdzMVcZTm6ymoN2",
        color: "default",
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
    description: 'La canción mas romántica que he hecho, cuando la escribí, me imaginé cantándosela a esa persona especial (ficticia) el día de mi boda. Es un pedacito de mi corazón convertido en melodía…',
    links: [
      {
        label: "Apple Music",
        link: "https://music.apple.com/mx/album/galaxias/1746567714?i=1746567715",
        color: "danger",
      },{
        label: "Spotify",
        link: "https://open.spotify.com/album/3YElGAGrxkJf9ZVHoN3I02?si=J59mo_XXTO-dbSj91P2gYA",
        color: "success",
      },{
        label: "Amazon Music",
        link: "https://music.amazon.com.mx/albums/B0D47ZYSPC?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_8acVlItNJRaVJc8F8TkSoxIvG",
        color: "default",
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
    description: 'Siempre he pensado que atraes lo que eres, esta canción es mi carta al universo, una plegaria para que la vida me devuelva lo que he sembrado…',
    links: [
      {
        label: "Apple Music",
        link: "https://music.apple.com/mx/album/nightingale/1746568259?i=1746568261",
        color: "danger",
      },{
        label: "Spotify",
        link: "https://open.spotify.com/album/1gwHne2KNxHYds3YVGjoyQ?si=mA7BbyYVQbiWL-x6BTiCJQ",
        color: "success",
      },{
        label: "Amazon Music",
        link: "https://music.amazon.com.mx/albums/B0D47XHS7Y?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_vlPMbOjCSm4WXN3GttlYZQKRZ",
        color: "default",
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
    description: 'Me cuesta mucho confiar en alguien, aunque nunca he querido admitirlo. Me aferré a la idea de que el amor todo lo puede, incluso cuando te sientes sentimentalmente solo y descalzo, caminando por el mundo…',
    links: [
      {
        label: "Apple Music",
        link: "https://music.apple.com/mx/album/paisaje/1746567241?i=1746567243",
        color: "danger",
      },{
        label: "Spotify",
        link: "https://open.spotify.com/album/5wYMWFsy69a9eTdB61Yt6X?si=E4Q4WnaeTtSK0_inkjdKXw",
        color: "success",
      },{
        label: "Amazon Music",
        link: "https://music.amazon.com.mx/albums/B0D47TLQMK?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_j8DDaH6IEdd4bRQ5PyZptlKu7",
        color: "default",
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
    description: 'Me cuesta mucho superar el pasado, la escribí cuando un amigo me contó la historia de su ex, pero terminó siendo también mi historia. Una forma de intentar que mis errores y mis heridas no sigan lastimando mi presente…',
    links: [
      {
        label: "Apple Music",
        link: "https://music.apple.com/mx/album/luminiscencia/1746568512?i=1746568514",
        color: "danger",
      },{
        label: "Spotify",
        link: "https://open.spotify.com/album/5SBjQelg4jZb7gU5ZbuXxA?si=HGhCWNl-QvOAmpdpSAbqpg",
        color: "success",
      },{
        label: "Amazon Music",
        link: "https://music.amazon.com.mx/albums/B0D47ZTPW9?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_XRBO2QbNVsfhk8FBvrXt26ESc",
        color: "default",
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
    description: 'Desde que empece a ser mas consciente de la vida siento una presión constante: el tiempo no me alcanza para todo lo que quiero hacer. Pero también he aprendido que lo más importante es disfrutar lo que se tiene, porque somos como un fuego que, tarde o temprano, se apagará…',
    links: [
      {
        label: "Apple Music",
        link: "https://music.apple.com/mx/album/le%C3%B1a-al-fuego/1746569279?i=1746569284",
        color: "danger",
      },{
        label: "Spotify",
        link: "https://open.spotify.com/album/15jLxjem402oC1CqwmaYE5?si=VGSPmrh2SjeoIN9Ko62VGw",
        color: "success",
      },{
        label: "Amazon Music",
        link: "https://music.amazon.com.mx/albums/B0D47YXLH9?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_KAMS6ClNlrzpqLdkQtKpgAXEL",
        color: "default",
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
    description: 'Los años mas felices de mi vida fueron los de mi infancia. No recuerdo haberme sentido tan amado como cuando vivía con mis abuelitos. Creo que, gracias a ellos, soy la persona que soy hoy.',
    links: [
      {
        label: "Apple Music",
        link: "https://music.apple.com/mx/album/tiempo-de-querer/1746568774?i=1746568775",
        color: "danger",
      },{
        label: "Spotify",
        link: "https://open.spotify.com/album/2Mhs7SUNynimGufspDXaMs?si=PBm8ZvlrS-uMZqic5R5ojg",
        color: "success",
      },{
        label: "Amazon Music",
        link: "https://music.amazon.com.mx/albums/B0D47ZQ2X9?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_Qjy5zlplIKgQCDiP010FclFPY",
        color: "default",
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
    description: 'Sobrepensar es mi superpoder, Desde muy joven, reflexionar sobre la vida se convirtió en mi vicio. Querer ir más allá de lo terrenal y superficial se hizo una necesidad, pero me costó entender que para lograrlo se necesita un equilibrio entre el cuerpo y el alma. Solo así se encuentra la felicidad real. Así que trato de llevarme las cosas con mas calma…',
    links: [
      {
        label: "Apple Music",
        link: "https://music.apple.com/mx/album/petricor/1746569375?i=1746569376",
        color: "danger",
      },{
        label: "Spotify",
        link: "https://open.spotify.com/album/7BoBjCLhn4BXvA0CaBhW2a?si=QGuiumz2QNSM5QB81Qo8GA",
        color: "success",
      },{
        label: "Amazon Music",
        link: "https://music.amazon.com.mx/albums/B0D47ZY6CQ?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=MX&ref=dm_sh_kqWGLjIN2sKUGqXI9YChW8wJw",
        color: "default",
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
        {/*<div className="w-full flex flex-col">*/}
        {/*  <div><p>View: </p></div>*/}
        {/*  <div><Button isIconOnly>List</Button>*/}
        {/*    <Button isIconOnly>Grid</Button></div>*/}
        {/*</div>*/}
        {songsList.length &&
          songsList.map((song, index) => {
            return (
              <Card
                key={index}
                isFooterBlurred
                className="border-none flex w-2/3 md:w-1/5 relative"
                radius="lg"
              >
                {songsList[index] === songsList[0] ? <div
                    className="absolute top-4 -left-8 -rotate-45 z-10 w-28 bg-primary text-center font-bold">
                  <ShinyText className='' disabled={false} speed={3} text='NEW'/></div> : null}
                <Button
                    className="border-none size-full p-0"
                    variant="ghost"
                    onPress={() => {
                      onOpen();
                      setCurrentSong(song);
                    }}
                >
                  {song.active ? <Image
                      alt={`Pablo Marte - ${song.title}`}
                      src={song.image}
                      isZoomed={true}
                  /> : "Próximamente"}
                </Button>
                <CardFooter
                    className="font-bold justify-center bg-[#121212]/30 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 py-2 z-10">
                  <p className="text-tiny text-white/90">
                    {song.title.length ? song.title : "Próximamente"}
                  </p>
                </CardFooter>
              </Card>
            );
          })}
      </div>
      <Drawer backdrop={"blur"} isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton={true} radius={"none"}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>
                <div className="w-full flex flex-wrap items-center justify-start text-center py-4">
                  <Tooltip content="Close">
                    <Button
                        isIconOnly
                        className="flex w-1/12"
                        size="sm"
                        variant="light"
                        onPress={onClose}
                    >
                      <AngleLeftIcon/>
                    </Button>
                  </Tooltip>
                  <div className="flex w-10/12 text-center items-center justify-center">{currentSong.title}</div>
                </div>
              </DrawerHeader>
              <DrawerBody className="flex items-center justify-start">
                <Image
                  alt={currentSong.title}
                  className="object-cover"
                  height={250}
                  src={currentSong.image}
                  width={250}
                />
                <q className="my-2 italic">{currentSong.description}</q>
                <p className="font-bold mr-auto">Escúchalo en tu plataforma preferida:</p>
                <div className="w-full flex flex-wrap items-center justify-start mb-4">
                {currentSong.links.length > 0 ? (
                  currentSong.links.map(
                    (
                        element: { label: string; color: any; link: string, icon: any },
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
                    },)) : (
                  <p>Próximamente</p>
                )}
                </div>
              </DrawerBody>
              {/*<DrawerFooter>*/}
              {/*  <Button color="primary" variant="light" onPress={onClose}>*/}
              {/*    Cerrar*/}
              {/*  </Button>*/}
              {/*</DrawerFooter>*/}
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
