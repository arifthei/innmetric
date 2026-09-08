# Why the copy became dull

Review baseline: `ef2df4259fe6a4281d642ff8705cb852be028feb`, 2026-09-08. These are observable findings and editorial judgments, not a private reasoning transcript or a claim that hotel buyers have tested the copy.

## The failure was in applying the material

Codex's earlier pass explained the service more accurately but still described activity: trace, approve, check, record. It kept a booking-example request that Mert subsequently judged guest-facing. Cursor corrected the audience and named deliverables, but added explanations around almost every line. Both passes treated compliance with the handbook as stronger evidence of quality than it was.

The writing references ask for a recognisable situation and a useful life after the work. We translated that into framework vocabulary and repeated process. A hotel manager needs to recognise the problem and understand what bringing us in changes. They do not need to learn our internal language to ask a question.

## Concrete defects and repairs

| Evidence at the baseline | Why it fails | Required repair |
| --- | --- | --- |
| Home: "One party owns the trace." | A short sentence can still be abstract. "Trace" has become a noun the buyer must decode. | Name the investigation, approved changes and booking check in ordinary language. |
| Home: "Four things your team holds" and "Not a slide deck." | Counts documents and argues with an unraised objection. | Lead with knowing what changed and what remains unresolved. Retain the named deliverables. |
| Home audit: "We find it"; process lede: "the proof that the guest can now book" | Promises discovery or a successful repair before investigation. | Describe what will be checked and reported. Preserve an explicit place for unresolved results. |
| How it works: phase description, Your team and InnMetric each restate the same steps | The useful responsibility split is buried in repetition. | Keep the split. Make the phase summary one distinct point and shorten both role descriptions. |
| Services repeats three buyer states in the lede, state lines and bodies | The same information consumes three reading passes. | Let each state line do its job. Use the body for the decision or deliverable it has not explained yet. |
| About repeats "We believe" / "So we" in every row | The drafting formula is visible as a template. | Keep the connection between belief and practice without repeating the scaffolding. |
| About: "Each one ... found nothing wrong" | Invents the visitor's support history and invites vendor blame. | Explain why InnMetric follows the booking across systems without narrating a fictitious conversation. |
| FAQ 1: "usually somewhere in mappings, restrictions or allotments" | "Usually" is a frequency claim. No source supports it. | Say what would be examined. A public symptom does not establish the cause. |
| FAQ 2 says a remaining difference becomes a proposed correction | Matching the booking does not by itself prove the difference is unintended. | Confirm the hotel's intended offer before proposing a change. |
| FAQ revenue answer: "on every channel you sell through" | Extends an agreed service scope to all channels. | Say agreed channels. Keep pricing with the hotel. |
| FAQ intro: "ask it in the form and we will answer it there" | The form cannot send or receive replies. | Point to the working email route while the preview is non-sending. |
| Contact label asks for an outcome; placeholder mainly asks for the current symptom | Two different tasks compete inside one field. | Ask for the problem and the wanted result together, with a short hotel-team example. |
| Privacy still says optional role and "stay to look at"; it says Netlify processes this form | Describes the old fields and a delivery path the Next form does not have. | Align the field description and preview behavior with the source code. Do not invent a backend. |

## The instructions caused regressions

`AGENTS.md` still locks the old lede. `INTENT.md` has the new form but its email section still says "send that stay". `HANDOFF.md` starts by calling the old short form current, then explains the replacement later. `CONTRADICTIONS.md` asks readers to combine several generations of overrides. Cursor's own wording is presented as Mert's exact decision. This makes whichever paragraph an agent reads last too influential.

The repair is to remove duplicate current rules, identify user decisions explicitly and keep historical drafts in history. A changed tone must not silently expand the offer. A passing copy lint checks a small set of strings and punctuation, not buyer understanding, factual accuracy or humane writing.

## Source use and weight

| Source | Use now | Limit |
| --- | --- | --- |
| [Writing Tips](https://docs.google.com/document/d/1BJcaPx5N77r76g3L8CsRyQCFSZP2BsmtyHbIqVHGRT8/edit) | Familiar situation, practical tension and the workday after the intervention | Health-coaching identity promises and invented customer thoughts do not transfer. |
| [Psychology](https://docs.google.com/document/d/1D63OltORoK08ocfjuNZgAVubNttKJARpjdPPg7wUd6E/edit) | Hotel team has a goal; InnMetric takes a defined role; the requested outcome makes the enquiry useful | The egg anecdote does not validate adding form friction. The website is not a compulsory six-scene movie. |
| [Email & webcopy guidelines](https://docs.google.com/document/d/1uPuQKdGHzW9pshJWaZBsq8deFfz7JRFfilOSmPndDgE/edit) | Front-load, cut repetition, select the reader and explain the next step | Do not substitute "own" everywhere or presume agreement with "when we work together". |
| [Implementation suggestions](https://docs.google.com/document/d/1WcQQv5zdqA4I4ZMpwHhEf7DzMSF49seO5F4N2LqK1VQ/edit) | Service beside the hook, clear handover and no approver name before an enquiry | Its older public strings and form are superseded. |
| GTM's `ready-to-send-emails` | The four recorded observations and each email's specific question | The repeated founder paragraph is not a house-voice standard. These are earlier observations, not new audits. |
| [blader/humanizer](https://github.com/blader/humanizer) | Remove forced closers, unnecessary defenses and stock phrasing while preserving facts | Removing a word pattern does not establish that the result is good copy. |
| [humanizer-stack](https://github.com/NulightJens/humanizer-stack) | Review the outline separately for repeated explanations and identical paragraph shapes | Its own README limits the research transfer from long fiction to short nonfiction. Do not import tangents, withheld answers or detector scores into this website's acceptance criteria. |

The contact lists and scraper exports in Copy Ideas are not writing samples. They are not imported into Git or used to invent new hotel-specific emails. The older Drive Intent is historical. Original Drive sources are preserved.

## What this review cannot prove

Neither agent has hotel-buyer comprehension results. Cursor's visual checks establish layout at the commits it checked, not whether a GM understands or wants the service. This pass can improve the draft, correct claims and make review repeatable. It cannot honestly claim a conversion lift or audience approval.
