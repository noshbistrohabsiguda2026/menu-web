import { defineConfig } from "nitro";

export default defineConfig({
  plugins: ["./plugins/push-retry.ts"],
});
