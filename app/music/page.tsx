"use client"

import {Button, Card, CardFooter, Image, useDisclosure} from "@heroui/react";
import tequieroati from "../../public/images/tequieroati.webp";

import {title} from "@/components/primitives";
import {LinksList} from "@/components/linksList";
import {SetStateAction, useState} from "react";
import {CustomDrawer} from "@/components/customDrawer";

const songsList = [{
  title: 'Te Quiero A Ti',
  image: tequieroati.src,
  description: "Esta canción es una celebración del amor auténtico y el compromiso. Las letras transmiten un mensaje optimista sobre la conexión entre dos personas. La melodía es alegre y contagiosa, perfecta para los momentos de felicidad compartida.",
  links: [
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
  ], active: true
}]

export default function MusicPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
      <>
      <div className="text-center w-full my-4 md:my-10">
          <h1 className={title()}>Canciones</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {songsList.length && songsList.map((song, index) => {
            return <Card isFooterBlurred className="border-none" radius="lg" key={index}>
              <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={250}
                  width={250}
                  src={song.image}
              />
              <CardFooter
                  className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{song.title.length ? song.title : 'Próximamente'}</p>
                <Button
                    className="text-tiny text-white bg-black/20"
                    color="default"
                    radius="lg"
                    size="sm"
                    variant="flat"
                    onPress={onOpen}
                >
                  {song.active ? 'Ver más' : 'Próximamente'}
                </Button>
                <CustomDrawer isOpen={isOpen} onOpenChange={onOpenChange} song={song}/>
              </CardFooter>
            </Card>
          })}
        </div>
      </>
  );
}
