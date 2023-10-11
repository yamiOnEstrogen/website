// Bro wtf is this keyboard.
// But fr this is a cool sound.
// I just want to be a dommy mommy's good pet.

export default function CreateShareLinks(title: string, url: string) {
    return `<li class="list-inline-item">
          <a
              href="https://twitter.com/intent/tweet?text=Check out ${title} on @char32vt's blog.%0A%0A${url}"
              target="_blank"
              rel="noopener noreferrer nofollow"
          >
              <i class="bi bi-twitter"></i>
          </a>
      </li>`;
  }