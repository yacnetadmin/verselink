# VerseLink Builder

VerseLink is a zero-dependency web tool that converts human-friendly Scripture references into shareable Bible.com links. It supports alias-heavy inputs ("Jn", "Song", "II Tim"), cross-chapter ranges, preset YouVersion translations, and instant HTML/Markdown snippets.

## Features

- **Alias-aware parsing** – Understands roman numerals, abbreviations, and punctuation noise for all 66 books.
- **Range handling** – Builds links for single verses, chapter spans, and cross-chapter selections (e.g., `John 3:16-4:2`).
- **Translation presets** – Dropdown defaults to ESV and covers popular versions, with an optional custom section for niche IDs/codes.
- **Share helpers** – One-click copy buttons for the canonical URL, HTML `<a>` snippet, and Markdown reference.
- **Result summary** – Keeps your input + translation visible alongside a "Create another link" shortcut for fast iteration.
- **Modern UI** – Responsive glassmorphism layout with sample chips for quick testing and clear error messaging.

## Getting Started

1. Clone or download the repository.
2. Open `index.html` in any modern browser. No build step or server is required.
3. Type a reference such as `Song of Songs 2:10-13`, keep the default ESV (or pick another translation), and press **Generate link**.
4. Use the copy buttons or the **Open in new tab** link to validate the generated Bible.com URL.

## Custom Translations

- Choose **Custom translation…** in the dropdown to reveal inputs for a YouVersion ID/code pair.
- YouVersion IDs and codes can be found by copying an official Bible.com share link and inspecting the path (e.g., `https://www.bible.com/bible/72/PSA.23.MSG` shows ID `72` and code `MSG`).

## Input Tips

- Abbreviations like `Jn`, `1 Thes`, `Ps`, `Canticles`, or `II Tim` resolve correctly.
- Hyphenated book names (e.g., `Song-of-Songs`) are treated safely; only hyphens that follow numeric content begin a range.
- For ranges without explicit verses (e.g., `Ex 12-14`), the tool links to whole chapters. Adding verses (`Ex 12:1-14:31`) makes the URL more precise.

## Deploying to GitHub Pages

1. Commit the repo to GitHub.
2. In the repository settings, enable GitHub Pages and point it to the `main` branch (root folder).
3. Visit the published URL (typically `https://<username>.github.io/<repo>/`).

## Project Structure

- `index.html` – Shell markup, hero, form, and result sections.
- `src/styles.css` – Gradient-heavy visual design, responsive grid, and motion preferences.
- `src/main.js` – Reference parser, translation handling, clipboard helpers, and DOM wiring.

Feel free to fork and extend the alias map, add persistence, or integrate with additional APIs if you need analytics or saved histories.