<script lang="ts">
  import { onDestroy } from "svelte";

  const target = "Coder2195";
  let text = $state("");

  let i = 0;
  let interval = setInterval(() => {
    if (i < target.length) {
      text += target[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 150);

  onDestroy(() => {
    clearInterval(interval);
    console.log("Interval cleared");
  });
</script>

<h1 class=" flex flex-wrap items-center gap-3 py-4">
  Hello, I&apos;m{" "}
  <span
    class="border-mocha-mauve bg-mocha-mantle rounded-lg border-4 p-2 font-mono text-5xl"
  >
    {text}<span class="animate-blink -mx-3">|</span>
  </span>
</h1>
