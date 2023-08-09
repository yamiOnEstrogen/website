import type { ImageMetadata } from "@astrojs/image/dist/vite-plugin-astro-image";

// @ts-ignore
import image from "../assets/93791569.jpg";

export interface Author {
    firstname: string;
    bio: string;
    profilePic: ImageMetadata;
    os?: string;
    shell?: string;
    lastname: string;
    socials: Socials[];
}

export interface Socials {
    name: string;
    link: string;
}

export interface Site {
    lang: string;
    rssTitle: string;
    siteName: string;
    title: string;
    description: string;
    image: string;
    twitterCreator: string;
    author: Author;
}

export const site: Site = {
    lang: "en",
    rssTitle: "Hylia's blog posts",
    siteName: "HyliaDev",
    title: "Hylia :: Personal Site",
    description:
        "Hi, my name is Stella, I'm building discord bots and open source solutions at hyperstar. I am also a TransFemale, She/Her.",
    image: "https://avatars.githubusercontent.com/u/93791569?v=4",
    twitterCreator: "@HyperHylia",
    author: {
        os: "ArchLinux",
        profilePic: image,
        shell: "Zsh",
        bio: `Hi, I'm Stella (hylia)! I'm a developer and a vtuber from the United States. I'm currently working as a full-stack developer at Hyperstar.


        I'm a big fan of anime, manga, and video games. I also enjoy watching vtubers and playing rhythm games. I'm currently learning Japanese and hope to be able to speak it fluently one day.


        I'm also a big fan of Genshin Impact and Honkai Impact 3rd!`,
        firstname: "Stella",
        lastname: "<3",
        socials: [
            {
                name: "github",
                link: "https://github.com/0xhylia",
            },
            {
                name: "twitter",
                link: "https://twitter.com/HyperHylia",
            },
            {
                name: "twitch",
                link: "https://twitch.tv/0xhylia",
            }
        ],
    },
};
