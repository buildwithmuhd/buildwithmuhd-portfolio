export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
  readTime: number; // minutes
  image?: string;
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

Building in public is one of the best growth strategies for indie hackers and founders. Sharing your progress, your numbers, your code builds an audience, attracts collaborators, and keeps you accountable.

But the same transparency that builds trust can also leak things you never meant to publish: API keys, user data, internal URLs. One careless screenshot is enough.

## The One Rule That Matters Most

**A secret that has been public, even for ten seconds, is a burned secret.**

Deleting the tweet doesn't fix it. Deleting the commit doesn't fix it. Bots scrape GitHub and social feeds in real time, and git history keeps everything. If a key, token or webhook URL was ever visible:

1. **Rotate it first.** Generate a new one and revoke the old one.
2. Then clean up the post or the commit.
3. Then check the provider's logs for activity you don't recognize.

Everything else in this post is about not needing to do that.

## Where Secrets Actually Leak

Most people blur the \`.env\` file and think they're safe. These are the ones that get through:

- **DevTools Network tab.** Authorization headers, cookies and request payloads are all one click away. A "look, it works" screenshot of a request can contain a live session token.
- **Terminal prompts and stack traces.** They expose usernames, absolute file paths and machine names.
- **Console and dashboard URLs.** Database IDs, project IDs and endpoints sit in the address bar and the page header.
- **Webhook URLs, error-tracking DSNs and storage bucket names.** These behave like credentials, but nobody thinks of them as secrets.
- **Git history.** A secret committed once and "removed" in the next commit is still there.
- **Screen recordings.** Autofill dropdowns, notification popups and a tab you forgot you had open.
- **Image metadata.** Exported screenshots and photos can carry device and location data.

## Don't Rely on Remembering

A manual checklist fails exactly when you're tired and excited to post. Put machines in the way:

- **Pre-commit secret scanning** with gitleaks or trufflehog, so a commit containing a key never gets created.
- **GitHub secret scanning and push protection** turned on for every repo.
- **A \`.gitignore\` that covers \`.env*\` from the first commit**, plus a committed \`.env.example\` with fake values.
- **A separate browser profile for screenshots**, with no extensions, no saved logins and no personal tabs.

## A Real Near-Miss

A few days ago I was learning Burp Suite, intercepting and modifying requests against my own servers, both local and live. I got a request tampered the way I wanted and took a screenshot of the intercept view to share.

I almost posted it.

The intercept panel shows the full raw request: session cookies, auth headers, everything. I was so focused on what I'd changed in the request body that I didn't see the credentials sitting in the same frame.

I caught it because I shared it to a friend on discord jokingly telling him that i'm now a hacker, then he noticed the auth cookies and told me to remove them before i post it and also cautioned me to be careful next time.

Afterwards, I tested with a throwaway account, so a leaked cookie would be worthless anyway.

I didn't bother posting it again for some reason but i guess that was a reminder for me to always be careful when building in public.


## The Checklist

### Screenshots & Recordings
- [ ] Network tab, headers and cookies are not visible
- [ ] Terminal shows no env vars, tokens, usernames or local paths
- [ ] No user data (emails, names, IDs) is visible
- [ ] Address bar and page headers don't show project IDs, endpoints or internal URLs
- [ ] Other tabs, notifications and autofill are hidden

### Code Snippets
- [ ] Real values are replaced with placeholders
- [ ] No comments reference internal systems or people
- [ ] No hardcoded credentials, even "temporary" ones

### Metrics & Data
- [ ] User-related numbers are aggregated, never individual records
- [ ] Timestamps can't be used to profile one user's activity
- [ ] You've decided on purpose whether to share revenue and costs. That's a business choice, not a security one.

## Assume Your Stack Is Known

You'll often hear "don't reveal your tech stack, it helps attackers." That's weak advice. Attackers can fingerprint most stacks from response headers, error pages and front-end bundles in minutes. If hiding the vendor names is what protects you, you were never protected.

Assume the attacker already knows your framework, your database and your host. Then ask what stops them:

- Are secrets stored outside the code and rotated?
- Is every endpoint authenticated and authorized?
- Is user data encrypted and access-limited?
- Are webhooks signature-verified?

Share the stack freely. Protect the keys, the data and the access paths. Sharing *how* you secured something is good content. Sharing *the credentials* never is.

## The "Would I Tweet This?" Test

Before posting anything technical, ask: "If someone patient and skilled saw this, what could they do with it?"

An example:

- **Before:** a screenshot of your Redis dashboard to show you hit the free-tier limit, with the endpoint hostname and database ID visible in the header and URL bar.
- **After:** a crop of just the usage graph, or a recreated chart with no dashboard chrome.

The story ("I burned through 500K commands in days and had to find out why") is the valuable part. The identifiers add nothing to it. If the story survives the redaction, redact.

## What You Should Share

Most of the best build-in-public content is completely safe:

- **Product decisions and the reasoning behind them.**
- **Design iterations and user feedback.**
- **Aggregated growth numbers.**
- **Mistakes and lessons learned.** These are the most engaging posts, and they often show your security thinking best.
- **Your process and workflow.**

## The Bottom Line

"Public" doesn't mean "everything." It means "everything that's safe to share," and you'll only get that reliably by combining habits with tooling.

Rotate fast, automate the checks, and assume your stack is already known. Share your thinking, not your secrets.
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
    date: "Oct 9, 2026",
    tags: ["Operational Security", "Indie Hacking", "Writing"],
    content: buildingInPublicContent,
    readTime: calculateReadTime(buildingInPublicContent),
    published_at: "2026-10-09",
    status: "published",
  },
];
