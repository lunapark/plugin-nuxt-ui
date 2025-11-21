import { useColorMode } from "@vueuse/core";

export const colorMode = useColorMode({ selector: "[data-nuxt-body]" });
