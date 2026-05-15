# JETFLIX — Product Requirements Document (First Cut)

## 1) Objective
Create a delightful, low-friction web experience that helps fans of movies/TV/books discover real-world filming or story locations and turn that inspiration into a draft multi-day trip itinerary.

This first cut focuses on validating core user value: **"Can a user go from title idea to usable itinerary in minutes?"**

---

## 2) Goals
1. **Fast inspiration-to-plan flow**
   - Users can go from entering a title to seeing a day-by-day itinerary in under 3 minutes.
2. **High confidence title matching**
   - Users can successfully find or confirm intended titles despite typos/aliases.
3. **Meaningful location discovery**
   - Users can review and choose from relevant filming/setting locations.
4. **Useful itinerary output**
   - Users receive a coherent, shareable itinerary draft with activities and day structure.
5. **Low cognitive load**
   - The step-by-step workflow feels clear, guided, and reversible (easy back/start-over).

---

## 3) Non-goals (for this phase)
1. **No booking transactions**
   - No flight/hotel booking, payments, or checkout.
2. **No live inventory/pricing**
   - No real-time travel availability, rates, or dynamic third-party offers.
3. **No account system**
   - No sign-in, profiles, saved trips, or sync across devices.
4. **No fully personalized AI planning**
   - Itinerary is rule/template-driven rather than deeply personalized ML.
5. **No broad content catalog guarantees**
   - Initial catalog is curated/static and limited in breadth.

---

## 4) Target Users
### Primary
- **Entertainment fans** who want to travel through the lens of a favorite title (movie/TV/book).

### Secondary
- **Casual trip planners** seeking unique destination ideas.
- **Companion planners** creating themed trips for friends/family.

### User characteristics
- Comfortable with simple web forms.
- Inspiration-led rather than logistics-led.
- Wants quick output over exhaustive control.

---

## 5) Jobs To Be Done (JTBD)
1. **When I’m inspired by a title**, I want to quickly find real places tied to it, so I can decide whether the trip feels exciting.
2. **When I’m uncertain about title matching**, I want suggestions/confirmation, so I can avoid planning around the wrong content.
3. **When I pick locations**, I want a clear way to choose what matters most, so my trip reflects my interests.
4. **When I enter basic travel preferences**, I want the app to generate a practical day plan, so I can start real trip planning immediately.
5. **When reviewing the result**, I want an easy-to-scan itinerary, so I can share or refine it quickly.

---

## 6) Scope

## In scope (MVP / first cut)
1. **Title search and match flow**
   - Input query, typo tolerance, alias support, and suggested titles.
2. **Title confirmation/manual fallback**
   - User can proceed even if exact match is unavailable.
3. **Location exploration and selection**
   - Card-based presentation of locations with source metadata.
4. **Trip preferences input**
   - Start date, end date, departure city, and validation.
5. **Itinerary generation and presentation**
   - Multi-day itinerary, per-day activities, expand/collapse interaction.
6. **Stepwise navigation**
   - Progress indicator, back behavior, start-over behavior.

## Out of scope (MVP / first cut)
1. Booking integrations (flights/hotels/experiences).
2. Accounts, persistence, cloud storage.
3. Collaborative planning/sharing links.
4. Maps/geospatial routing optimization.
5. Localization, currency conversion, advanced accessibility customization.
6. CMS/admin tools for non-technical content operations.

---

## 7) User Experience (UX)

## Experience principles
1. **Guided, not overwhelming** — one decision at a time.
2. **Forgiving input** — typo-tolerant search with suggestions.
3. **Visible progress** — user always knows where they are.
4. **Fast feedback** — immediate transitions and loading states.
5. **Reversible flow** — easy backtrack and restart.

## End-to-end journey
1. **Search**
   - User enters title; system attempts exact/alias/fuzzy match.
2. **Verify/confirm**
   - User confirms a match or proceeds manually.
3. **Discover locations**
   - User browses title-linked places and selects preferred stops.
4. **Set preferences**
   - User enters dates and departure city.
5. **Generate itinerary**
   - System produces a structured day-by-day plan.
6. **Review output**
   - User expands/collapses days and scans activities.

## UX quality bar (first cut)
- Core flow should be completable on desktop/mobile without external help.
- Form validation messages should be clear and actionable.
- Empty/failed-match states should still let users complete the flow.

---

## 8) Success Metrics

## North-star (product value)
- **Itinerary Completion Rate**: % of sessions that reach generated itinerary view.

## Funnel metrics
1. Search start rate (sessions entering a query).
2. Title confirmation rate (sessions selecting/confirming title).
3. Location selection rate (sessions selecting ≥1 location).
4. Preference submission rate.
5. Final completion rate (itinerary generated).

## Quality metrics
1. **Search success rate**
   - % queries resulting in confirmed title without abandonment.
2. **Fallback usage rate**
   - % sessions using manual confirm path (helps size catalog gaps).
3. **Backtrack frequency by step**
   - Identifies friction points in flow.
4. **Time-to-itinerary (median)**
   - Target: under 3 minutes from first query to generated itinerary.

## Guardrail metrics
1. Frontend error rate (runtime errors per 1,000 sessions).
2. Form validation failure loops (repeated invalid submissions).
3. Drop-off after location step (signals weak location relevance/content quality).

---

## 9) Open Questions / Assumptions
1. **Catalog strategy**
   - Assumption: a curated catalog is enough for first validation.
   - Question: what minimum title count is needed for acceptable perceived coverage?
2. **Data freshness and sourcing**
   - Question: how often should location data be reviewed/updated?
3. **Itinerary realism**
   - Question: should transit times and country hopping constraints be introduced in next phase?
4. **Sharing/export**
   - Question: is simple copy/share (URL or PDF) required for MVP+1?
5. **Monetization path**
   - Question: affiliate booking links vs. premium planning features?

---

## 10) Phase-2 Candidates (not committed)
1. Save/share itinerary.
2. Map view + route optimization.
3. Deeper personalization (budget, pace, interests).
4. Live travel APIs (flights/hotels/attractions).
5. Expanded catalog ingestion pipeline.
