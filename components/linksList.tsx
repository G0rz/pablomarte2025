import {Button, Link} from "@heroui/react";
import {FC} from "react";
import {AmazonMusicIcon, AppleMusicIcon, DeezerIcon, QobuzIcon, SpotifyIcon, YoutubeMusicIcon} from "@/components/icons";

export interface LinksListProps {
    label: string,
    link: string,
    color: any
}

export const LinksList: FC<LinksListProps> = ({label, link, color}) => {

    const theme = localStorage.getItem('theme')


    return <div className="w-1/5 h-[100px] flex flex-col items-center justify-center text-center">
        <Button aria-label={label} as={Link} className="rounded-full" color={color} href={link} isExternal={true}
                isIconOnly={true}>
            {label === "Spotify" ? <SpotifyIcon/> :
                label === "Youtube Music" ? <YoutubeMusicIcon/> :
                label === "Apple Music" ? <AppleMusicIcon/> :
                    label === "Deezer" ? <DeezerIcon/> :
                        label === "qobuz" ? <QobuzIcon/> :
                        label === "Amazon Music" ? <AmazonMusicIcon color={theme === 'dark' ? 'black': '#25D3DA'}/> :
                            null}
        </Button>
        <span className="text-tiny font-bold h-1/4 mt-2">{label}</span>
    </div>
}