export type WorkspaceId = "home" | "fan" | "whatsapp" | "case";
export type FanTab = "timeline" | "events" | "insights" | "journey" | "service";
export type ActId = 1 | 2 | 3 | 4;
export type HighlightId =
  | "search"
  | "summary"
  | "timeline-ticketing"
  | "timeline-merch"
  | "eoi"
  | "segment"
  | "journey"
  | "whatsapp"
  | "case-summary"
  | "nba"
  | "context";

export type DemoBeat = {
  id: string;
  act: ActId;
  label: string;
  workspace: WorkspaceId;
  tab?: FanTab;
  highlight?: HighlightId;
  say: string;
};

export const BEATS: DemoBeat[] = [
  {
    id: "open",
    act: 1,
    label: "Open Alex Chen",
    workspace: "home",
    highlight: "search",
    say: "For a modern club like Tottenham Spur, every fan is a Spur. Historically that data lived in silos — ticketing, retail, venue hire, and service.",
  },
  {
    id: "summary",
    act: 1,
    label: "Supporter summary",
    workspace: "fan",
    tab: "timeline",
    highlight: "summary",
    say: "With Spurs360 powered by Data 360, the club has one unified view of every fan — whether they are buying a match ticket, grabbing a beer at half-time, or booking a corporate conference.",
  },
  {
    id: "tickets",
    act: 1,
    label: "Ticketing feed",
    workspace: "fan",
    tab: "timeline",
    highlight: "timeline-ticketing",
    say: "Ticketmaster is no longer a side system. Season membership, Indianapolis Colts v Washington Commanders, the BIGBANG world tour, and the JAŸ-Z show all sit on the same timeline.",
  },
  {
    id: "merch",
    act: 1,
    label: "Merchandise",
    workspace: "fan",
    tab: "timeline",
    highlight: "timeline-merch",
    say: "In-stadium POS and Commerce Cloud kit sales land on the same profile — including the customized 2026 home shirt from the Spurs Shop.",
  },
  {
    id: "eoi",
    act: 2,
    label: "Conference EOI",
    workspace: "fan",
    tab: "events",
    highlight: "eoi",
    say: "Tottenham Spur Stadium is an asset 365 days a year. Alex submitted a website enquiry for venue hire — a 200-person Q4 corporate summit.",
  },
  {
    id: "segment",
    act: 2,
    label: "Segment & insights",
    workspace: "fan",
    tab: "insights",
    highlight: "segment",
    say: "Data 360 calculated a high engagement score and placed Alex into a dynamic audience: Spur — Corporate Event Prospects. Matchday regular, and a corporate VIP prospect.",
  },
  {
    id: "journey",
    act: 2,
    label: "B2B journey",
    workspace: "fan",
    tab: "journey",
    highlight: "journey",
    say: "That segment triggered a Marketing Cloud journey: a personalized invitation from the B2B sales team for a guided tour of the Executive Suites ahead of the next home match.",
  },
  {
    id: "whatsapp",
    act: 3,
    label: "Ask Spurs",
    workspace: "whatsapp",
    highlight: "whatsapp",
    say: "When ticket drops and matchdays hit, volumes spike. Ask Spurs — the club’s always-on online agent — transfers a West Stand Lower seat through Ticketmaster with zero human agent time.",
  },
  {
    id: "case",
    act: 3,
    label: "Priority case",
    workspace: "case",
    highlight: "case-summary",
    say: "High-touch issues still reach a human — with full context. Agentforce flags that Alex is One Spur Gold with an active £15,000 corporate event enquiry.",
  },
  {
    id: "nba",
    act: 3,
    label: "Next Best Action",
    workspace: "case",
    highlight: "nba",
    say: "One click dispatches a stadium-warehouse replacement and issues complimentary VIP Lounge passes for the next match. The relationship is protected before summit week.",
  },
  {
    id: "context",
    act: 4,
    label: "Next-day memory",
    workspace: "whatsapp",
    highlight: "context",
    say: "The next morning, Alex realises the food and drinks package never moved with the seat. He opens Ask Spurs again — it already knows the colleague was Priya Nair. Context travels with the supporter, not the chat window.",
  },
];

export const ACTS = [
  { id: 1 as const, title: "Unified profile", subtitle: "Single source of truth" },
  { id: 2 as const, title: "Stadium 365", subtitle: "Beyond matchday" },
  { id: 3 as const, title: "Agentic service", subtitle: "AI + human" },
  { id: 4 as const, title: "Agentic context", subtitle: "Memory across sessions" },
];

export const ALEX = {
  id: "alex-chen",
  name: "Alex Chen",
  personAccountId: "001Spurs000AC",
  email: "alex.chen@northbridge.co.uk",
  phone: "+44 7700 900418",
  company: "Northbridge Advisory",
  role: "Director of Client Experience",
  location: "Manchester, UK",
  memberSince: "August 2020",
  tenure: "5+ years",
  tier: "One Spur Gold",
  membership: "Annual Season Member",
  seat: "West Stand Lower",
  seatDetail: "Block 105 | Row 10 | Seat 88",
  ltv: 4850,
  ltvLabel: "£4,850",
  engagement: 91,
  segment: "Matchday Regular & Corporate VIP Prospect",
  dynamicSegment: "Spur — Corporate Event Prospects",
  inquiryValue: 15000,
  inquiryValueLabel: "£15,000",
};

export const LTV_SPLIT = [
  { label: "Ticketing", value: 3240, color: "bg-navy-mid" },
  { label: "Merchandise", value: 610, color: "bg-crimson" },
  { label: "Venue hire interest", value: 1000, color: "bg-tier" },
];

export type TimelineChannel =
  | "ticketing"
  | "merchandise"
  | "venue"
  | "engagement"
  | "service";

export type TimelineItem = {
  id: string;
  channel: TimelineChannel;
  source: string;
  title: string;
  detail: string;
  amount?: string;
  date: string;
  time?: string;
  highlight?: HighlightId;
};

export const TIMELINE: TimelineItem[] = [
  {
    id: "t-metro",
    channel: "ticketing",
    source: "Ticketmaster",
    title: "Indianapolis Colts v Washington Commanders",
    detail:
      "NFL London Game · 4 Oct 2026 · season membership seat scanned · West Stand Lower · Block 105 | Row 10 | Seat 88.",
    date: "4 Oct 2026",
  },
  {
    id: "t-hospitality-transfer",
    channel: "service",
    source: "Ask Spurs",
    title: "Food & drinks package transferred",
    detail:
      "Ask Spurs recalled Priya Nair from yesterday’s seat transfer and moved the One Spur Gold hospitality package to her ticket — Alex did not re-state the colleague’s name.",
    date: "Today",
    time: "Live",
  },
  {
    id: "t-transfer-case",
    channel: "service",
    source: "Ask Spurs",
    title: "Ticket transfer resolved autonomously",
    detail:
      "West Stand Lower seat, Block 105 | Row 10 | Seat 88, for 4 Oct · Indianapolis Colts v Washington Commanders reassigned to Priya Nair. Ticketmaster wallet updated. Zero human handle time.",
    date: "Yesterday",
    time: "18:41",
  },
  {
    id: "t-wifi",
    channel: "engagement",
    source: "Stadium Wi-Fi",
    title: "Authenticated on Tottenham Spur Stadium Wi-Fi",
    detail: "West Stand concourse · session 48 min · matched to One Spur Gold profile.",
    date: "4 Sep 2026",
    time: "19:12",
  },
  {
    id: "t-app",
    channel: "engagement",
    source: "Spurs Official",
    title: "Matchday check-in",
    detail: "Arrived 62 minutes before kick-off. Loyalty +40 pts · food & beverage offer served.",
    date: "4 Sep 2026",
    time: "18:28",
  },
  {
    id: "t-email",
    channel: "engagement",
    source: "Marketing Cloud",
    title: "Opened hospitality preview email",
    detail: "Executive Suites tour invitation · clicked ‘Book a 20-minute walkthrough’.",
    date: "2 Sep 2026",
  },
  {
    id: "t-shirt",
    channel: "merchandise",
    source: "Spurs Shop POS",
    title: "Customized 2026 Home Shirt",
    detail: "In-person purchase · heat-pressed CHEN 8 · adult authentic kit.",
    amount: "£89.00",
    date: "28 Aug 2026",
  },
  {
    id: "t-festival",
    channel: "ticketing",
    source: "Ticketmaster",
    title: "BIGBANG world tour",
    detail: "2 × tickets · concert at Tottenham Spur Stadium.",
    amount: "£190.00",
    date: "15 Aug 2026",
  },
  {
    id: "t-loyalty",
    channel: "engagement",
    source: "Loyalty",
    title: "Redeemed 1,200 Spur points",
    detail: "Half-time hospitality upgrade voucher applied at West Stand bar.",
    date: "10 Aug 2026",
  },
  {
    id: "t-eoi",
    channel: "venue",
    source: "Web-to-Lead",
    title: "EOI · Stadium venue hire",
    detail:
      "Tottenham Spur Stadium Venue Hire — Q4 Corporate Summit. 200 guests. Lead created on the Person Account.",
    amount: "£15,000 est.",
    date: "1 Aug 2026",
  },
  {
    id: "t-outerwear-online",
    channel: "merchandise",
    source: "Commerce Cloud",
    title: "Spurs heritage puffer — online",
    detail: "Shipped to Northbridge Advisory, Spinningfields. Repeat kit buyer.",
    amount: "£145.00",
    date: "20 Jul 2026",
  },
  {
    id: "t-rugby",
    channel: "ticketing",
    source: "Ticketmaster",
    title: "JAŸ-Z",
    detail: "2 × tickets · 2026 N17 show at Tottenham Spur Stadium.",
    amount: "£240.00",
    date: "12 Jul 2026",
  },
  {
    id: "t-season",
    channel: "ticketing",
    source: "Ticketmaster",
    title: "2026/27 One Spur Gold season pass",
    detail: "Annual season membership renewed · West Stand Lower, Block 105 | Row 10 | Seat 88 retained.",
    amount: "£1,850.00",
    date: "1 Jun 2026",
  },
  {
    id: "t-lounge",
    channel: "service",
    source: "Service Cloud",
    title: "VIP lounge access query",
    detail: "Human agent confirmed One Spur Gold lounge rights for corporate guests on matchday.",
    date: "18 May 2026",
  },
  {
    id: "t-outerwear-pos",
    channel: "merchandise",
    source: "Spurs Shop POS",
    title: "Rain shell — in stadium",
    detail: "Purchased 12 minutes after full time · linked via membership barcode.",
    amount: "£72.00",
    date: "2 Apr 2026",
  },
];

export const CHANNEL_META: Record<
  TimelineChannel,
  { label: string; blurb: string }
> = {
  ticketing: { label: "Ticketing", blurb: "Ticketmaster" },
  merchandise: { label: "Merchandise", blurb: "POS + Commerce Cloud" },
  venue: { label: "Stadium & venue", blurb: "EOIs & hire" },
  engagement: { label: "Supporter engagements", blurb: "App, Wi-Fi, email, loyalty" },
  service: { label: "Service history", blurb: "Agentforce + human" },
};

export const EOI = {
  id: "lead-88421",
  name: "Tottenham Spur Stadium Venue Hire — Q4 Corporate Summit",
  origin: "tottenhamhotspurstadium.com/venue-hire",
  status: "Active — qualified",
  guests: 200,
  dateWindow: "18–20 November 2026",
  value: "£15,000",
  owner: "Helena Voss · B2B Stadium Sales",
  company: "Northbridge Advisory",
  notes:
    "Alex requested a corporate conference suite for a 200-person company event. Interested in pitch-view rooms, branded catering, and a short stadium tour for visiting clients.",
};

export const JOURNEY_STEPS = [
  {
    id: "j1",
    kicker: "Data 360",
    title: "Entered dynamic segment",
    body: "Spur — Corporate Event Prospects. Rule: Gold+ · LTV > £3k · open venue EOI · engagement ≥ 80.",
  },
  {
    id: "j2",
    kicker: "Calculated insight",
    title: "High-engagement corporate buyer",
    body: "Matchday regular with non-football ticket spend and an active £15k hire enquiry — treated as B2B, not just a fan.",
  },
  {
    id: "j3",
    kicker: "Marketing Cloud",
    title: "Journey triggered",
    body: "Corporate Suite Invitation · owned by B2B Sales · holdout excluded.",
  },
  {
    id: "j4",
    kicker: "Personalized send",
    title: "Executive Suites tour invite",
    body: "Guided tour ahead of Indianapolis Colts v Washington Commanders on 4 October. Helena Voss copied as relationship owner.",
  },
  {
    id: "j5",
    kicker: "In progress",
    title: "Awaiting walkthrough",
    body: "Email opened · CTA clicked · tour slot not yet booked. Service teams see the same state.",
  },
];

export const AGENT_THREAD = [
  {
    id: "m1",
    from: "alex" as const,
    text: "I can't make the match next Sunday. Can I transfer my West Stand Lower seat to my colleague?",
  },
  {
    id: "m2",
    from: "agent" as const,
    text: "Of course, Alex — I can see your One Spur Gold season seat: West Stand Lower, Block 105 | Row 10 | Seat 88, for Indianapolis Colts v Washington Commanders on 4 October. What's your colleague's name and email?",
  },
  {
    id: "m3",
    from: "alex" as const,
    text: "Priya Nair — priya.nair@northbridge.co.uk",
  },
  {
    id: "m4",
    from: "system" as const,
    text: "Verifying One Spur Gold status · calling Ticketmaster · re-assigning digital wallet ticket",
  },
  {
    id: "m5",
    from: "agent" as const,
    text: "Done. Priya will get a confirmation link and the ticket in her wallet. Your Spurs360 record is updated in real time — no further action needed. Enjoy the weekend.",
  },
];

export const AGENT_LOG = [
  { label: "Identity", value: "One Spur Gold verified · 5+ year member" },
  { label: "Ticketmaster API", value: "West Stand Lower · Block 105 | Row 10 | Seat 88 reassigned → Priya Nair" },
  { label: "Data 360", value: "Unified timeline event written" },
  { label: "Human handle time", value: "0 min" },
];

export const CONTEXT_THREAD = [
  {
    id: "c1",
    from: "alex" as const,
    text: "Hi — I transferred my seat yesterday but I forgot the food and drinks package. Can you move that too?",
  },
  {
    id: "c2",
    from: "system" as const,
    text: "Conversation memory loaded · yesterday’s transfer to Priya Nair",
  },
  {
    id: "c3",
    from: "agent" as const,
    text: "Of course, Alex. Yesterday we moved your West Stand Lower seat, Block 105 | Row 10 | Seat 88, for Indianapolis Colts v Washington Commanders on 4 October to Priya Nair — priya.nair@northbridge.co.uk. I’ll attach the One Spur Gold food & drinks package to her ticket as well. Same colleague?",
  },
  {
    id: "c4",
    from: "alex" as const,
    text: "Yes please — that’s her.",
  },
  {
    id: "c5",
    from: "system" as const,
    text: "Ticketmaster hospitality · package reassigned to Priya Nair",
  },
  {
    id: "c6",
    from: "agent" as const,
    text: "Done. Priya now has the seat and the matchday food & drinks package. Nothing else is left on your membership for Sunday.",
  },
];

export const CONTEXT_MEMORY = [
  { label: "Colleague", value: "Priya Nair", source: "Yesterday’s chat" },
  { label: "Email", value: "priya.nair@northbridge.co.uk", source: "Yesterday’s chat" },
  { label: "Seat", value: "West Stand Lower · Block 105 | Row 10 | Seat 88", source: "Ticketmaster + profile" },
  { label: "Event", value: "4 Oct · Indianapolis Colts v Washington Commanders", source: "Prior session" },
  { label: "Still on Alex", value: "Food & drinks package", source: "Detected gap" },
];

export const CONTEXT_LOG = [
  { label: "Memory hit", value: "Colleague = Priya Nair (not re-asked)" },
  { label: "Ticketmaster API", value: "Hospitality package → Priya Nair" },
  { label: "Data 360", value: "Session 2 written to unified timeline" },
  { label: "Human handle time", value: "0 min" },
];

export const CASE_RECORD = {
  number: "0003847",
  subject: "Damaged corporate merchandise — needed before stadium event",
  origin: "Email · alex.chen@northbridge.co.uk",
  status: "New · High",
  opened: "Today · 09:14",
  product: "12 × customized 2026 Home Shirts + 4 × heritage puffers",
  detail:
    "Order for Northbridge client hosting arrived with crushed collars and a split puffer seam. Alex needs presentation-ready kit before the Q4 summit walkthrough at Tottenham Spur Stadium.",
  summary: [
    "Alex Chen (One Spur Gold, 5+ years) reported damaged corporate merchandise required before an upcoming stadium event.",
    "Active venue enquiry: Tottenham Spur Stadium Venue Hire — Q4 Corporate Summit, 200 guests, £15,000 estimated value.",
    "Recommended: warehouse replacement today and complimentary VIP Lounge passes for the next home match to protect the B2B relationship.",
  ],
  alert:
    "Alex is One Spur Gold with an active £15,000 corporate event enquiry. High priority.",
};

export const HOME_STATS = [
  { label: "Unified supporter profiles", value: "1.28M" },
  { label: "Data 360 streams live", value: "14" },
  { label: "Stadium utilisation (non-match)", value: "214 days" },
  { label: "Agentforce containment", value: "73%" },
];

export const RECENT_FANS = [
  ALEX,
  {
    id: "priya",
    name: "Priya Nair",
    tier: "One Spur",
    seat: "Guest transfer pending",
    company: "Northbridge Advisory",
    locked: true,
  },
  {
    id: "marcus",
    name: "Marcus Webb",
    tier: "Spurs Member",
    seat: "East Stand, Family",
    company: "Webb Logistics",
    locked: true,
  },
];
