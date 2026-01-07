const EXAMPLES = [
  "John 3:16",
  "Rom 12:1-2",
  "1 Cor 13:4-7",
  "Song of Songs 2:10-13",
  "Jn 3:16-4:2",
  "Ps 23",
  "Deut 6:4-9",
  "Rev 21:1-5"
];

const BOOK_DATA = [
  { code: "GEN", canonical: "Genesis", aliases: ["gen", "ge", "gn"] },
  { code: "EXO", canonical: "Exodus", aliases: ["exo", "ex"] },
  { code: "LEV", canonical: "Leviticus", aliases: ["lev", "lv", "levit"] },
  { code: "NUM", canonical: "Numbers", aliases: ["num", "nums", "nm"] },
  { code: "DEU", canonical: "Deuteronomy", aliases: ["deut", "deu", "dt"] },
  { code: "JOS", canonical: "Joshua", aliases: ["jos", "josh", "jsh"] },
  { code: "JDG", canonical: "Judges", aliases: ["jdg", "judg", "jud"] },
  { code: "RUT", canonical: "Ruth", aliases: ["rut"] },
  { code: "1SA", canonical: "1 Samuel", aliases: ["1 samuel", "1 sam", "1sa", "i samuel", "first samuel"] },
  { code: "2SA", canonical: "2 Samuel", aliases: ["2 samuel", "2 sam", "2sa", "ii samuel", "second samuel"] },
  { code: "1KI", canonical: "1 Kings", aliases: ["1 kings", "1 ki", "1k", "i kings", "first kings"] },
  { code: "2KI", canonical: "2 Kings", aliases: ["2 kings", "2 ki", "2k", "ii kings", "second kings"] },
  { code: "1CH", canonical: "1 Chronicles", aliases: ["1 chronicles", "1 chron", "1ch", "i chronicles", "first chronicles"] },
  { code: "2CH", canonical: "2 Chronicles", aliases: ["2 chronicles", "2 chron", "2ch", "ii chronicles", "second chronicles"] },
  { code: "EZR", canonical: "Ezra", aliases: ["ezr"] },
  { code: "NEH", canonical: "Nehemiah", aliases: ["neh", "ne"] },
  { code: "EST", canonical: "Esther", aliases: ["est", "es"] },
  { code: "JOB", canonical: "Job", aliases: ["jb"] },
  { code: "PSA", canonical: "Psalms", aliases: ["psalm", "psalms", "ps", "psa", "pslm"] },
  { code: "PRO", canonical: "Proverbs", aliases: ["prov", "pro", "prv"] },
  { code: "ECC", canonical: "Ecclesiastes", aliases: ["eccles", "eccl", "ecc"] },
  { code: "SNG", canonical: "Song of Solomon", aliases: ["song", "song of songs", "song of solomon", "sos", "canticles", "song of sol"] },
  { code: "ISA", canonical: "Isaiah", aliases: ["isa", "is"] },
  { code: "JER", canonical: "Jeremiah", aliases: ["jer", "je"] },
  { code: "LAM", canonical: "Lamentations", aliases: ["lam", "lament"] },
  { code: "EZK", canonical: "Ezekiel", aliases: ["ezek", "ezk", "ez"] },
  { code: "DAN", canonical: "Daniel", aliases: ["dan", "dn"] },
  { code: "HOS", canonical: "Hosea", aliases: ["hos", "ho"] },
  { code: "JOL", canonical: "Joel", aliases: ["joel", "jol", "jl"] },
  { code: "AMO", canonical: "Amos", aliases: ["amos", "amo", "am"] },
  { code: "OBA", canonical: "Obadiah", aliases: ["obadiah", "obad", "oba", "ob"] },
  { code: "JON", canonical: "Jonah", aliases: ["jonah", "jon", "jh"] },
  { code: "MIC", canonical: "Micah", aliases: ["micah", "mic", "mc"] },
  { code: "NAM", canonical: "Nahum", aliases: ["nahum", "nah", "nam"] },
  { code: "HAB", canonical: "Habakkuk", aliases: ["habakkuk", "hab", "hb"] },
  { code: "ZEP", canonical: "Zephaniah", aliases: ["zeph", "zep", "zf"] },
  { code: "HAG", canonical: "Haggai", aliases: ["haggai", "hag", "hg"] },
  { code: "ZEC", canonical: "Zechariah", aliases: ["zech", "zec", "zch"] },
  { code: "MAL", canonical: "Malachi", aliases: ["mal", "ml", "malachi"] },
  { code: "MAT", canonical: "Matthew", aliases: ["matt", "mat", "mt"] },
  { code: "MRK", canonical: "Mark", aliases: ["mark", "mrk", "mk"] },
  { code: "LUK", canonical: "Luke", aliases: ["luke", "luk", "lk", "lu"] },
  { code: "JHN", canonical: "John", aliases: ["john", "jn", "jhn", "joh"] },
  { code: "ACT", canonical: "Acts", aliases: ["acts", "act", "ac"] },
  { code: "ROM", canonical: "Romans", aliases: ["rom", "rm"] },
  { code: "1CO", canonical: "1 Corinthians", aliases: ["1 corinthians", "1 cor", "1co", "i cor", "first corinthians"] },
  { code: "2CO", canonical: "2 Corinthians", aliases: ["2 corinthians", "2 cor", "2co", "ii cor", "second corinthians"] },
  { code: "GAL", canonical: "Galatians", aliases: ["gal", "ga"] },
  { code: "EPH", canonical: "Ephesians", aliases: ["eph", "ep"] },
  { code: "PHP", canonical: "Philippians", aliases: ["phil", "php", "pp"] },
  { code: "COL", canonical: "Colossians", aliases: ["col", "co"] },
  { code: "1TH", canonical: "1 Thessalonians", aliases: ["1 thessalonians", "1 thess", "1th", "i thess", "first thessalonians"] },
  { code: "2TH", canonical: "2 Thessalonians", aliases: ["2 thessalonians", "2 thess", "2th", "ii thess", "second thessalonians"] },
  { code: "1TI", canonical: "1 Timothy", aliases: ["1 timothy", "1 tim", "1ti", "i tim", "first timothy"] },
  { code: "2TI", canonical: "2 Timothy", aliases: ["2 timothy", "2 tim", "2ti", "ii tim", "second timothy"] },
  { code: "TIT", canonical: "Titus", aliases: ["tit", "ti"] },
  { code: "PHM", canonical: "Philemon", aliases: ["philem", "phile", "phm", "phlm"] },
  { code: "HEB", canonical: "Hebrews", aliases: ["heb", "he"] },
  { code: "JAS", canonical: "James", aliases: ["jam", "jas", "jm"] },
  { code: "1PE", canonical: "1 Peter", aliases: ["1 peter", "1 pet", "1pe", "i peter", "first peter"] },
  { code: "2PE", canonical: "2 Peter", aliases: ["2 peter", "2 pet", "2pe", "ii peter", "second peter"] },
  { code: "1JN", canonical: "1 John", aliases: ["1 john", "1 jn", "1jn", "i john", "first john"] },
  { code: "2JN", canonical: "2 John", aliases: ["2 john", "2 jn", "2jn", "ii john", "second john"] },
  { code: "3JN", canonical: "3 John", aliases: ["3 john", "3 jn", "3jn", "iii john", "third john"] },
  { code: "JUD", canonical: "Jude", aliases: ["jude", "jud", "jd"] },
  { code: "REV", canonical: "Revelation", aliases: ["rev", "revelations", "rv"] }
];

const BOOK_LOOKUP = new Map();
const BOOK_INDEX = new Map();

BOOK_DATA.forEach((book, idx) => {
  BOOK_INDEX.set(book.code, idx);
  const uniqueNames = new Set([book.canonical, book.code, ...book.aliases]);
  uniqueNames.forEach((name) => {
    const key = cleanBookKey(name);
    if (key) {
      BOOK_LOOKUP.set(key, book);
    }
  });
});

const elements = {
  form: document.getElementById("linkForm"),
  reference: document.getElementById("reference"),
  translation: document.getElementById("translation"),
  customFields: document.getElementById("customTranslationFields"),
  customVersionId: document.getElementById("customVersionId"),
  customVersionCode: document.getElementById("customVersionCode"),
  status: document.getElementById("statusMessage"),
  resultCard: document.getElementById("resultCard"),
  prettyReference: document.getElementById("prettyReference"),
  openLink: document.getElementById("openLink"),
  resultInput: document.getElementById("resultInput"),
  resultTranslation: document.getElementById("resultTranslation"),
  newLinkBtn: document.getElementById("newLinkBtn"),
  linkOutput: document.getElementById("linkOutput"),
  embedOutput: document.getElementById("embedOutput"),
  markdownOutput: document.getElementById("markdownOutput"),
  resetBtn: document.getElementById("resetBtn"),
  exampleList: document.getElementById("exampleList"),
  copyButtons: Array.from(document.querySelectorAll("[data-copy-target]"))
};

elements.copyButtons.forEach((button) => {
  button.addEventListener("click", () => handleCopy(button));
});

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleBuild();
});

elements.resetBtn.addEventListener("click", resetApp);
if (elements.newLinkBtn) {
  elements.newLinkBtn.addEventListener("click", resetApp);
}

elements.translation.addEventListener("change", () => {
  syncCustomVisibility();
});

let hasResult = false;
renderExamples();
clearResult();
syncCustomVisibility();

function renderExamples() {
  elements.exampleList.innerHTML = "";
  EXAMPLES.forEach((ref) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = ref;
    btn.addEventListener("click", () => {
      elements.reference.value = ref;
      elements.reference.focus();
    });
    elements.exampleList.appendChild(btn);
  });
}

function handleBuild() {
  try {
    console.log("[handleBuild] Starting...");
    const rawReference = elements.reference.value.trim();
    console.log("[handleBuild] Input:", rawReference);
    if (!rawReference) {
      throw new Error("Enter a reference to continue.");
    }

    console.log("[handleBuild] Parsing reference...");
    const range = parseReference(rawReference);
    console.log("[handleBuild] Parsed range:", range);
    
    console.log("[handleBuild] Resolving translation...");
    const translation = resolveTranslation();
    console.log("[handleBuild] Translation:", translation);
    
    console.log("[handleBuild] Building URL...");
    const url = buildBibleUrl(range, translation);
    console.log("[handleBuild] URL:", url);
    
    const readable = formatReadable(range);
    console.log("[handleBuild] Readable:", readable);
    const displayInput = rawReference.replace(/\s+/g, " ").trim();

    elements.linkOutput.textContent = url;
    elements.embedOutput.value = `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(readable)}</a>`;
    elements.markdownOutput.value = `[${readable}](${url})`;
    elements.prettyReference.textContent = readable;
    elements.openLink.href = url;
    elements.resultInput.textContent = displayInput || readable;
    elements.resultTranslation.textContent = translation.label;
    applyResultState();
    setStatus("Link ready. Copy away!", false);
    console.log("[handleBuild] Done!");
  } catch (error) {
    console.error("[handleBuild] Error:", error);
    setStatus(error.message || "Something went wrong.", true);
    if (!hasResult) {
      clearResult();
    }
  }
}

function resolveTranslation() {
  const select = elements.translation;
  const selectedIndex = select ? select.selectedIndex : -1;
  if (!select || selectedIndex < 0) {
    throw new Error("Pick a translation to continue.");
  }
  const option = select.options[selectedIndex];
  const optionValue = option ? option.value : "";
  const optionLabel = option ? (option.textContent || option.innerText || "").trim() : "";

  if (optionValue === "CUSTOM") {
    const idValue = elements.customVersionId.value.trim();
    const codeValue = elements.customVersionCode.value.trim().toUpperCase();

    if (!/^\d+$/.test(idValue)) {
      throw new Error("Provide a numeric YouVersion ID for the custom translation.");
    }
    if (!/^[A-Z0-9]+$/.test(codeValue)) {
      throw new Error("Custom version code should look like NIV, CSB, MSG, etc.");
    }

    const label = codeValue ? `${codeValue} (ID ${idValue})` : `Custom translation (${idValue})`;
    return { id: idValue, code: codeValue, label };
  }

  const idValue = optionValue.trim();
  const codeValue = ((option && option.dataset.versionCode) || "").trim().toUpperCase();
  if (!idValue || !codeValue) {
    throw new Error("Translation metadata missing. Try picking another option.");
  }

  return { id: idValue, code: codeValue, label: optionLabel || `${codeValue} translation` };
}

function parseReference(rawInput) {
  const prepared = prepareReference(rawInput);
  const { start: startRaw, end: endRaw } = splitRange(prepared);

  const start = parseSegmentWithBook(startRaw);
  let end = null;

  if (endRaw) {
    end = parseEndingSegment(endRaw, start);
    ensureRangeOrder(start, end);
  }

  return { start, end };
}

function prepareReference(input) {
  return input
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[;,]/g, " ")
    .replace(/\bv(?=\d)/gi, ":")
    .replace(/([A-Za-z])(\d)/g, "$1 $2")
    .replace(/^(\s*[1-3])(?!\s)(?=[A-Za-z])/i, (match) => `${match.trim()} `)
    .replace(/\s+/g, " ")
    .trim();
}

// Only split on hyphens that trail a digit so hyphenated book names remain intact.
function splitRange(reference) {
  let dashIndex = -1;
  for (let i = 0; i < reference.length; i += 1) {
    if (reference[i] !== "-") {
      continue;
    }
    if (hasDigitBefore(reference, i - 1)) {
      dashIndex = i;
      break;
    }
  }

  if (dashIndex === -1) {
    return { start: reference.trim(), end: null };
  }

  return {
    start: reference.slice(0, dashIndex).trim(),
    end: reference.slice(dashIndex + 1).trim()
  };
}

function hasDigitBefore(text, index) {
  for (let i = index; i >= 0; i -= 1) {
    const char = text[i];
    if (char === " ") {
      continue;
    }
    return /\d/.test(char);
  }
  return false;
}

function parseSegmentWithBook(part) {
  const trimmed = (part || "").trim();
  if (!trimmed) {
    throw new Error("A book and chapter are required.");
  }

  const match = trimmed.match(/^(.*?)(\d[\d:\s]*)$/);
  if (!match) {
    throw new Error("Could not find a chapter/verse in that reference.");
  }

  const bookChunk = match[1].trim();
  const numericChunk = match[2].trim();

  if (!bookChunk) {
    throw new Error("Include the book name (e.g., John, 1 Sam).");
  }

  const book = resolveBook(bookChunk);
  const position = parseChapterVerse(numericChunk);
  return { ...book, ...position };
}

function parseEndingSegment(part, start) {
  const trimmed = (part || "").trim();
  if (!trimmed) {
    throw new Error("Finish the range after the dash.");
  }

  if (/[A-Za-z]/.test(trimmed)) {
    return parseSegmentWithBook(trimmed);
  }

  if (trimmed.includes(":")) {
    const [chapterPart, versePartRaw] = trimmed.split(":");
    const chapter = parsePositiveNumber(chapterPart, "ending chapter");
    const verse = versePartRaw ? parsePositiveNumber(versePartRaw, "ending verse") : null;
    return { bookCode: start.bookCode, bookName: start.bookName, chapter, verse };
  }

  const value = parsePositiveNumber(trimmed, "ending value");
  if (start.verse != null) {
    return { bookCode: start.bookCode, bookName: start.bookName, chapter: start.chapter, verse: value };
  }

  return { bookCode: start.bookCode, bookName: start.bookName, chapter: value, verse: null };
}

function parseChapterVerse(chunk) {
  const clean = chunk.trim();
  const [chapterPart, versePart] = clean.split(":");
  const chapter = parsePositiveNumber(chapterPart, "chapter");
  const verse = versePart !== undefined && versePart !== "" ? parsePositiveNumber(versePart, "verse") : null;
  return { chapter, verse };
}

function parsePositiveNumber(value, label) {
  const result = Number(value);
  if (!Number.isFinite(result) || result <= 0) {
    throw new Error(`Invalid ${label}.`);
  }
  return result;
}

function resolveBook(raw) {
  const key = cleanBookKey(raw);
  const match = BOOK_LOOKUP.get(key);
  if (!match) {
    throw new Error(`Unknown book: "${raw.trim()}".`);
  }
  return { bookCode: match.code, bookName: match.canonical };
}

function cleanBookKey(raw) {
  if (!raw) {
    return "";
  }
  const romanMap = { i: "1", ii: "2", iii: "3" };
  let key = raw
    .toLowerCase()
    .replace(/[\u2019']/g, "")
    .replace(/\./g, " ")
    .replace(/-/g, " ")
    .replace(/,/g, " ")
    .trim();

  key = key.replace(/^the\s+/, "");
  key = key.replace(/^(i{1,3})\b/, (match) => romanMap[match] || match);
  key = key.replace(/\b(first|1st)\b/g, "1");
  key = key.replace(/\b(second|2nd)\b/g, "2");
  key = key.replace(/\b(third|3rd)\b/g, "3");
  key = key.replace(/^([1-3])(?!\s)(?=[a-z])/, "$1 ");
  key = key.replace(/([a-z])([1-3])/g, "$1 $2");
  key = key.replace(/\s+/g, " ");
  return key.trim();
}

function ensureRangeOrder(start, end) {
  const comparison = compareSegments(start, end);
  if (comparison > 0) {
    throw new Error("Range ends before it begins. Check the order of your verses.");
  }
}

function compareSegments(a, b) {
  const bookDiff = BOOK_INDEX.get(a.bookCode) - BOOK_INDEX.get(b.bookCode);
  if (bookDiff !== 0) {
    return bookDiff;
  }
  if (a.chapter !== b.chapter) {
    return a.chapter - b.chapter;
  }
  const verseA = a.verse ?? 0;
  const verseB = b.verse ?? 0;
  return verseA - verseB;
}

function buildBibleUrl(range, translation) {
  const startPart = buildSegment(range.start);
  const endPart = range.end ? `-${buildSegment(range.end)}` : "";
  return `https://www.bible.com/bible/${translation.id}/${startPart}${endPart}.${translation.code}`;
}

function buildSegment(segment) {
  let part = `${segment.bookCode}.${segment.chapter}`;
  if (segment.verse != null) {
    part += `.${segment.verse}`;
  }
  return part;
}

function formatReadable(range) {
  const start = formatSegment(range.start);
  if (!range.end) {
    return start;
  }
  const end = formatEndSegment(range.start, range.end);
  return `${start}-${end}`;
}

function formatSegment(segment) {
  return segment.verse != null ? `${segment.bookName} ${segment.chapter}:${segment.verse}` : `${segment.bookName} ${segment.chapter}`;
}

function formatEndSegment(start, end) {
  if (end.bookCode !== start.bookCode) {
    return formatSegment(end);
  }
  if (end.chapter !== start.chapter) {
    return end.verse != null ? `${end.chapter}:${end.verse}` : `${end.chapter}`;
  }
  return end.verse != null ? `${end.verse}` : `${end.chapter}`;
}

function setStatus(message, isError) {
  elements.status.textContent = message;
  elements.status.classList.toggle("error", Boolean(isError));
}

function clearResult() {
  hasResult = false;
  elements.resultCard.dataset.state = "empty";
  elements.prettyReference.textContent = "Waiting for a passage…";
  elements.openLink.href = "#";
  elements.openLink.setAttribute("aria-disabled", "true");
  elements.linkOutput.textContent = "Your link will appear here.";
  elements.embedOutput.value = "";
  elements.markdownOutput.value = "";
  elements.resultInput.textContent = "—";
  elements.resultTranslation.textContent = "—";
  elements.copyButtons.forEach((button) => {
    button.disabled = true;
  });
  if (elements.newLinkBtn) {
    elements.newLinkBtn.disabled = true;
    elements.newLinkBtn.textContent = "Create new link";
  }
}

function applyResultState() {
  hasResult = true;
  elements.resultCard.dataset.state = "ready";
  elements.openLink.removeAttribute("aria-disabled");
  elements.copyButtons.forEach((button) => {
    button.disabled = false;
  });
  if (elements.newLinkBtn) {
    elements.newLinkBtn.disabled = false;
    elements.newLinkBtn.textContent = "Create another link";
  }
}

function resetApp() {
  elements.form.reset();
  elements.translation.selectedIndex = 0;
  elements.customVersionId.value = "";
  elements.customVersionCode.value = "";
  syncCustomVisibility();
  elements.status.textContent = "";
  elements.status.classList.remove("error");
  clearResult();
  elements.reference.focus();
}

function syncCustomVisibility() {
  if (!elements.customFields) {
    return;
  }
  const isCustom = elements.translation.value === "CUSTOM";
  elements.customFields.hidden = !isCustom;
}

async function handleCopy(button) {
  if (button.disabled) {
    return;
  }
  const targetId = button.getAttribute("data-copy-target");
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  const value = "value" in target ? target.value : target.textContent;
  if (!value) {
    return;
  }

  try {
    await navigator.clipboard.writeText(value);
    flashCopyState(button, "Copied!");
  } catch (error) {
    fallbackCopy(value);
    flashCopyState(button, "Copied");
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "readonly");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function flashCopyState(button, label) {
  const original = button.textContent;
  button.textContent = label;
  button.disabled = true;
  setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
  }, 1400);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return map[char] || char;
  });
}
