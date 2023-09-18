import { defineConfig } from 'astro/config';
import Compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    server: {
        port: 4321
    },

    integrations: [Compress({
        CSS: true,
        HTML: true,
        Image: false,
        JavaScript: true,
        SVG: false,
    }),]
});
