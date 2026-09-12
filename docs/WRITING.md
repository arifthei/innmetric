# Writing for the hotel decision maker

Use this with current [Intent](INTENT.md). The goal is useful, natural copy for the person deciding whether to bring InnMetric in. Passing a banned-word check is not the goal.

## The shared promise

The hotel wants guests to book the rooms and rates it intended to sell. InnMetric investigates the gap across existing systems, makes approved corrections and checks the booking result. This covers missing availability, unexpected rates, reopened dates and recurring problems. The homepage's missing-room scenario is an opening, not a narrower product scope.

Keep that meaning consistent across routes. Use each page to answer a different buying question. Coherence does not require identical headlines, closers or a fixed sequence of visits.

## Write the useful sentence first

Name what the hotel team is dealing with, what InnMetric takes on and what the team can do with the result. Keep the reader competent. Do not narrate invented calls to vendors, emotions, losses or customer successes.

A short line can still be vague: "One party owns the trace" needs decoding. "We make the changes you approve and check what guests can book" names the work. A document name is concrete but the buyer also needs its purpose: knowing what changed and what still needs attention.

Use the Signal, Tension, Pull idea as a drafting aid. The signal is a recognisable booking problem. The tension is the gap between what the hotel intended and what guests can book. The pull is a usable answer and handover. The guide is the service doing a defined job. These are editorial choices, not proven psychological or conversion effects.

## One job per page

| Page | Answer | Avoid repeating |
| --- | --- | --- |
| Home | Is this our problem, what can you do and are we a fit? | The full process or systems list in every block |
| How it works | What does my team do and what does InnMetric do? | The same step in a summary and both responsibility blocks |
| Services | Which engagement do we need and what is included? | The three buyer states again in the lede and each body |
| About | Who does the work and what relevant experience do they bring? | A second process page or a manifesto before the founders |
| FAQ | What is the answer and does your service cover it? | A sales invitation appended to every answer |
| Contact | What should I tell you and how will you respond? | Guest-facing stay requests or internal deployment details |

Each page can be a first visit. Let the reader go straight to Contact; the story is not a compulsory sequence. Keep familiar navigation and consistent primary buttons.

Shared primary action wording lives in `web/src/lib/copy.ts`. It describes opening a conversation, not a guaranteed solution or an already booked call. The form button describes submission. Page-specific closing copy may address the reader's remaining question.

## Apply the references to this service

| Reference idea | Application here | Do not copy literally |
| --- | --- | --- |
| Writing Tips: recognition before credentials | Open Home with rooms available in the hotel but missing on the booking page | An invented hotel incident, emotional monologue or loss figure |
| Writing Tips: show the useful end state | Explain what a hotel team can do with findings, changes and unresolved items | A list of document names presented as the whole benefit |
| Psychology: the buyer's mission, obstacle and guide | The hotel chooses what to sell; a cross-system booking problem gets in the way; the service investigates it | A six-part Hollywood formula repeated on every page |
| Email & webcopy guidelines: clear next step and self-selection | A specific service comparison, factual fit criteria and a clear reply after an enquiry | "You'll enjoy working with us if" or "we believe" as mandatory headings |
| Humanizer references: inspect structure as well as wording | Remove duplicate process explanations and let About, FAQ and Contact have different shapes | Detector scores, forced quirks or fake unresolved endings |

These are editorial adaptations, not evidence of conversion gains. The cake-mix story does not justify making the enquiry harder. Ask only for the current form context in Intent. Do not rename price to investment, replace every "if" with "when" or imply an outcome is certain.

## Two editing passes

First read the prose aloud. Keep natural contractions and varied sentence lengths. Remove stock phrasing, forced punchlines, unnecessary defenses and repeated headings. Keep the terms that clarify the actual work. Do not replace every ordinary word with a technical noun.

Then read the outline. Mark where the same promise, caveat or explanation appears twice. Cut the repetition while preserving facts and scope. Keep each process responsibility distinct. Do not add tangents or an unresolved ending just to resemble human prose.

[blader/humanizer](https://github.com/blader/humanizer) and [humanizer-stack](https://github.com/NulightJens/humanizer-stack) are editorial references. Neither is an audience test. Do not install their code, turn their scanner scores into an acceptance gate or copy their source into this repo for an ordinary copy pass.

English only. No em/en dashes or Oxford comma. Avoid the existing unwanted words `helps`, `unlock` and `leverage`, but do not keep expanding a ban list. Don't add mistakes, swearing, fake quotes or manufactured urgency to sound human.

## Final read

Can a hotel decision maker identify the problem, the service, the useful result and the next action from the page? Does each claim match Intent? Does the public form explain what it actually does? Is any sentence present only to satisfy an agent's framework?

Check revised text in the layout when possible. Keep type readable; cut redundant copy before changing padding or font size. Record browser checks and buyer comprehension separately. No hotel-buyer test has been completed in the current pass.

The [Fixes pack](fixes/00_START_HERE.md) records the historical 2026-09-08 diagnosis. Current decisions are here and in Intent; current status is in [HANDOFF.md](HANDOFF.md). Do not restart a completed rewrite without a new brief or a concrete defect. Finish a defined review once: fix a factual, functional or rendering defect, record the evidence and close it. A new agent's preference is not a defect.
