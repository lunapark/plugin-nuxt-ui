import { ETokenType, type TToken } from "@luna-park/plugin";

export const lengthTokens = [
    {
        id: "ui-header-height",
        name: "Header height",
        type: ETokenType.Length,
        value: "var(--ui-header-height)"
    },
    {
        id: "ui-container",
        name: "Container",
        type: ETokenType.Length,
        value: "var(--ui-container)"
    },
    {
        id: "ui-radius",
        name: "Radius",
        type: ETokenType.Length,
        value: "var(--ui-radius)"
    }
] satisfies Array<TToken>;
