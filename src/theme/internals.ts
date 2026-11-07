import { reactive } from "vue";

import type { TSettings } from "@/theme/settings.ts";
import { getDefaultSettings } from "@/theme/settings.ts";

export const internals = reactive<TSettings>(getDefaultSettings());
