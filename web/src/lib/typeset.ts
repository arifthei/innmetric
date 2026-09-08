/**
 * Typesetting for reader-facing copy.
 *
 * Browsers break lines wherever a space allows, so a line can end on "the",
 * "you" or "or" and a paragraph can finish on a one-word line. Editors avoid
 * both by hand. `t()` does the same at render time by replacing selected
 * spaces with non-breaking spaces. Source strings stay plain ASCII, so the
 * copy lint and the wording itself are unchanged.
 *
 * Rules:
 * - A short function word never ends a line: the space after it is glued.
 * - Chains stop after three glued spaces (four short words), so narrow
 *   screens keep enough break opportunities.
 * - The last two words of a string are glued so no line carries one word,
 *   unless that would make the unbreakable tail too long.
 */

const GLUE = new Set([
  "a",
  "an",
  "the",
  "of",
  "to",
  "in",
  "on",
  "at",
  "by",
  "or",
  "and",
  "but",
  "for",
  "it",
  "is",
  "as",
  "if",
  "so",
  "we",
  "you",
  "your",
  "our",
  "their",
  "what",
  "when",
  "who",
  "with",
]);

const NBSP = "\u00A0";
const MAX_CHAIN = 3;

/** Longest unbreakable tail the widow rule may create, in characters. */
export const TAIL = {
  /** Body copy at 14 to 20px; fits a 390px card with padding. */
  body: 28,
  /** H1 at 34px must still fit a 390px screen. */
  heading: 18,
};

function bare(word: string) {
  return word.replace(/^[("'\u2018\u201c]+/, "").toLowerCase();
}

export function t(text: string, tail: number = TAIL.body): string {
  const words = text.split(" ");
  if (words.length < 3) return text;

  const parts: string[] = [];
  let chain = 0;

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    parts.push(word);
    if (i === words.length - 1) break;

    if (word && GLUE.has(bare(word)) && chain < MAX_CHAIN) {
      parts.push(NBSP);
      chain += 1;
    } else {
      parts.push(" ");
      chain = 0;
    }
  }

  let out = parts.join("");

  if (words.length > 4) {
    const cut = out.lastIndexOf(" ");
    if (cut > 0) {
      const lastWord = out.slice(cut + 1);
      const previous = out.lastIndexOf(" ", cut - 1);
      const glued = out.slice(previous + 1, cut) + lastWord;
      if (glued.length <= tail) {
        out = `${out.slice(0, cut)}${NBSP}${lastWord}`;
      }
    }
  }

  return out;
}
