export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
  readTime: number; // minutes
  image?: string; // path to cover image in /public (e.g. "/blog/cover.png")
  /** ISO 8601 date string for structured data (e.g. "2026-08-29") */
  published_at?: string;
  /** "published" | "draft" — defaults to "published" when omitted */
  status?: "published" | "draft";
};

/**
 * Calculate reading time based on average reading speed of 200 words per minute.
 */
function calculateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

// const secureDefaultsContent = `
// ## The Problem With "We'll Add Security Later"

// Every founder has said it. Every developer has heard it. And every time, "later" turns into "after the breach."

// The truth is, security doesn't have to be a launch-week scramble. It can be a default — something baked into your product from line one, the same way you'd never ship a form without validation or an API without rate limits.

// Well, actually, some of us *would* ship without those. That's the problem.

// ## What Are Secure Defaults?

// Secure defaults are the engineering decisions you make once so you never have to think about them again. They're the things that protect your users even when you're sleep-deprived, shipping at 2 AM, and forgot to double-check.

// Here's what that looks like in practice:

// ### 1. Authentication That Just Works

// Don't roll your own auth. Use battle-tested libraries like NextAuth.js, Clerk, or Lucia. Set session expiry to something reasonable (not "never"). Enable CSRF protection by default.

// **The rule:** If a new developer joins your team and can accidentally create an unprotected route, your auth setup has failed.

// ### 2. Rate Limiting as Infrastructure

// Every API endpoint should have rate limiting. Not just the login page — every endpoint. Use libraries like \`express-rate-limit\` or build it into your API gateway.

// A simple rule of thumb: if a user can call your endpoint a thousand times in a second, you have a problem.

// ### 3. Input Validation at the Edge

// Validate everything at the boundary. Use Zod, Yup, or Joi to define schemas for every API endpoint. Validate on the server, never trust the client.

// This isn't just security — it's good engineering. You get better error messages, cleaner data, and fewer bugs.

// ### 4. Logging That Tells a Story

// When something goes wrong (and it will), you need logs that actually help. Structured logging with tools like Pino or Winston, with request IDs that trace across services.

// Log authentication events. Log authorization failures. Log anything that smells like an attack. But never log passwords, tokens, or PII.

// ## The Founder's Checklist

// Before your next deploy, ask yourself:

// - ✅ Can a new route be accidentally created without authentication?
// - ✅ Are all inputs validated on the server?
// - ✅ Do all endpoints have rate limits?
// - ✅ Are secrets stored in environment variables, never in code?
// - ✅ Are error messages generic to users but detailed in logs?
// - ✅ Is HTTPS enforced everywhere?

// If you answered "no" to any of these, you don't have a security problem. You have a defaults problem. And defaults are fixable today.

// ## The Mindset Shift

// Security isn't a feature you add. It's a quality you maintain. Like code quality, like performance, like accessibility — it's a practice, not a project.

// The best time to build secure defaults was at the start. The second best time is right now.

// Start small. Pick one item from the checklist. Ship it today. Then pick another tomorrow.

// **Your users trust you with their data. Honor that trust with your defaults.**
// `;

// const frontendTrustContent = `
// ## Trust Is a Design Decision

// Before a user reads your privacy policy, before they check for the padlock icon, before they even think about security — they've already decided whether they trust your product.

// That decision happens in milliseconds. And it's based entirely on how your interface *feels*.

// ## Speed Is Trust

// A page that loads in 200ms feels reliable. A page that loads in 4 seconds feels broken. And a page that hangs? That feels dangerous.

// Users don't consciously think "this slow load time suggests poor infrastructure security." But subconsciously, that's exactly the calculation their brain is running.

// **Practical wins:**
// - Optimize your Largest Contentful Paint (LCP) to under 2.5 seconds
// - Use skeleton screens instead of spinners — they make loading feel intentional
// - Lazy-load images below the fold
// - Prefetch routes the user is likely to visit next

// Speed isn't a nice-to-have. It's the first trust signal your product sends.

// ## Error States Are Trust Signals

// Most applications treat errors as afterthoughts. A generic "Something went wrong" message. A blank screen. A cryptic error code.

// But error states are actually your biggest opportunity to build trust. Because errors are the moments when users feel most vulnerable.

// **A trust-building error state:**
// - Tells the user what happened in plain language
// - Explains what they can do about it
// - Assures them their data is safe
// - Provides a clear path forward

// Compare "Error 500" with "We're having trouble saving your work right now. Your changes are safely stored locally, and we'll sync them when we're back online."

// Same error. Completely different trust response.

// ## Clarity Over Cleverness

// Every unclear label, every ambiguous button, every "Are you sure?" dialog that doesn't explain the consequences — these are tiny trust fractures.

// Users trust interfaces they can predict. If clicking a button does something unexpected, you've broken a promise, even if you never made one explicitly.

// **Rules for interface clarity:**
// - Button labels should describe outcomes, not actions ("Save and publish" not "Submit")
// - Destructive actions should be visually distinct and harder to trigger accidentally
// - System status should always be visible — users should never wonder "did that work?"
// - Use progressive disclosure to avoid overwhelming users with complexity

// ## Consistency Is Invisible Trust

// When your interface is consistent — when buttons look the same, when spacing is predictable, when interactions follow patterns — users stop thinking about the interface and start thinking about their task.

// That's trust. Not the dramatic kind. The quiet, reliable kind that keeps people coming back.

// Inconsistency, on the other hand, creates cognitive friction. And cognitive friction creates doubt. And doubt is the opposite of trust.

// ## The Takeaway

// You don't need to write "We take your security seriously" on your landing page. You need to build an interface that *proves* it through:

// - **Speed** that signals competence
// - **Error handling** that shows care
// - **Clarity** that respects intelligence
// - **Consistency** that builds confidence

// Trust isn't a marketing message. It's an engineering outcome. And it starts in the frontend.
// `;

const buildingInPublicContent = `
## The Tension

Building in public is one of the best growth strategies for indie hackers and founders. Sharing your progress, your numbers, your code — it builds an audience, attracts collaborators, and keeps you accountable.

But there's a tension. The same transparency that builds trust can also expose vulnerabilities. And I'm not talking about emotional vulnerability. I'm talking about leaked API keys, exposed infrastructure, and accidentally doxxing your users.

## The Stakes Are Real

Here's what can go wrong:

- **Screenshots with environment variables visible** in your terminal or IDE
- **GitHub commits with hardcoded secrets** that live forever in git history
- **Architecture diagrams that reveal your security boundaries** to potential attackers
- **Database screenshots with real user data** shared in a "look at our growth" post
- **Server IP addresses or internal URLs** visible in network tabs or error messages

Each of these has happened to real founders. Some of them have happened to me (caught before posting, thankfully).

## The Lightweight Checklist

Before sharing anything publicly, run through this:

### Screenshots & Screen Recordings
- [ ] Check terminal output for env vars, tokens, or API keys
- [ ] Blur or crop any visible URLs that aren't public
- [ ] Ensure no user data (emails, names, IDs) is visible
- [ ] Check browser tabs for anything you wouldn't want public
- [ ] Verify your IDE isn't showing sensitive files (like \`.env\`)

### Code Snippets
- [ ] Replace real values with placeholder data
- [ ] Remove any comments that reference internal systems
- [ ] Check imports for internal package names that reveal architecture
- [ ] Ensure no hardcoded credentials exist in the snippet

### Metrics & Data
- [ ] Anonymize user-related metrics
- [ ] Aggregate numbers rather than showing individual records
- [ ] Be careful with timestamps that could reveal user activity patterns
- [ ] Don't share exact infrastructure costs (they reveal your scale and tools)

### Architecture & Technical Details
- [ ] Share concepts, not implementation details
- [ ] Use generic names for internal services
- [ ] Don't share your exact security stack (it helps attackers target known vulnerabilities)
- [ ] Keep deployment details vague ("cloud hosting" not "us-east-1 on t3.micro")

## The "Would I Tweet This?" Test

Before posting anything technical, ask: "If my worst-case attacker saw this, would it help them?"

Not your average script kiddie. Your worst-case attacker. Someone patient, skilled, and specifically targeting your product.

If the answer is "yes" or "maybe," redact. You can always share the concept without sharing the specifics.

## What You *Should* Share

The good news is, most of the valuable build-in-public content is completely safe to share:

- **Product decisions and the reasoning behind them** — this is gold for your audience and harmless to your security
- **Design iterations and user feedback** — inspirational and educational
- **Growth numbers (aggregated)** — motivating for the community
- **Mistakes and lessons learned** — the most engaging content is often about failure
- **Your process and workflow** — people want to know how you work, not what your database password is

## The Bottom Line

Building in public is powerful. But "public" doesn't mean "everything." It means "everything that's safe to share."

Think of it like open-source code. You publish the source, but you never publish the \`.env\` file.

Be generous with your knowledge. Be careful with your credentials. And when in doubt, crop it out.

**The best build-in-public creators share their thinking, not their secrets.**
`;

// Build posts with calculated read times
export const posts: BlogPost[] = [
  // {
  //   slug: "secure-defaults-for-founder-led-products",
  //   title: "Secure Defaults For Founder-Led Products",
  //   excerpt:
  //     "A practical note on turning auth, rate limits, validation, and logging into product defaults instead of launch-week chores.",
  //   date: "Oct 8, 2026",
  //   tags: ["AppSec", "Product Engineering", "Next.js"],
  //   content: secureDefaultsContent,
  //   readTime: calculateReadTime(secureDefaultsContent),
  // },
  // {
  //   slug: "frontend-engineering-for-trust",
  //   title: "Frontend Engineering For Trust",
  //   excerpt:
  //     "How interface clarity, performance, and failure states help users feel safer before any security copy shows up.",
  //   date: "Sep 18, 2026",
  //   tags: ["Frontend", "UX", "Security"],
  //   content: frontendTrustContent,
  //   readTime: calculateReadTime(frontendTrustContent),
  // },
  {
    slug: "building-in-public-without-leaking-secrets",
    title: "Building In Public Without Leaking Secrets",
    excerpt:
      "A lightweight checklist for sharing progress online while keeping credentials, infrastructure details, and user data private.",
    date: "Aug 29, 2026",
    tags: ["Operational Security", "Indie Hacking", "Writing"],
    content: buildingInPublicContent,
    readTime: calculateReadTime(buildingInPublicContent),
    image: "/blog/buildinginpublic.png",
    published_at: "2026-08-29",
    status: "published",
  },
];
