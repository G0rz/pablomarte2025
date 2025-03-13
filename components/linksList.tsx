import {Button, Link} from "@heroui/react";
import {FC} from "react";
import {DeezerIcon, QobuzIcon, SpotifyIcon, YoutubeMusicIcon} from "@/components/icons";

export interface LinksListProps {
    label: string,
    link: string,
    color: any
}

export const LinksList: FC<LinksListProps> = ({label, link, color}) => {
    return <div className="w-1/5 h-[100px] flex flex-col items-center justify-center text-center">
        <Button aria-label={label} as={Link} className="rounded-full" color={color} href={link} isExternal={true}
                isIconOnly={true}>
            {label === "Spotify" ? <SpotifyIcon/> :
                label === "Youtube Music" ? <YoutubeMusicIcon/> :
                    label === "Deezer" ? <DeezerIcon/> :
                        label === "qobuz" ? <QobuzIcon/> :
                            null}
        </Button>
        <span className="text-tiny font-bold h-1/4 mt-2">{label}</span>
    </div>
}