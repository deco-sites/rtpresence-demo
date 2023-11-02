import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx", "../deco-apps/presence-test/**/*.tsx"],
  theme: { container: { center: true } },
};
