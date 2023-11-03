import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx", "../deco-apps/presence/**/*.tsx"],
  theme: { container: { center: true } },
};
