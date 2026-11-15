export const SERVICE_OFFERS = [
  {
    id: "baseline",
    index: "01",
    title: "Distribution Baseline Audit",
    state: "Guests struggle to find you, book or get the right price.",
    body: "We follow the affected search link, booking step or rate through your setup and compare it with what guests see. You get findings to act on; live corrections are a separate scope.",
    points: [
      "Agreed search links, website content, system connections, mappings and restrictions reviewed",
      "Booking evidence with the room, dates, occupancy and terms recorded",
      "Prioritized actions, unanswered questions and checks for any proposed correction",
    ],
  },
  {
    id: "repair",
    index: "02",
    title: "Approved Repair Sprint",
    state: "You have findings. The corrections need doing.",
    body: "We review the findings with you, make the corrections you approve and repeat the booking checks. You can bring findings from our audit or your own investigation.",
    points: [
      "Named approval and reversal instructions for each live change",
      "Before-and-after results for the same room, dates and conditions",
      "A handover of completed changes, open issues and vendor actions",
    ],
  },
  {
    id: "control",
    index: "03",
    title: "Ongoing Distribution Control",
    state: "You need to catch problems that return.",
    body: "A monitoring subscription checks agreed links and channels on a set schedule. Our specialists use manual checks and AI-assisted comparisons to flag new and returning issues for review.",
    points: [
      "Agreed booking steps, rates, availability and mappings checked",
      "A dated history of findings and verified corrections",
      "Check frequency, channels and any tools specified in your agreement",
    ],
  },
];

export const FIT = [
  "Independent hotels, resorts, aparthotels and small groups selling direct and on at least two OTAs",
  "An existing PMS, channel manager and booking engine to investigate",
  "A hotel contact who can arrange access and involve the person approving changes",
];

export const NOT_FIT = [
  "Large international chains whose central team already owns distribution",
  "Individually listed homes that are not hotel-operated",
  "Teams seeking first-time system installation or a revenue-management takeover",
];

export const SERVICE_BOUNDARIES = [
  {
    title: "Your setup stays in place",
    body: "We work with your website, PMS, channel manager, booking engine and OTA accounts. Booking and payment-provider issues are investigated with the relevant vendor. First-time installation and system replacement remain outside this service.",
  },
  {
    title: "Your hotel sets the rates",
    body: "Pricing, yield and revenue management stay with your team. We don't offer standalone rate-plan redesign.",
  },
  {
    title: "The direct booking path is part of the work",
    body: "We improve direct search visibility and links, correct website room content and repair booking connections within the agreed scope. Wider advertising campaigns, photography, social media and review responses need a separate provider.",
  },
];
