<script lang="ts">
  import { Motion, useAnimation } from "svelte-motion";

  export let width = "fit-content";
  export let boxColor = "#00E5FF";
  export let duration = 0.5;

  let mainControls = useAnimation();
  let sideControls = useAnimation();

  export const reveal = () => {
    mainControls.start("visible");
    sideControls.start("visible");
  };

  export const hide = () => {
    mainControls.start("hidden");
    sideControls.start("hidden");
  };
</script>

<div class="relative overflow-hidden" style="width:{width}">
  <Motion
    let:motion
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: duration, delay: 0.25 }}
  >
    <div use:motion>
      <slot>Default</slot>
    </div>
  </Motion>
  <Motion
    variants={{
      hidden: { left: 0 },
      visible: { left: "100%" },
    }}
    initial="hidden"
    animate={sideControls}
    transition={{ duration: duration, ease: "easeIn" }}
    let:motion
  >
    <div
      style="background:{boxColor}"
      class="absolute top-[4px] bottom-[4px] left-0 right-0 z-40"
      use:motion
    ></div>
  </Motion>
</div>