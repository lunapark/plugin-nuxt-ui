import type { TComponent } from "@luna-park/plugin";

import { error } from "./error.ts";
import { header } from "./header.ts";

export const layout: Array<TComponent> = [
    error,
    header
];
