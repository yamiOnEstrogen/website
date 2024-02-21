interface Social {
    title: string;
    href: string;
    icon: string;
    color: string;
}



const socials: Social[] = [
    {
        title: "Twitter",
        href: "https://x.com/yamideveloper/",
        icon: "bi bi-twitter",
        color: "#1da1f2",
    },
    {
        title: "Github",
        href: "https://github.com/0xYami",
        icon: "bi bi-github",
        color: "#181717"
    },
    {
        title: "Twitch",
        href: "https://twitch.com/0xhylia",
        icon: "bi bi-twitch",
        color: "#9146ff",
    },
    {
        title: "Steam",
        href: "https://steamcommunity.com/id/hyliavt/",
        icon: "bi bi-steam",
        color: "#000000",
    },
    // {
    //     title: "Discord",
    //     href: "https://chat.hylia.dev",
    //     icon: "bi bi-discord",
    //     color: "#5865f2",
    // },
];

function getAll(): Social[] {
    return socials;
}

function getRandom(len: number): Social[] | Social {
    if (len > 0) {
        let result: Social[] = [];
        let tempSocials = [...socials]; // Create a copy of the socials array

        for (let i = 0; i < len && tempSocials.length > 0; i++) {
            const index = Math.floor(Math.random() * tempSocials.length);
            result.push(tempSocials[index]);
            tempSocials.splice(index, 1); // Remove the selected item
        }

        return result;
    } else {
        return socials[Math.floor(Math.random() * socials.length)];
    }
}

interface Options {
    random?: {
        enabled: boolean;
        amount: number;
    },
    size?: {
        width: number;
        height: number;
    },
    css?: string;
    li?: boolean;  // Changed from string to boolean to indicate presence of <li> tags
}

function createIndexHtml(options?: Options): string {
    let html = "";

    // Function to generate the HTML for a single social item
    const generateSocialHtml = (social: any) => {
        const width = options?.size?.width ? `width: ${options.size.width}px;` : "";
        const height = options?.size?.height ? `height: ${options.size.height}px;` : "";
        const css = options?.css ? options.css : "";

        const iconHtml = `
            <a href="${social.href}" title="${social.title}" target="_blank" rel="noopener noreferrer">
                <i class="${social.icon}" style="color: ${social.color}; ${width} ${height} ${css}"></i>
            </a>
        `;

        // Wrap with <li> tags if li option is true
        return options?.li ? `<li>${iconHtml}</li>` : iconHtml;
    };

    if (options?.random?.enabled) {
        let socials = getRandom(options.random.amount);

        if (Array.isArray(socials)) {
            socials.forEach((social) => {
                html += generateSocialHtml(social);
            });
        } else {
            html += generateSocialHtml(socials);
        }
    } else {
        socials.forEach((social) => {
            html += generateSocialHtml(social);
        });
    }

    return html;
}




export {
    getAll,
    getRandom,
    createIndexHtml
};