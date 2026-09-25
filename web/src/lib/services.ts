export const SERVICE_OFFERS = [
  {
    id: "baseline",
    index: "01",
    title: "Distribution Baseline Audit",
    state: "The booking result is wrong. The cause is unclear.",
    body: "We follow the affected room or rate through your setup and compare it with what guests see. You get findings to act on; live corrections are a separate scope.",
    points: [
      "Relevant systems, channel connections, mappings and restrictions reviewed",
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
    body: "We check agreed channels on a set schedule and compare each result with what your hotel intends to sell. New and returning issues go into the record for follow-up.",
    points: [
      "Agreed rates, availability and mappings checked",
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
  "Teams seeking system installation, revenue management or OTA content and marketing",
];

export const SERVICE_BOUNDARIES = [
  {
    title: "Your setup stays in place",
    body: "We work in your existing PMS, channel manager, booking engine and OTA accounts. First-time installation and system replacement are outside this service.",
  },
  {
    title: "Your hotel sets the rates",
    body: "Pricing, yield and revenue management stay with your team. We don't offer standalone rate-plan redesign.",
  },
  {
    title: "We focus on bookability",
    body: "OTA listing content, photos, ranking, advertising, social media and review responses need a different service.",
  },
];
