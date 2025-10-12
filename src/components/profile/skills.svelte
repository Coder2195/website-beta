<script lang="ts">
  import Section from "./section.svelte";
  import { optimize } from "@/lib/image";

  let { direction }: { direction: "up" | "down" } = $props();

  type SkillEntry = {
    icon: string;
    title: string;
    note: string;
  };

  function shuffleAndSplit(entries: SkillEntry[]): SkillEntry[][] {
    const shuffled = [...entries].sort(() => Math.random() - 0.5);

    return Array.from({ length: 4 }, (_, i) =>
      shuffled.filter((_, index) => index % 4 === i)
    );
  }

  const SKILLS_LIST: SkillEntry[] = [
    {
      icon: "/logos/archlinux.svg",
      title: "Arch Linux",
      note: "EOS was &ldquo;NOT Arch&rdquo; so I easily converted.",
    },
    {
      icon: "/logos/csharp.svg",
      title: "C#",
      note: "See sharp. Why I need glasses.",
    },
    {
      icon: "/logos/css.svg",
      title: "CSS",
      note: "Write in with style.",
    },
    {
      icon: "/logos/endeavouros.svg",
      title: "EndeavourOS",
      note: "Still using Arch btw.",
    },
    {
      icon: "/logos/git.svg",
      title: "Git",
      note: "Just commit.",
    },
    {
      icon: "/logos/godot.svg",
      title: "Godot",
      note: "Go. Dot.",
    },
    {
      icon: "/logos/html.svg",
      title: "HTML",
      note: "Marked up for the web.",
    },
    {
      icon: "/logos/java.svg",
      title: "Java",
      note: "Write once, debug everywhere.",
    },
    {
      icon: "/logos/javascript.svg",
      title: "JavaScript",
      note: "Yea, Typescript will always be better.",
    },
    {
      icon: "/logos/neovim.svg",
      title: "Neovim",
      note: "Tried making it like VSCode.",
    },
    {
      icon: "/logos/nextjs.svg",
      title: "NextJS",
      note: "Truly next level.",
    },
    {
      icon: "/logos/nodejs.svg",
      title: "NodeJS",
      note: "WTF is a PHP?",
    },
    {
      icon: "/logos/prisma.svg",
      title: "Prisma",
      note: "Which insane fella writes raw queries?",
    },
    {
      icon: "/logos/python.svg",
      title: "Python",
      note: "I&apos;ll <code>pass</code> on the snake.",
    },
    {
      icon: "/logos/react.svg",
      title: "React",
      note: "Why so many libraries involving atoms?",
    },
    {
      icon: "/logos/rust.svg",
      title: "Rust",
      note: "Blazingly fast traits and confusion.",
    },
    {
      icon: "/logos/scratch.svg",
      title: "Scratch",
      note: "Where it all began.",
    },
    {
      title: "TailwindCSS",
      icon: "/logos/tailwindcss.svg",
      note: "CSS in my files? No way!",
    },
    {
      icon: "/logos/typescript.svg",
      title: "TypeScript",
      note: "Gigachad version of JavaScript.",
    },
    {
      icon: "/logos/ubuntu.svg",
      title: "Ubuntu",
      note: "Windows broke on me and I had a USB stick.",
    },
    {
      icon: "/logos/vscode.svg",
      title: "VSCode",
      note: "My trusty ol' editor.",
    },
    {
      icon: "/logos/svelte.svg",
      title: "Svelte",
      note: "The framework of this site.",
    },
  ];

  const splitEntries = shuffleAndSplit(SKILLS_LIST);
</script>

<Section {direction}>
  <h1>Experience</h1>
  <div class="grow flex items-end justify-center flex-wrap">
    I included everything that was part of my journey...
  </div>
  <div class="rounded-lg bordered m-4 py-2">
    <div
      class="relative mask-x-from-70% mask-x--to-100% overflow-hidden flex flex-col justify-center h-full"
    >
      {#each splitEntries as entries, index}
        {#key index}
          {#snippet list(entries: SkillEntry[])}
            {#each entries as entry}
              <div
                class="inline-flex items-center bg-mocha-surface0 p-2 rounded-sm m-2 gap-3 min-w-48 text-left"
              >
                <div
                  class="w-9 h-9 rounded-md relative flex items-center justify-center"
                >
                  <img
                    src={optimize(entry.icon)}
                    alt=""
                    class="object-contain"
                  />
                </div>
                <div class="flex flex-col">
                  <h6>{entry.title}</h6>
                  <p class="text-xs -mt-1">{@html entry.note}</p>
                </div>
              </div>
            {/each}
          {/snippet}
          <div class=" overflow-x-hidden flex relative">
            <div
              class={`flex items-center  ${
                index % 2 === 0 ? "animate-marquee" : "animate-marquee3"
              } whitespace-nowrap`}
            >
              {@render list(entries)}
            </div>
            <div
              class={`flex absolute top-0 ${
                index % 2 === 0 ? "animate-marquee2" : "animate-marquee4"
              } whitespace-nowrap`}
            >
              {@render list(entries)}
            </div>
          </div>
        {/key}
      {/each}
    </div>
  </div>
  <div class="grow">
    It's not <i>that</i> much...
  </div>
</Section>
