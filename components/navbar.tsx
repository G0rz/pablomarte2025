"use client";

import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  TwitterIcon,
} from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <HeroUINavbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      shouldHideOnScroll={true}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit hidden md:block">
              Pablo Marte
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} isActive={pathname === item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3">
          <Link
            isExternal
            aria-label="Instagram"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="text-xl text-foreground flex-shrink-0 hover:text-primary " />
          </Link>
          <Link
            isExternal
            aria-label="Facebook"
            href={siteConfig.links.facebook}
          >
            <FacebookIcon className="text-xl text-foreground flex-shrink-0 hover:text-primary" />
          </Link>
          <Link isExternal aria-label="X" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-xl text-foreground flex-shrink-0 hover:text-primary" />
          </Link>
          <Link isExternal aria-label="Tik Tok" href={siteConfig.links.tiktok}>
            <TikTokIcon className="text-xl text-foreground flex-shrink-0 hover:text-primary" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color="foreground"
                href={item.href}
                size="lg"
                onPress={() => setIsMenuOpen(!isMenuOpen)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem
            className={
              "flex flex-wrap justify-center items-center gap-6 mt-[65vh]"
            }
          >
            <p>Sigueme en:</p>
            <Link
              isExternal
              aria-label="Instagram"
              className={"flex"}
              href={siteConfig.links.instagram}
            >
              <InstagramIcon className="text-xl text-foreground flex-shrink-0 hover:text-primary " />
            </Link>
            <Link
              isExternal
              aria-label="Facebook"
              className={"flex"}
              href={siteConfig.links.facebook}
            >
              <FacebookIcon className="text-xl text-foreground flex-shrink-0 hover:text-primary" />
            </Link>
            <Link
              isExternal
              aria-label="X"
              className={"flex"}
              href={siteConfig.links.twitter}
            >
              <TwitterIcon className="text-xl text-foreground flex-shrink-0 hover:text-primary" />
            </Link>
            <Link
              isExternal
              aria-label="Tik Tok"
              className={"flex"}
              href={siteConfig.links.tiktok}
            >
              <TikTokIcon className="text-xl text-foreground flex-shrink-0 hover:text-primary" />
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
