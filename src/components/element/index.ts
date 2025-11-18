import type { TComponent } from "@luna-park/plugin";

import { alert } from "./alert.ts";
import { button } from "./button.ts";

export const element: Array<TComponent> = [
    alert,
    button
];
