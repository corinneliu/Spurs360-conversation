# Spurs360 — conversation notes

Saved 1 October 2026 so this work can be reviewed.

Live site: https://spurs360.vercel.app

Local project: `/Users/corinneliu/Spurs360`

Source repo that was cloned: https://github.com/martinstephens/Spurs360

The original demo is still at https://monarch360.vercel.app. This work is a separate Vercel project.

## What was asked

Rebrand the cloned Monarch360 / Silvercity Monarchs demo so it fits Tottenham Hotspur. Keep the same pages, layout, and click-through. Change branding, the club name, and event names. Then publish it on Vercel so it can be walked the same way as the Monarchs demo.

Reference sites:

- https://www.tottenhamhotspur.com/
- https://www.tottenhamhotspurstadium.com/

Later in the same chat, the copy, seat, fixture, agent name, and chat logo were updated and published again.

## What stayed the same

The presenter console is unchanged in structure: home, fan profile, timeline, events, insights, journey, WhatsApp-style chat, and case. Alex Chen, Priya Nair, and the presenter bar (acts 1–4, arrow keys) are the same story. Salesforce product names (Data 360, Ticketmaster, Agentforce, Marketing Cloud) were left as they were.

## Branding

- Header title: Tottenham Hotspur. That is the only place the word Hotspur was put back. Everywhere else in the app says Spur (Tottenham Spur, One Spur Gold, One Spur, Spurs Member).
- Product name: Spurs360, replacing Monarch360.
- Colours: crest navy `#000a3c` on the header, club navy `#132257` elsewhere, white surfaces.
- Header logo: the Tottenham Hotspur crest (navy square, white cockerel) in the top left. The header bar uses the same navy as the crest, so the square does not sit in a lighter box.
- Agent chat logo: the same crest, cropped to a circle, on Agentic Service and Agentic Context. The top-bar crest stays square.
- Membership labels: One Spur Gold, One Spur, and Spurs Member.
- Agent name: Ask Spurs. It was Agent Silver, then Agent Lily, then Agent Ask Spurs. The narrow side icon is labelled Ask so it fits.

## Seat

Alex’s seat reads West Stand Lower first, then Block 105 | Row 10 | Seat 88. That replaced West Stand, Tier 1 / Block W12 · Row 8 · Seat 14.

## Events

Taken from the stadium site, in the same story slots:

- The ticket Alex transfers is the Indianapolis Colts v Washington Commanders NFL London Game on 4 October 2026. It replaced the NFL 2026 London Game on 12 September. In All activity and Ticketing it sits first, because that list is newest first.
- The summer concert is the BIGBANG world tour (15 August 2026).
- The second show is JAŸ-Z (12 July 2026).
- The season pass is 1 June 2026.
- The conference enquiry is Tottenham Spur Stadium venue hire for a Q4 corporate summit.

Karol G was left off the timeline because that show is listed for 2027 and the demo dates are in 2026.

## Type

- Body text: Outfit, the same face the club site uses for body copy.
- Section titles: Barlow, standing in for Spurs Text.
- Large headline and the club name in the header: Barlow Condensed, standing in for Spurs Display.

Spurs Display and Spurs Text are custom club fonts and were not copied into the project.

## How it was published

The site is a new Vercel project, `spurs-demo/spurs360`, aliased to https://spurs360.vercel.app. It was not linked over the Monarchs site. GitHub auto-deploy was not connected, because the Vercel account does not yet have a GitHub login connection for that repo. Later updates were published from the local folder after each “publish” confirmation.

The latest live version includes the 4 October Colts v Commanders fixture, the Ask Spurs name, and the circular crest in the agent chat.

The rebrand is in the local project and on the live site. It has not been committed or pushed to https://github.com/martinstephens/Spurs360.
