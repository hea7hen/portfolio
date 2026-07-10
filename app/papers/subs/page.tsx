import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SUBS: Synthetic User Behavior Simulation — White Paper | Abhishek Nair",
  description:
    "Multi-Agent LLM Personas for Scalable, Psychologically-Grounded Pre-Release Usability Testing",
};

const ACCENT = "#C3E41D";

function SectionHeading({ n, children }: { n?: string; children: React.ReactNode }) {
  return (
    <h2 className="mt-14 mb-5 flex items-baseline gap-3 font-sans text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
      {n && (
        <span
          className="font-mono text-sm md:text-base font-bold"
          style={{ color: "#94ab16" }}
        >
          {n}
        </span>
      )}
      {children}
    </h2>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border-2 border-neutral-900 bg-white px-3 py-2 shadow-[3px_3px_0_0_#C3E41D] dark:border-neutral-100 dark:bg-neutral-900">
      <p className="font-mono text-sm md:text-base font-bold text-neutral-900 dark:text-neutral-100">
        {value}
      </p>
      <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-500">
        {label}
      </p>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="border-b-2 border-neutral-900 px-3 py-2 text-left font-sans text-xs md:text-sm font-bold uppercase tracking-wide text-neutral-900 dark:border-neutral-100 dark:text-neutral-100">
      {children}
    </th>
  );
}

function Td({ children, strong = false }: { children: React.ReactNode; strong?: boolean }) {
  return (
    <td
      className={`border-b border-neutral-200 px-3 py-2 align-top text-sm dark:border-neutral-800 ${
        strong
          ? "font-semibold text-neutral-900 dark:text-neutral-100"
          : "text-neutral-700 dark:text-neutral-300"
      }`}
    >
      {children}
    </td>
  );
}

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-[hsl(60,14%,97%)] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 print:bg-white">
      {/* top bar — hidden in print/PDF */}
      <nav className="sticky top-0 z-40 border-b border-neutral-200 bg-[hsl(60,14%,97%)]/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90 print:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3">
          <Link
            href="/#whitepaper"
            className="font-sans text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            ← All papers
          </Link>
          <a
            href="/papers/SUBS-Whitepaper.pdf"
            download
            className="rounded-md border-2 border-neutral-900 bg-[#C3E41D] px-4 py-1.5 font-sans text-sm font-bold text-neutral-900 shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 dark:border-neutral-100 dark:shadow-[3px_3px_0_0_rgba(255,255,255,0.9)]"
          >
            Download PDF ↓
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-12 md:pt-16">
        {/* ── Title block ─────────────────────────────────────── */}
        <header>
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "#94ab16" }}>
            White Paper · CS3259 Agentic AI · 2025–26
          </p>
          <h1 className="font-sans text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            SUBS: Synthetic User
            <br />
            Behavior Simulation
          </h1>
          <p className="mt-4 font-serif text-lg italic text-neutral-600 dark:text-neutral-400 md:text-xl">
            Multi-Agent LLM Personas for Scalable, Psychologically-Grounded
            Pre-Release Usability Testing
          </p>

          <div className="mt-6 border-l-4 pl-4" style={{ borderColor: ACCENT }}>
            <p className="font-sans text-sm font-semibold">
              Abhishek J Nair · Soumik Halder · Vaibhav Maraar
            </p>
            <p className="mt-1 font-sans text-xs text-neutral-500">
              School of Computer Science and Engineering, RV University, Bengaluru
              <br />
              Guided by Prof. (Dr.) Rashmi S
            </p>
          </div>

          {/* headline stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat value="20" label="LLM personas" />
            <Stat value="r = 0.76" label="Neuroticism → Abandon" />
            <Stat value="D = 0.36" label="KS vs baseline, p=.0395" />
            <Stat value="45 / 40 / 15" label="Convert / Abandon / Timeout %" />
          </div>
        </header>

        {/* ── Body — serif, paper-style ───────────────────────── */}
        <article className="mt-12 font-serif text-[16.5px] leading-[1.75] text-neutral-800 dark:text-neutral-200 [&_strong]:text-neutral-900 dark:[&_strong]:text-neutral-100">
          {/* Executive summary */}
          <div className="rounded-lg border-2 border-neutral-900 bg-white p-6 shadow-[6px_6px_0_0_#C3E41D] dark:border-neutral-100 dark:bg-neutral-900">
            <h2 className="mb-3 font-sans text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
              Executive Summary
            </h2>
            <p>
              Digital products are conventionally validated through human user studies —
              expensive, slow, and geographically constrained. This paper presents{" "}
              <strong>SUBS (Synthetic User Behavior Simulation)</strong>, a framework that
              replaces early-stage human usability testing with a population of
              psychologically-profiled LLM agents navigating a simulated product environment
              under finite-state-machine constraints.
            </p>
            <p className="mt-4">
              The central empirical result is not merely that SUBS produces plausible-looking
              synthetic behavior — it&apos;s a direct, controlled comparison showing{" "}
              <em>why</em> persona conditioning is necessary at all. A promptless LLM baseline,
              given the identical product environment and no persona profile, collapsed onto a
              single deterministic path across every run: 100% conversion, zero abandonment,
              each action appearing at exactly 16.7% frequency. SUBS&apos;s persona-conditioned
              agents, by contrast, produced a 45% conversion / 40% abandonment / 15% timeout
              split, with statistically significant correlations between OCEAN personality
              traits and behavioral outcomes (Neuroticism → Abandonment, r&nbsp;=&nbsp;0.76,
              p&nbsp;&lt;&nbsp;0.0001; Risk Tolerance → Conversion, r&nbsp;=&nbsp;0.61,
              p&nbsp;&lt;&nbsp;0.0001), and a Kolmogorov-Smirnov test confirming the two action
              distributions differ significantly (D&nbsp;=&nbsp;0.36, p&nbsp;=&nbsp;0.0395).
            </p>
            <p className="mt-4">
              In short: an unpersonalized LLM doesn&apos;t simulate a user, it simulates the{" "}
              <em>optimal</em> user. SUBS&apos;s contribution is a concrete, working
              architecture for injecting the variance that&apos;s structurally absent from that
              default behavior — and a statistical protocol for proving the variance is real
              rather than assumed.
            </p>
          </div>

          {/* 1 */}
          <SectionHeading n="1.">The Problem</SectionHeading>
          <p>
            Traditional usability validation — controlled lab tests, A/B testing, heuristic
            expert review — has three compounding limitations that scale worse as products
            scale:
          </p>
          <ul className="mt-4 space-y-3 pl-5 [&>li]:relative [&>li]:pl-4">
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Cost and time.</strong> Recruiting, scheduling, and compensating human
              participants is expensive, and typically requires multiple testing rounds across
              a product&apos;s development cycle.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Geographic and demographic reach.</strong> A product with a global user
              base needs testers across time zones, cultures, and demographics — a constraint
              that shrinks feasible sample sizes long before statistical adequacy is reached.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>The single-perspective trap in automated alternatives.</strong> The
              obvious cheap substitute — asking an LLM to evaluate an interface directly —
              tends to produce one averaged, plausible-sounding judgment rather than a
              distribution of the divergent behaviors a real population would actually exhibit.
            </li>
          </ul>
          <p className="mt-4">
            SUBS is built specifically against that third failure mode: not &ldquo;can an LLM
            evaluate a product,&rdquo; but &ldquo;can a population of LLM agents reproduce the{" "}
            <em>behavioral spread</em> real users would produce, in a way that&apos;s
            statistically checkable rather than just asserted.&rdquo;
          </p>

          {/* 2 */}
          <SectionHeading n="2.">Positioning Against Prior Work</SectionHeading>
          <p>
            SUBS sits at the intersection of three research threads, each of which solves part
            of the problem but not the combination:
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>Prior work</Th>
                  <Th>Contribution</Th>
                  <Th>Gap SUBS addresses</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td strong>Balog &amp; Kenter (2019), item-centric user simulators</Td>
                  <Td>Evaluate recommender systems without live users</Td>
                  <Td>Limited to retrieval tasks; no persona diversity or multi-screen journeys</Td>
                </tr>
                <tr>
                  <Td strong>Park et al. (2023), Generative Agents</Td>
                  <Td>LLM agents with memory/reflection produce believable social behavior</Td>
                  <Td>Built for open-ended social simulation, not product usability testing specifically</Td>
                </tr>
                <tr>
                  <Td strong>Safdari et al. (2023), OCEAN-prompted LLMs</Td>
                  <Td>Statistically differentiated behavioral output from Big Five trait prompting</Td>
                  <Td>Validates persona-driven output exists, but no agentic simulation or product environment wrapped around it</Td>
                </tr>
                <tr>
                  <Td strong>Wang et al. (2024), LLM agent architecture survey</Td>
                  <Td>Taxonomy of profiling/memory/planning/action design patterns</Td>
                  <Td>Not applied to the usability-testing domain</Td>
                </tr>
                <tr>
                  <Td strong>Cooper (2004), goal-directed personas</Td>
                  <Td>Personas as a design tool</Td>
                  <Td>No automated instantiation or simulation capability</Td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5">
            The research gap, stated plainly: no existing framework combines
            psychologically-grounded persona construction, agentic multi-step product
            navigation, <em>and</em> a statistical validation protocol proving the resulting
            behavior is meaningfully distinct from an unpersonalized baseline — rather than just
            assuming realism because the output reads plausibly.
          </p>

          {/* 3 */}
          <SectionHeading n="3.">System Architecture</SectionHeading>
          <p>
            SUBS is a five-layer pipeline, implemented in Python 3.11 against the Google Gemini
            API (<code className="rounded bg-neutral-200/70 px-1 font-mono text-[14px] dark:bg-neutral-800">gemini-2.0-flash-lite-preview</code>),
            with a Next.js 15 dashboard for live monitoring.
          </p>
          {[
            {
              t: "A. Persona Creation Module",
              f: "persona_generation.py",
              b: "Generates structured JSON persona profiles combining sampled demographic attributes (age, occupation, income, geography) with OCEAN personality scores (0–1 scale), interaction preferences (feature- vs. price-focused), risk tolerance, prior product familiarity, and baseline emotional state. An LLM call then generates a coherent backstory conditioned on the sampled attributes, so the persona's narrative and its trait scores stay internally consistent rather than being independently randomized.",
            },
            {
              t: "B. Agent Instantiation Module",
              f: "product_env.py + simulation.py",
              b: "Each persona is encoded directly into an LLM system prompt, becoming a stateful agent for the full session. The product environment — a TechFlow Pro Smartwatch e-commerce flow — is represented as a finite state machine via an ALLOWED_TRANSITIONS dictionary, with six valid actions: navigate, inspect-feature, compare, add-to-cart, abandon, submit-feedback. This FSM encoding is product-agnostic — it requires no live front-end, only a structured state graph.",
            },
            {
              t: "C. Behavior Simulation Engine",
              f: "simulation.py, experiment.py",
              b: "At each step, the agent receives the current product state, its session history (passed as structured context rather than via an external memory store), and generates a chain-of-thought reasoning trace before selecting an action. A coerce_action() function enforces the FSM — no invalid transitions can execute regardless of what the model outputs. Sessions terminate on conversion, explicit abandonment, or a max-step timeout. All 20 personas run concurrently in batches of 5 via ThreadPoolExecutor, with rate-limit-aware sleep intervals for the Gemini free tier (15 requests/minute).",
            },
            {
              t: "D. Analytics and Evaluation Module",
              f: "analytics.py",
              b: "Reads the full interaction logs (CSV/JSON, containing persona ID, action sequence, reasoning traces, step counts, terminal outcome) and computes: conversion/abandonment/timeout rates, journey-length distributions, action-frequency distributions, Pearson correlations between OCEAN traits and behavioral outcomes, and the two-sample Kolmogorov-Smirnov comparison against the promptless baseline.",
            },
            {
              t: "E. Monitoring Dashboard",
              f: "Next.js 15",
              b: "Live experiment tracking: active personas, completed sessions, action-frequency histograms, an OCEAN-trait/behavior correlation heatmap, and a scrolling log viewer for individual agent reasoning traces — giving a human reviewer the ability to audit why any given agent behaved as it did, not just the aggregate statistics.",
            },
          ].map((m) => (
            <div key={m.t} className="mt-5">
              <p className="font-sans text-[15px] font-bold">
                {m.t}{" "}
                <code className="ml-1 rounded bg-neutral-200/70 px-1.5 py-0.5 font-mono text-xs font-normal text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                  {m.f}
                </code>
              </p>
              <p className="mt-1.5">{m.b}</p>
            </div>
          ))}
          <p className="mt-5">
            A separate utility (<code className="rounded bg-neutral-200/70 px-1 font-mono text-[14px] dark:bg-neutral-800">update_paper_section.py</code>,
            via python-docx) auto-injects freshly computed results into the written report,
            keeping analysis and write-up in sync.
          </p>

          {/* 4 */}
          <SectionHeading n="4.">Experimental Design</SectionHeading>
          <p>
            <strong>Environment.</strong> A single product domain — the TechFlow Pro Smartwatch
            e-commerce experience — encoded as a structured state graph with price, feature,
            social-proof, and credibility attributes at each node.
          </p>
          <p className="mt-3">
            <strong>Population.</strong> 20 synthetic personas, each run once, executed
            concurrently in batches of 5.
          </p>
          <p className="mt-3">
            <strong>Baseline.</strong> A promptless Gemini agent, conditioned solely on the
            current product state description with no persona profile, OCEAN scores, or
            backstory — holding the LLM and environment constant while isolating the effect of
            persona conditioning specifically.
          </p>
          <p className="mt-3">
            <strong>Evaluation dimensions.</strong>
          </p>
          <ol className="mt-2 list-decimal space-y-2 pl-8">
            <li>
              <em>Behavioral consistency</em> — outcome distribution and journey-length
              patterns across the persona population.
            </li>
            <li>
              <em>Fidelity to persona</em> — Pearson correlation between each OCEAN trait and
              observed behavioral outcomes.
            </li>
            <li>
              <em>Comparative validity</em> — Kolmogorov-Smirnov test on the action-frequency
              distributions of SUBS vs. the promptless baseline.
            </li>
          </ol>

          {/* 5 */}
          <SectionHeading n="5.">Results</SectionHeading>
          <h3 className="mt-6 font-sans text-base font-bold md:text-lg">
            5.1 Behavioral Consistency
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>Outcome</Th>
                  <Th>Count</Th>
                  <Th>Percentage</Th>
                  <Th>Avg. Steps</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td strong>Converted</Td>
                  <Td>9</Td>
                  <Td>45.0%</Td>
                  <Td>5.57</Td>
                </tr>
                <tr>
                  <Td strong>Abandoned</Td>
                  <Td>8</Td>
                  <Td>40.0%</Td>
                  <Td>4.75</Td>
                </tr>
                <tr>
                  <Td strong>Timeout</Td>
                  <Td>3</Td>
                  <Td>15.0%</Td>
                  <Td>—</Td>
                </tr>
                <tr>
                  <Td strong>Overall</Td>
                  <Td strong>20</Td>
                  <Td strong>100%</Td>
                  <Td strong>5.30</Td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Converted personas took longer journeys than abandoned ones (5.57 vs. 4.75 steps) —
            consistent with converters engaging in more exploratory comparison behavior before
            committing, while abandoners exit more abruptly.
          </p>

          <h3 className="mt-8 font-sans text-base font-bold md:text-lg">
            5.2 Fidelity to Persona
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <Th>OCEAN Trait</Th>
                  <Th>Behavioral Outcome</Th>
                  <Th>Pearson r</Th>
                  <Th>p-value</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td strong>Neuroticism</Td>
                  <Td>Abandonment Rate</Td>
                  <Td strong>0.76</Td>
                  <Td>&lt; 0.0001</Td>
                </tr>
                <tr>
                  <Td strong>Risk Tolerance</Td>
                  <Td>Conversion Outcome</Td>
                  <Td strong>0.61</Td>
                  <Td>&lt; 0.0001</Td>
                </tr>
                <tr>
                  <Td strong>Conscientiousness</Td>
                  <Td>Journey Length</Td>
                  <Td strong>0.53</Td>
                  <Td>&lt; 0.0001</Td>
                </tr>
                <tr>
                  <Td strong>Openness</Td>
                  <Td>Journey Length</Td>
                  <Td>0.03</Td>
                  <Td>0.86 (NS)</Td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Three of four hypothesized relationships were strongly significant and directionally
            consistent with established personality-psychology predictions: high-Neuroticism
            personas abandoned more (consistent with anxiety and lower tolerance for decision
            friction), high-Risk-Tolerance personas converted more, and high-Conscientiousness
            personas took longer, more methodical paths. Openness showed no relationship with
            journey length — a genuine null result, not a suppressed one (see §7).
          </p>

          <h3 className="mt-8 font-sans text-base font-bold md:text-lg">
            5.3 Comparative Validity — the headline finding
          </h3>
          <div className="mt-4 rounded-lg border-2 border-neutral-900 bg-white p-5 shadow-[5px_5px_0_0_#C3E41D] dark:border-neutral-100 dark:bg-neutral-900">
            <p>
              The promptless baseline exhibited <strong>complete behavioral uniformity</strong>:
              all four baseline runs followed the identical action sequence
              (<code className="font-mono text-[13.5px]">explore_features → read_reviews → check_price → add_to_cart → proceed_to_checkout → complete_purchase</code>),
              producing a 100% conversion rate, 0% abandonment, and each action type at exactly
              16.7% frequency. Without persona conditioning, the model doesn&apos;t approximate
              a distribution of users — it deterministically finds the single optimal path
              through the funnel, every time.
            </p>
          </div>
          <p className="mt-4">
            SUBS personas, by contrast, produced markedly different action shares
            (<code className="font-mono text-[13.5px]">explore_features</code> 19.6%,{" "}
            <code className="font-mono text-[13.5px]">read_reviews</code> 18.5%,{" "}
            <code className="font-mono text-[13.5px]">check_price</code> 16.6%, tapering through{" "}
            <code className="font-mono text-[13.5px]">add_to_cart</code> 14.2% and{" "}
            <code className="font-mono text-[13.5px]">checkout</code> 13.6%, with 7.5% of all
            actions being <code className="font-mono text-[13.5px]">abandon</code> — a terminal
            state the baseline never reached at all). The two-sample KS test confirmed this
            difference is statistically significant: <strong>D = 0.36, p = 0.0395</strong>.
          </p>
          <p className="mt-4">
            Qualitative inspection of reasoning traces corroborated the quantitative pattern:
            neurotic personas voiced hesitation and price sensitivity before abandoning;
            conscientious personas methodically compared features before adding to cart;
            risk-tolerant personas converted quickly with minimal comparison behavior.
          </p>

          {/* 6 */}
          <SectionHeading n="6.">Discussion</SectionHeading>
          <p>
            The most important result in this study isn&apos;t any single correlation —
            it&apos;s the shape of the <em>baseline</em>. A 100%-conversion, zero-variance
            baseline is a strong, structural finding about how unpersonalized LLMs behave when
            asked to role-play a user: they don&apos;t produce an &ldquo;average&rdquo; user,
            they produce the <em>rational</em> user, because nothing in the prompt gives them a
            reason to deviate from the locally optimal path. That&apos;s a sharper and more
            useful framing than &ldquo;LLMs lack diversity&rdquo; — it says specifically{" "}
            <em>what</em> they collapse toward, and gives SUBS&apos;s persona-conditioning
            architecture a precise failure mode to be measured against.
          </p>
          <p className="mt-4">
            The OCEAN correlations matter for a second reason beyond statistical significance:
            they replicate <em>directionally</em> what personality psychology already predicts
            (Neuroticism correlating with anxiety-driven abandonment, Conscientiousness with
            more thorough deliberation). That&apos;s evidence the persona conditioning is doing
            something structurally meaningful, not just injecting noise that happens to look
            like variance.
          </p>
          <p className="mt-4">
            The Openness null result deserves equal weight rather than being explained away. The
            most plausible reading, given in the original report, is an action-space ceiling
            effect: with only six possible actions and a six-step cap, there&apos;s no
            behavioral channel through which curiosity-driven exploration could express itself
            distinctly from methodical (Conscientiousness-driven) exploration. That&apos;s a
            genuine architectural limitation, not a modeling failure — and it points directly at
            what needs to change (§8) before Openness effects could be detected at all.
          </p>

          {/* 7 */}
          <SectionHeading n="7.">Threats to Validity</SectionHeading>
          <ul className="space-y-3 pl-5 [&>li]:relative [&>li]:pl-4">
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Internal validity.</strong> Single run per persona (§8) means outcome
              variance could partly reflect stochastic sampling rather than stable
              persona-driven behavior — the current design cannot separate the two.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Construct validity.</strong> OCEAN scores are injected as explicit numeric
              parameters in the system prompt, not inferred from behavior — so the correlations
              demonstrate the LLM can <em>translate</em> trait scores into consistent behavior,
              not that the trait-to-behavior mapping matches how real personality traits
              causally influence real purchasing decisions.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>External validity.</strong> A single product domain (one e-commerce
              smartwatch flow) and a single LLM family (Gemini) mean the correlational structure
              found here is not yet known to generalize across product categories or model
              providers.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Statistical margin.</strong> The KS test result (D = 0.36, p = 0.0395) is
              significant but close to the conventional 0.05 boundary — a larger persona pool
              would be needed to confirm the effect isn&apos;t a boundary artifact of a small
              sample (n=20 vs. n=4 baseline runs).
            </li>
          </ul>

          {/* 8 */}
          <SectionHeading n="8.">Limitations</SectionHeading>
          <ul className="space-y-3 pl-5 [&>li]:relative [&>li]:pl-4">
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Sample size.</strong> 20 personas, single run each — sufficient to detect
              the reported correlations, but limits generalization claims.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Baseline uniformity.</strong> Only four baseline sessions were run, and
              all four converged identically; a stronger baseline design would vary
              temperature/sampling settings across multiple runs rather than relying on greedy
              or low-temperature determinism alone.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Action space constraints.</strong> Six actions and a six-step cap
              constrain the behavioral bandwidth available to any trait, plausibly suppressing
              detectable effects for traits like Openness.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Single product domain.</strong> Whether the OCEAN-behavior correlations
              generalize beyond the TechFlow Pro Smartwatch flow to other categories (fintech
              onboarding, healthcare portals, SaaS feature adoption) is untested.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>No ground-truth comparison.</strong> The validation protocol compares SUBS
              against a promptless baseline, not against real human behavioral data — proving
              persona conditioning adds variance, not yet proving that variance matches{" "}
              <em>real</em> population variance.
            </li>
          </ul>

          {/* 9 */}
          <SectionHeading n="9.">Future Scope</SectionHeading>
          <ul className="space-y-3 pl-5 [&>li]:relative [&>li]:pl-4">
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Ground-truth validation</strong> against real user study data — the single
              most important next step, since it converts SUBS from &ldquo;produces more
              variance than a naive baseline&rdquo; to &ldquo;produces variance that matches
              reality,&rdquo; which is the actual claim a usability team would need to trust the
              tool.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Larger persona pools</strong> (100+) with broader OCEAN distributions for
              stronger statistical power and finer-grained subgroup analysis.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Multi-run-per-persona evaluation</strong> to separate genuine trait-driven
              behavioral stability from single-run stochastic noise (directly addressing the
              internal-validity threat in §7).
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Social influence modeling</strong> — inter-agent communication and
              visibility of other agents&apos; actions, enabling simulation of peer-influence
              and social-proof effects that the current architecture (agents interacting with a
              static environment, not each other) cannot represent.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Multimodal product interfaces</strong> — extending beyond text/JSON state
              representations to audio and visual interface state.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Expanded product domains</strong> — fintech onboarding, healthcare
              portals, mobile app navigation — to test whether the OCEAN-behavior correlational
              structure generalizes.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Frontier model comparison</strong> — repeating the protocol with
              GPT-4-class models to test whether the persona-conditioning effect and its
              magnitude depend on the underlying LLM&apos;s capability level.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Open-source release</strong> for reproducibility and community extension.
            </li>
          </ul>

          {/* 10 */}
          <SectionHeading n="10.">Applications</SectionHeading>
          <p>
            The framework&apos;s value proposition — pre-deployment behavioral insight without
            recruiting human participants — applies most directly to:
          </p>
          <ul className="mt-4 space-y-3 pl-5 [&>li]:relative [&>li]:pl-4">
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>E-commerce:</strong> checkout drop-off points, price sensitivity,
              feature-discovery patterns.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>FinTech:</strong> onboarding flows tested across varied risk profiles and
              financial literacy levels.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Healthcare:</strong> patient portal journeys across varying health
              literacy and anxiety levels.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>SaaS:</strong> feature adoption patterns across professional personas and
              organizational roles.
            </li>
            <li>
              <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT, outline: "1px solid #111" }} />
              <strong>Mobile applications:</strong> navigation depth and abandonment patterns
              across demographic segments.
            </li>
          </ul>

          {/* 11 */}
          <SectionHeading n="11.">Conclusion</SectionHeading>
          <p>
            SUBS demonstrates something more specific than &ldquo;LLMs can simulate
            users&rdquo;: it demonstrates <em>why</em> they don&apos;t do so by default, and
            provides an architecture — persona-conditioned agents operating under FSM
            constraints, evaluated against a matched unpersonalized baseline — that measurably
            corrects for it. The promptless-baseline collapse (100% conversion, zero variance,
            one deterministic path) is the paper&apos;s most important finding precisely because
            it isolates the problem SUBS exists to solve. The OCEAN-behavior correlations
            (Neuroticism → Abandonment, r = 0.76; Risk Tolerance → Conversion, r = 0.61) show
            the correction is not just present but directionally consistent with established
            personality psychology — while the null Openness result is left as an honest,
            architecturally-explained limitation rather than smoothed over.
          </p>
          <p className="mt-4">
            The next real test for SUBS isn&apos;t more internal statistics — it&apos;s the
            ground-truth comparison in §9: does the variance SUBS manufactures actually resemble
            the variance a real user population would produce, or only resemble <em>a</em>{" "}
            distribution rather than <em>the</em> distribution. That&apos;s the difference
            between a working demo and a usability-testing tool a product team could actually
            trust.
          </p>

          <hr className="my-10 border-neutral-300 dark:border-neutral-700" />
          <p className="text-sm italic text-neutral-500">
            Sources: Balog &amp; Kenter (2019); Park et al. (2023); Safdari et al. (2023); Wang
            et al. (2024); Cooper (2004); full bibliography per the original project report.
          </p>
        </article>

        {/* bottom download — hidden in print */}
        <div className="mt-14 flex items-center justify-between print:hidden">
          <Link
            href="/#whitepaper"
            className="font-sans text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            ← All papers
          </Link>
          <a
            href="/papers/SUBS-Whitepaper.pdf"
            download
            className="rounded-md border-2 border-neutral-900 bg-[#C3E41D] px-5 py-2 font-sans text-sm font-bold text-neutral-900 shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 dark:border-neutral-100 dark:shadow-[3px_3px_0_0_rgba(255,255,255,0.9)]"
          >
            Download PDF ↓
          </a>
        </div>
      </main>
    </div>
  );
}
