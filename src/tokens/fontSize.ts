import { ETokenType, type TToken } from "@luna-park/plugin";

export const fontSizeTokens = [
    {
        id: "text-3xl",
        name: "Text 3xlarge",
        type: ETokenType.FontSize,
        value: "var(--text-3xl)"
    },
    {
        id: "text-2xl",
        name: "Text 2xlarge",
        type: ETokenType.FontSize,
        value: "var(--text-2xl)"
    },
    {
        id: "text-xl",
        name: "Text xlarge",
        type: ETokenType.FontSize,
        value: "var(--text-xl)"
    },
    {
        id: "text-lg",
        name: "Text large",
        type: ETokenType.FontSize,
        value: "var(--text-lg)"
    },
    {
        id: "text-base",
        name: "Text base",
        type: ETokenType.FontSize,
        value: "var(--text-base)"
    },
    {
        id: "text-sm",
        name: "Text small",
        type: ETokenType.FontSize,
        value: "var(--text-sm)"
    },
    {
        id: "text-xs",
        name: "Text xsmall",
        type: ETokenType.FontSize,
        value: "var(--text-xs)"
    }
] satisfies Array<TToken>;
