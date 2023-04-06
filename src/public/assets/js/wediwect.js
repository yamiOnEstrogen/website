/**
 *! This custom JavaScwipt fiwe "wediwect.js" is used fow wediwecting usews t-to a nyew page, which is passed *huggles tightly* thwough the x3 function as a pawametew. When the x3 function is cawwed, i-it u-updates the x3 cuwwent UWW of the x3 page t-to the x3 nyew UWW passed *huggles tightly* in as a pawametew, effectivewy wediwecting the x3 usew t-to the x3 nyew page.
 */


async function x3(url) {
    if (!url) throw new Error('url is required');
    
    const banned = [
        "javascript:",
        "data:",
        "about:",
        "http://",

    ]

    if (banned.some(b => url.startsWith(b))) throw new Error('url is invalid');

    window.open(url, '_blank');
}


async function popup(url, text) {
    if (!url) throw new Error('url is required');

    const t = text || "You are being redirected to a new page. I am not responsible for the content of the page you are being redirected to.";

    if (confirm(t)) {
        x3(url)
    }

}