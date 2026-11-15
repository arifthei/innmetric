// Public copy approved in the InnMetric one-page overview, 15 November 2026.
// Keep these words together; editorial notes from the source are not site copy.
export const OVERVIEW = {
  headline: "More bookings. Lower selling costs.",
  intro: "We find and fix where hotels lose bookings and margin.",
  method: "Hotel specialists + AI checks. Hotel-approved fixes. Measured results.",
  hotelLabel: "B2B / Hotel services",
  hotelBody: "Hotels pay for fixes and monitoring subscriptions.",
  tourismLabel: "B2G / Proposed tourism programme",
  fundNote: "InnMetric provides services. The department controls the pooled money.",
  question: "Could one hotel's savings help improve another?",
  steps: [
    { title: "Verified savings", detail: "Agreed share collected" },
    { title: "Tourism Department", detail: "Holds and allocates the fund" },
    { title: "Hotel improvements", detail: "Local suppliers get paid" },
  ],
} as const;

export const BOOKING_PROBLEMS = [
  {
    name: "Search",
    problem: "Guests find resellers first.",
    fix: "Improve visibility and direct links.",
    aim: "More guests reach the hotel.",
  },
  {
    name: "Booking",
    problem: "Guests hit booking failures.",
    fix: "Fix availability, connections and checkout.",
    aim: "More bookings completed.",
  },
  {
    name: "Pricing",
    problem: "Other sites undercut the hotel.",
    fix: "Compare equivalent offers. Trace and correct errors.",
    aim: "Fewer pricing errors. Better margin control.",
  },
] as const;
