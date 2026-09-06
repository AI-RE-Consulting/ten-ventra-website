export interface Property {
  id: string;
  kind: "off" | "on";
  lng: number;
  lat: number;
  address: string;
  cityState: string;
  featured?: boolean;
  justListed?: boolean;
  highlight: string;
  stats: { label: string; value: string }[];
  scores: { label: string; value: number; tone: "red" | "green" }[];
  report?: { src: string; cta: string };
}

// All properties are fictional: real street names, invented numbers and figures.
// Every property satisfies the chapter's full active filter stack; the
// distress signals are the property-specific part. A property's report (an ADU
// feasibility diagram in /public/reports) must agree with its ADU stat and its
// lot dimensions. Legal grounding (verified 2026-08-13): CA SB-1211 allows
// detached ADUs on existing multifamily lots, so LA reports sit on multifamily
// listings; AZ HB 2720 (A.R.S. § 9-461.18) defines an ADU relative to a
// single-family dwelling on the same lot and Phoenix prohibits ADUs on
// multifamily lots, so the Phoenix act is single-family listings and its
// report cites HB 2720.
//
// Pin placement (tuned 2026-09-05 against the chapter rests in lib/cameraPath): on
// phones the rail is a translucent bottom sheet over the lower 58vh and anything
// behind it glows through, so every pin must sit in the visible strip above the
// sheet or be fully off-screen; on desktop every pin must clear the left rail and
// the set should read as a spread, non-collinear cluster. Re-check both layouts
// after moving a pin or retuning the camera.
export const PROPERTIES: Property[] = [
  // — Off-market · central Los Angeles, Mid-City to West Adams (fictional) —
  {
    id: "off-1",
    kind: "off",
    lng: -118.3223,
    lat: 34.0482,
    address: "1256 S Victoria Ave",
    cityState: "Los Angeles, CA 90019",
    featured: true,
    highlight: "Owner death on title · 8 mo",
    stats: [
      { label: "Units", value: "12" },
      { label: "Owner age", value: "78" },
      { label: "SB-1211 ADU", value: "3 detached addable" },
      { label: "SB-9 lot split", value: "Eligible" },
      { label: "Owner death on title", value: "8 mo" },
      { label: "Missed property tax", value: "$25,600" },
    ],
    scores: [
      { label: "Distress", value: 61, tone: "red" },
      { label: "Buy-box", value: 94, tone: "green" },
    ],
    report: { src: "/reports/adu-3-75x140.svg", cta: "View SB-1211 feasibility report" },
  },
  {
    id: "off-2",
    kind: "off",
    lng: -118.3549,
    lat: 34.0481,
    address: "1258 S Cochran Ave",
    cityState: "Los Angeles, CA 90019",
    highlight: "Vacancy · 3 of 10 units",
    stats: [
      { label: "Units", value: "10" },
      { label: "Owner age", value: "69" },
      { label: "SB-1211 ADU", value: "2 detached addable" },
      { label: "SB-9 lot split", value: "Eligible" },
      { label: "Vacancy", value: "3 units" },
    ],
    scores: [
      { label: "Distress", value: 44, tone: "red" },
      { label: "Buy-box", value: 88, tone: "green" },
    ],
  },
  {
    id: "off-3",
    kind: "off",
    lng: -118.3388,
    lat: 34.0555,
    address: "958 S Longwood Ave",
    cityState: "Los Angeles, CA 90019",
    highlight: "Tax delinquent · 2 yr",
    stats: [
      { label: "Units", value: "12" },
      { label: "Owner age", value: "82" },
      { label: "SB-1211 ADU", value: "Eligible" },
      { label: "SB-9 lot split", value: "Lot split OK" },
      { label: "Tax delinquent", value: "2 yr" },
    ],
    scores: [
      { label: "Distress", value: 72, tone: "red" },
      { label: "Buy-box", value: 81, tone: "green" },
    ],
  },
  {
    id: "off-4",
    kind: "off",
    lng: -118.2987,
    lat: 34.0317,
    address: "2536 S Normandie Ave",
    cityState: "Los Angeles, CA 90007",
    highlight: "Code enforcement · 9 wk",
    stats: [
      { label: "Units", value: "14" },
      { label: "Owner age", value: "67" },
      { label: "SB-1211 ADU", value: "Eligible" },
      { label: "SB-9 lot split", value: "Eligible" },
      { label: "Code enforcement", value: "9 wk" },
    ],
    scores: [
      { label: "Distress", value: 55, tone: "red" },
      { label: "Buy-box", value: 90, tone: "green" },
    ],
  },
  // — On-market · central Phoenix single-family with HB 2720 ADU upside (fictional) —
  {
    id: "on-1",
    kind: "on",
    lng: -112.0716,
    lat: 33.5128,
    address: "5237 N 2nd St",
    cityState: "Phoenix, AZ 85012",
    featured: true,
    highlight: "$585K · 6,500 sq ft · 2 ADUs",
    stats: [
      { label: "Price", value: "$585K" },
      { label: "Lot", value: "6,500 sq ft" },
      { label: "Built", value: "1951" },
      { label: "HB 2720 ADU", value: "2 ADUs addable" },
      { label: "Listed", value: "9 days ago" },
    ],
    scores: [{ label: "Buy-box", value: 91, tone: "green" }],
    report: { src: "/reports/adu-2-130x50.svg", cta: "View HB 2720 feasibility report" },
  },
  {
    id: "on-2",
    kind: "on",
    lng: -112.0979,
    lat: 33.4877,
    address: "3416 N 18th Ave",
    cityState: "Phoenix, AZ 85015",
    highlight: "$740K · 9,200 sq ft · 2 ADUs",
    stats: [
      { label: "Price", value: "$740K" },
      { label: "Lot", value: "9,200 sq ft" },
      { label: "Built", value: "1946" },
      { label: "HB 2720 ADU", value: "2 ADUs addable" },
      { label: "Listed", value: "14 days ago" },
    ],
    scores: [{ label: "Buy-box", value: 87, tone: "green" }],
  },
  {
    id: "on-3",
    kind: "on",
    lng: -112.0497,
    lat: 33.4989,
    address: "1522 E Campbell Ave",
    cityState: "Phoenix, AZ 85014",
    justListed: true,
    highlight: "$865K · 10,400 sq ft · 2 ADUs",
    stats: [
      { label: "Price", value: "$865K" },
      { label: "Lot", value: "10,400 sq ft" },
      { label: "Built", value: "1939" },
      { label: "HB 2720 ADU", value: "2 ADUs addable" },
      { label: "Listed", value: "Today" },
    ],
    scores: [{ label: "Buy-box", value: 83, tone: "green" }],
  },
  {
    id: "on-4",
    kind: "on",
    lng: -112.0228,
    lat: 33.4773,
    address: "2841 E Palm Ln",
    cityState: "Phoenix, AZ 85008",
    justListed: true,
    highlight: "$598K · 8,700 sq ft · 2 ADUs",
    stats: [
      { label: "Price", value: "$598K" },
      { label: "Lot", value: "8,700 sq ft" },
      { label: "Built", value: "1954" },
      { label: "HB 2720 ADU", value: "2 ADUs addable" },
      { label: "Listed", value: "2 days ago" },
    ],
    scores: [{ label: "Buy-box", value: 78, tone: "green" }],
  },
];

export const OFF_FILTERS = [
  { label: "8+ units", on: true },
  { label: "Signs of distress", on: true },
  { label: "SB-1211 ADU", on: true },
  { label: "SB-9 townhouse", on: true },
  { label: "Owner 65+", on: true },
];

export const ON_FILTERS = [
  { label: "Single-family", on: true },
  { label: "$450–900K", on: true },
  { label: "HB 2720 ADU", on: true },
  { label: "Lot 6,000+ sq ft", on: true },
  { label: "Listed < 30 days", on: true },
];
