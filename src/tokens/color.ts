import { ETokenType, type TToken } from "@luna-park/plugin";

const colorSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export const colorTokens = [
    {
        id: "ui-primary",
        name: "Primary",
        type: ETokenType.Color,
        value: "var(--ui-primary)"
    },
    {
        id: "ui-text",
        name: "Text",
        type: ETokenType.Color,
        value: "var(--ui-text)"
    },
    {
        id: "ui-text-inverted",
        name: "Text inverted",
        type: ETokenType.Color,
        value: "var(--ui-text-inverted)"
    },
    {
        id: "ui-bg",
        name: "Background",
        type: ETokenType.Color,
        value: "var(--ui-bg)"
    },
    {
        id: "ui-bg-inverted",
        name: "Background inverted",
        type: ETokenType.Color,
        value: "var(--ui-bg-inverted)"
    },
    {
        id: "ui-secondary",
        name: "Secondary",
        type: ETokenType.Color,
        value: "var(--ui-secondary)"
    },
    {
        id: "ui-success",
        name: "Success",
        type: ETokenType.Color,
        value: "var(--ui-success)"
    },
    {
        id: "ui-info",
        name: "Info",
        type: ETokenType.Color,
        value: "var(--ui-info)"
    },
    {
        id: "ui-warning",
        name: "Warning",
        type: ETokenType.Color,
        value: "var(--ui-warning)"
    },
    {
        id: "ui-error",
        name: "Error",
        type: ETokenType.Color,
        value: "var(--ui-error)"
    },
    ...colorSteps.map((step) => ({
        id: `ui-color-primary-${ step }`,
        name: `Primary ${ step }`,
        type: ETokenType.Color,
        value: `var(--ui-color-primary-${ step })`
    })),
    ...colorSteps.map((step) => ({
        id: `ui-color-neutral-${ step }`,
        name: `Neutral ${ step }`,
        type: ETokenType.Color,
        value: `var(--ui-color-neutral-${ step })`
    })),
    ...colorSteps.map((step) => ({
        id: `ui-color-secondary-${ step }`,
        name: `Secondary ${ step }`,
        type: ETokenType.Color,
        value: `var(--ui-color-secondary-${ step })`
    })),
    ...colorSteps.map((step) => ({
        id: `ui-color-success-${ step }`,
        name: `Success ${ step }`,
        type: ETokenType.Color,
        value: `var(--ui-color-success-${ step })`
    })),
    ...colorSteps.map((step) => ({
        id: `ui-color-info-${ step }`,
        name: `Info ${ step }`,
        type: ETokenType.Color,
        value: `var(--ui-color-info-${ step })`
    })),
    ...colorSteps.map((step) => ({
        id: `ui-color-warning-${ step }`,
        name: `Warning ${ step }`,
        type: ETokenType.Color,
        value: `var(--ui-color-warning-${ step })`
    })),
    ...colorSteps.map((step) => ({
        id: `ui-color-error-${ step }`,
        name: `Error ${ step }`,
        type: ETokenType.Color,
        value: `var(--ui-color-error-${ step })`
    }))
] satisfies Array<TToken>;
