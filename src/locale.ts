import type { Locale, Messages } from "@nuxt/ui";
import * as locales from "@nuxt/ui/locale";
import { shallowRef } from "vue";

export const NAVIGATOR_LOCALE = "navigator";

export const localeCodes = Object.values(locales).map(({ code }) => code);

export const locale = shallowRef(resolveLocale(NAVIGATOR_LOCALE));

export function resolveLocale(code: string): Locale<Messages> {
    const target = code === NAVIGATOR_LOCALE ? navigator.language : code;
    const [language] = target.toLowerCase().split("-");
    const list = Object.values(locales);
    const match = list.find((item) => item.code.toLowerCase() === target.toLowerCase()) ??
        list.find((item) => item.code.toLowerCase() === language) ??
        locales.en;

    return { ...match, code: target };
}

export function getLocaleSetup(code: string) {
    if (code !== NAVIGATOR_LOCALE) {
        return [
            `import { ${ code.toLowerCase().replace("-", "_") } as nuxtUiLocale } from "@nuxt/ui/locale";`,
            `document.documentElement.lang = ${ JSON.stringify(code) };`
        ].join("\n");
    }

    return [
        "import * as nuxtUiLocales from \"@nuxt/ui/locale\";",
        "const nuxtUiLocaleList = Object.values(nuxtUiLocales);",
        "const nuxtUiLocaleCode = navigator.language;",
        "const nuxtUiLocale = {",
        "    ...(nuxtUiLocaleList.find((item) => item.code.toLowerCase() === nuxtUiLocaleCode.toLowerCase()) ??",
        "        nuxtUiLocaleList.find((item) => item.code.toLowerCase() === nuxtUiLocaleCode.toLowerCase().split(\"-\")[0]) ??",
        "        nuxtUiLocales.en),",
        "    code: nuxtUiLocaleCode",
        "};",
        "document.documentElement.lang = nuxtUiLocaleCode;"
    ].join("\n");
}
