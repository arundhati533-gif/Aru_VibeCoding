# JETFLIX

**A title-inspired trip planning prototype.** Pick a movie, TV show, or book, explore places associated with it, and turn selected stops into a draft day-by-day itinerary. JETFLIX is a client-side first cut built to test the product question in the [PRD](PRD.md): can a fan move from a title idea to a useful trip draft in minutes?

## The user problem

Entertainment fans often know *what* inspired them to travel before they know *where* to go. Moving from a remembered title to possible locations, then organizing those places into a trip, takes several disconnected searches. The primary user is a fan looking for a quick starting point; casual and companion trip planners are secondary audiences. The product favors a guided draft over exhaustive travel controls.

## What the prototype does

1. **Find a title.** Search a local catalog of 12 curated titles. The search handles exact names, aliases, partial matches, and close misspellings, then presents a result for confirmation or suggestions. If no result fits, a manual continuation path is available.
2. **Choose places.** Review title-linked filming or setting location cards with descriptions and source *labels*. Locations start selected; the user can deselect them, but must keep at least one to proceed.
3. **Set basic constraints.** Enter a departure city and start/end dates. The form requires a city and an end date after the start date.
4. **Review a draft.** The app constructs a day-by-day itinerary from the selected locations and dates, with timed activity cards for stops, food, local attractions, and travel framing. Days can be expanded or collapsed.

A progress indicator, back navigation, start-over action, and loading skeletons guide the sequence. The UI groups this into search, location, preferences, and itinerary stages; the displayed step numbers do not represent nine separate forms.

## Product choices and trade-offs

| Choice | Reasoning | Boundary |
| --- | --- | --- |
| Curated title and location data | Makes the inspiration-to-plan journey demonstrable without catalog or travel integrations. | Coverage is narrow; location entries and source labels are stored in code, not retrieved or verified live. |
| Alias, substring, and edit-distance matching | Gives users a path through typos and alternate title names. | Matches are heuristic; a short or ambiguous query can surface the wrong title, so the user confirms it. |
| Manual continuation for unknown titles | Avoids a hard stop when the catalog misses a query. | It may use generic cinema-related places, which are **not** confirmed locations for that title. |
| Select stops before asking for dates | Lets the user evaluate whether the destination is interesting before filling out a form. | The planner does not assess whether the selected stops fit the available days. |
| Rule-based itinerary | Produces an inspectable draft quickly from local data. | Activity times, restaurants, and transport text are illustrative, not bookings or feasibility checks. |

## How success would be evaluated

These are **intended measures from the PRD, not observed results**. The north-star is itinerary completion rate: the share of sessions that reach a generated itinerary. Instrumenting the search → title confirmation → location selection → preference submission → itinerary funnel would show where users drop off. Search success and manual fallback rates would reveal catalog and matching gaps. Median time from first query to itinerary has a **target of under three minutes**. Frontend errors, repeated form validation failures, and drop-off after location selection are guardrails.

The repository does not contain analytics instrumentation, a user study, or measured conversion or time-to-itinerary data. The target remains a hypothesis to test.

## Current limitations

- All title, location, attraction, and food content is bundled locally. Images use placeholder URLs, and source badges name sources without linking to evidence for each place.
- Search and itinerary loading states use timed delays. There is no live title, mapping, booking, pricing, or travel availability API, and no AI-driven personalization.
- Itinerary generation allocates locations by day in their stored order and reuses the final location when the trip has more days than stops. It does not account for transit duration, opening hours, geography, budget, or availability; cross-country schedules may be impractical.
- Trips live in component state. There are no accounts, saved trips, export, or sharing links. The displayed plan should be checked independently before travel.

## Run locally

Requires Node.js and npm. From the repository root:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. Try a catalog title such as **Titanic** or **Game of Thrones**, select locations, then enter dates and a departure city. To check the source build and lint rules:

```bash
npm run build
npm run lint
```

Built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons. Search logic is in [`src/lib/search.ts`](src/lib/search.ts); the curated data and itinerary rules are in [`src/data/mediaDatabase.ts`](src/data/mediaDatabase.ts); the flow is coordinated by [`src/components/Wizard.tsx`](src/components/Wizard.tsx).

## Next steps to test

1. Add event instrumentation and run task-based sessions to learn whether users can finish the draft in under three minutes, where they hesitate, and whether the result is useful.
2. Audit location provenance and title coverage. Clearly distinguish verified title-specific locations from generic fallback content; expand the catalog based on failed searches.
3. Add basic travel feasibility checks before promising a usable plan: distance, realistic transit, opening hours, and constraints between selected stops.
4. If the core flow proves valuable, evaluate save/share, a map with routing, richer preferences, and live travel integrations as separate investments. See [phase-2 candidates in the PRD](PRD.md#10-phase-2-candidates-not-committed).
