"use client";

import {FC} from "react";
import {Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Image,} from "@heroui/react";
import {LinksList} from "@/components/linksList";

export interface DrawerProps {
    isOpen: any,
    onOpenChange: any,
    song: any,
}

export const CustomDrawer: FC<DrawerProps> = ({isOpen, onOpenChange, song}) => {
    return (
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent>
                {(onClose) => (
                    <>
                        <DrawerHeader className="flex flex-col gap-1">
                            {song.title}
                        </DrawerHeader>
                        <DrawerBody className={'flex items-center justify-center'}>
                            <Image
                                alt={song.title}
                                className="object-cover"
                                height={250}
                                width={250}
                                src={song.image}
                            />
                            <p>{song.description}</p>
                            {song.links.length > 0 ? (
                                song.links.map((element: { label: string; color: any; link: string; }) => {
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
    );
};
