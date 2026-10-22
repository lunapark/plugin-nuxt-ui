import { LogicType } from "@luna-park/plugin";

export function iconType(args: Parameters<typeof LogicType.string>[0] = {}) {
    return LogicType.string({ ...args, options: { ...args.options, input: "nuxt-ui/icon" } });
}
