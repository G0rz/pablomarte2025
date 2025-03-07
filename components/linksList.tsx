import {Link, Listbox, ListboxItem} from "@heroui/react";
import {FC} from "react";

export interface LinksListProps {
    label: string,
    link: string
    color: any,
}

export const LinksList: FC<LinksListProps> = ({label, link, color}) => {
    return <div className=" w-full">
        <Listbox className="" aria-label="List of links with icons"
                 variant="bordered">
            <ListboxItem color={color}>
                <Link showAnchorIcon isExternal={true} color={color} href={link}>
                    {label}
                </Link>
            </ListboxItem>
        </Listbox>
    </div>
}