import {Link, Listbox, ListboxItem} from "@heroui/react";
import {FC} from "react";

export interface LinksListProps {
    label: string,
    link: string
    color: any,
}

export const LinksList: FC<LinksListProps> = ({label, link, color}) => {
    return <div className=" w-full">
        <Listbox aria-label="List of links with icons" className=""
                 variant="bordered">
            <ListboxItem color={color}>
                <Link showAnchorIcon color={color} href={link} isExternal={true}>
                    {label}
                </Link>
            </ListboxItem>
        </Listbox>
    </div>
}