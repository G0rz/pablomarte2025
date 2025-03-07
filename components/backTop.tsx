"use client"
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/react";
import {useEffect, useState} from "react";
import { AngleUpIcon } from "./icons";

const BackTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<>
            {isVisible &&
                <Tooltip key={"GoToTop"} className="capitalize" color={"foreground"} content={"Go To Top!"}>
                <Button onPress={scrollToTop} isIconOnly={true} color="primary" variant="shadow" radius="full" className="fixed bottom-[2%] hover:bottom-[2.5%] right-[2.5%] z-10 size-[4rem] transition-all text-2xl">
                  <AngleUpIcon/>
                </Button>
                </Tooltip>
            }
        </>
    );
};

export default BackTop;