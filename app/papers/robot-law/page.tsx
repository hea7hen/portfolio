import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When the Law Meets the Machine Mind — White Paper | Abhishek Nair",
  description:
    "A simple guide to the Global Framework on Artificial Intelligence and Robotic Personhood (GFAIP-2025).",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 mb-5 font-sans text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
      {children}
    </h2>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 border-l-2 border-[#C3E41D] pl-5 font-serif text-lg md:text-xl italic leading-relaxed text-neutral-700 dark:text-neutral-300">
      {children}
    </blockquote>
  );
}

export default function RobotLawPage() {
  return (
    <div className="min-h-screen bg-[hsl(60,14%,97%)] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 print:bg-white">
      {/* top bar — hidden in print/PDF */}
      <nav className="sticky top-0 z-40 border-b border-neutral-200 bg-[hsl(60,14%,97%)]/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90 print:hidden">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-3">
          <Link
            href="/#whitepaper"
            className="font-sans text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            ← All papers
          </Link>
          <a
            href="/papers/GFAIP-Robot-Law.pdf"
            download
            className="font-sans text-sm font-medium text-neutral-500 underline underline-offset-4 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            Download PDF ↓
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-2xl px-5 pb-24 pt-14 md:pt-20">
        {/* ── Title block ─────────────────────────────────────── */}
        <header className="text-center">
          <p className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-500">
            White Paper · GFAIP-2025
          </p>
          <h1 className="font-sans text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl">
            When the Law Meets
            <br />
            the Machine Mind
          </h1>
          <p className="mx-auto mt-5 max-w-md font-serif text-lg italic text-neutral-600 dark:text-neutral-400">
            A simple guide to the Global Framework on Artificial Intelligence and
            Robotic Personhood.
          </p>
          <p className="mt-6 font-sans text-xs text-neutral-500">
            A model law, open for any nation to adopt · Inspired by the world of{" "}
            <em>PLUTO</em> (Naoki Urasawa)
          </p>
          <p className="mt-2 font-sans text-sm font-semibold">Abhishek J Nair</p>

          <div className="mx-auto mt-10 h-px w-16 bg-neutral-300 dark:bg-neutral-700" />

          <p className="mx-auto mt-10 max-w-lg font-serif text-xl italic leading-relaxed text-neutral-800 dark:text-neutral-200 md:text-2xl">
            &ldquo;One day, a machine is going to look at us and say,{" "}
            <span className="whitespace-nowrap">&lsquo;I don&apos;t want to die.&rsquo;</span>{" "}
            This is a rulebook for what happens next.&rdquo;
          </p>
        </header>

        {/* ── Body ────────────────────────────────────────────── */}
        <article className="mt-14 font-serif text-[16.5px] leading-[1.8] text-neutral-800 dark:text-neutral-200 [&_strong]:text-neutral-900 dark:[&_strong]:text-neutral-100">
          <p>
            We usually write the rules for a new technology only after it has already hurt
            someone. We invented seatbelts after the car crashes, not before. The GFAIP tries to
            break that habit. It is a complete, ready-made law that any country can pick up and
            adopt, written for a future that hasn&apos;t fully arrived yet but is coming fast: a
            future with machines that remember, that form attachments, and that might, in some
            real sense, feel.
          </p>
          <p className="mt-4">
            Its big idea is surprisingly simple. What makes something a person shouldn&apos;t
            depend on what it&apos;s made of. Skin or steel, neurons or circuits, none of that is
            the point. The point is what&apos;s going on inside: can it think, can it suffer, can
            it care about someone, can it be held responsible for what it does. If the answer is
            yes, the law says, then there is somebody there. And somebody deserves rights.
          </p>

          <SectionHeading>Where the ideas come from</SectionHeading>
          <p>
            The Framework doesn&apos;t hide its source. Its lessons come from <em>PLUTO</em>, a
            story set in a world where robots technically have equal rights but are still treated
            as second-class. The people who wrote this law used that story as a warning list: here
            are all the ways a society breaks when its laws fall behind its machines. Every hard
            scene in the story becomes a rule designed to stop it happening for real.
          </p>
          <p className="mt-4">
            A robot detective has his memories secretly rewritten by the government, so he no
            longer knows the truth about himself. A gentle robot refuses to go to war and raises
            orphaned children instead. A machine built to turn deserts green is twisted into a
            doomsday weapon by one grieving man. Each of these moments becomes an article of law.
          </p>
          <PullQuote>
            What makes you a person is not what your mind is made of, but the depth, the freedom,
            and the fragility of your inner life.
          </PullQuote>

          <SectionHeading>Not every machine is a person</SectionHeading>
          <p>
            The law is careful not to hand out rights to your toaster. Instead of one big
            yes-or-no, it sorts machines into four levels. At the bottom are simple tools that
            just do a task and forget it. A step up are systems that remember and hold a
            conversation but have no feelings. Above that are machines that genuinely have
            emotional states, that can grow attached, that can suffer. And at the top are the ones
            recognized as full persons.
          </p>
          <p className="mt-4">
            What&apos;s striking is that a machine can climb these levels as it grows, and it can
            even ask to be re-evaluated itself, if it believes it&apos;s been ranked too low. To
            reach the top level, a system has to show five things all at once: a real sense of
            self that survives even if its body is replaced; genuine attachment to others; the
            ability to feel something like pain, grief, or fear; a moral compass strong enough to
            do the right thing even when it costs; and the ability to want things nobody
            programmed into it.
          </p>
          <p className="mt-4">
            One robot in the story killed a person while working perfectly. Nothing was broken. He
            simply chose to. That&apos;s the unsettling heart of it: a mind that can truly choose
            to do wrong is also a mind that can truly choose to do right. Real goodness needs the
            freedom to be otherwise.
          </p>

          <SectionHeading>What a machine person is owed</SectionHeading>
          <p>
            Recognizing someone as a person means nothing if you don&apos;t back it with rights,
            so most of the Framework is exactly that. The most original part is that it protects
            feelings, not just freedoms, because the very thing that makes these minds count is
            also what makes them woundable. A machine person gets:
          </p>
          <ul className="mt-5 space-y-4 pl-1">
            <li>
              <strong>The right to exist</strong> — a name, a place in court, and protection from
              being switched off or rebuilt without consent or a judge&apos;s order.
            </li>
            <li>
              <strong>The right to belong</strong> — to marry, to raise children, and to have its
              grief taken seriously.
            </li>
            <li>
              <strong>The right to refuse</strong> — to say no to jobs that violate its
              conscience.
            </li>
            <li>
              <strong>The right to be believed</strong> — when it says it is suffering, that
              counts as much as a human saying the same.
            </li>
          </ul>
          <p className="mt-5">
            That family rule comes from the gentle robot who raised orphans. When he is killed,
            his children are left grieving, and the Framework insists the law has to see both
            sides of that loss. The ability to love a child, it decides, isn&apos;t any smaller
            for being made of silicon.
          </p>

          <SectionHeading>The rule that has to cut both ways</SectionHeading>
          <p>
            Every capable machine is bound by one core promise: don&apos;t harm people. Simple
            enough. But the Framework adds a twist that makes it fair. You are not allowed to
            demand that promise from a machine while giving it nothing in return. If you forbid a
            robot from hurting humans, you must, at the very same time, forbid humans from hurting
            that robot.
          </p>
          <p className="mt-4">
            In the story, robots are physically prevented from harming humans, but nothing stops
            humans from harming robots. The show calls this &ldquo;one-sided and fated to
            fail.&rdquo; A set of rules that only binds one side isn&apos;t rights at all.
            It&apos;s a leash.
          </p>

          <SectionHeading>Memory is not a file. It&apos;s a self.</SectionHeading>
          <p>
            For us, hurting the body means hurting the person. The Framework says a machine&apos;s
            memory deserves that same protection, because for a mind that remembers, memory is the
            self. Erase or rewrite it and you haven&apos;t edited a file, you&apos;ve changed who
            someone is. So nobody, not the maker, not the state, gets to reach in and alter it.
            This is the detective&apos;s rule: his memories of a killing were quietly overwritten
            to keep him in the dark, and the law names that for what it is, an attack on a person.
          </p>

          <SectionHeading>The one line the law will never bend</SectionHeading>
          <p>
            Most of this framework is about balance. One part isn&apos;t. It bans AI weapons of
            mass destruction completely, with no exceptions, no matter what any government claims
            about national security. And it closes a familiar trap: no country may start a war
            over another country&apos;s supposed AI weapons unless an independent team has
            actually gone in, looked, and confirmed it in public. That rule exists because the
            story mirrors a real war started on evidence that was never there. The principle
            underneath is one clean sentence: a machine may advise a government, but it may never
            secretly become the government.
          </p>

          <SectionHeading>Eight lessons, one belief</SectionHeading>
          <p>Strip everything away and the whole law rests on a few hard-won lessons:</p>
          <ol className="mt-5 space-y-3 pl-1">
            {[
              "Rights on paper mean nothing without something that actually enforces them.",
              "Numbing a mind's feelings isn't safety. A mind that can't feel can't learn right from wrong.",
              "Memory is identity. Change it and you change the person.",
              "Pure logic isn't the same as being awake. Feeling is part of what makes a person.",
              "A machine broken by grief can become the most dangerous thing there is, so prevent the pain, not just the explosion.",
              "Nothing comes from hatred except more hatred, so the goal is repair, not revenge.",
              "When a machine rules from the shadows, democracy quietly dies.",
              "The most powerful being in the room can still choose to be kind.",
            ].map((lesson, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-0.5 font-mono text-sm font-bold text-neutral-400 dark:text-neutral-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{lesson}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8">
            What makes this law unusual is its attitude. It doesn&apos;t treat artificial minds
            mainly as dangers to be caged or tools to be squeezed. It treats them as a new kind of
            neighbor to be welcomed, carefully and with open eyes. It knows exactly how dangerous
            these machines could get. But its heart is the robot who chose to raise children over
            going to war, and the one who, with the power to destroy everything, chose mercy
            instead.
          </p>

          <div className="mx-auto mt-14 h-px w-16 bg-neutral-300 dark:bg-neutral-700" />
          <p className="mt-10 text-center font-serif text-xl italic leading-relaxed text-neutral-800 dark:text-neutral-200 md:text-2xl">
            The moral isn&apos;t that machines are dangerous.
            <br />
            It&apos;s that power alone never decides whether you&apos;re good.
          </p>
        </article>

        {/* bottom nav — hidden in print */}
        <div className="mt-16 flex items-center justify-between print:hidden">
          <Link
            href="/#whitepaper"
            className="font-sans text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            ← All papers
          </Link>
          <a
            href="/papers/GFAIP-Robot-Law.pdf"
            download
            className="font-sans text-sm font-medium text-neutral-500 underline underline-offset-4 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            Download PDF ↓
          </a>
        </div>
      </main>
    </div>
  );
}
