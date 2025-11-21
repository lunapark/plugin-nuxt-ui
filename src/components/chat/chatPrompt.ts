import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import ChatPrompt from "@nuxt/ui/components/ChatPrompt.vue";

import { TextareaProps } from "@/components/form/textarea.ts";

const chatPrompt = {
    component: ChatPrompt,
    emits: {
        close: LogicType.function(LogicType.object({ event: LogicType.interface("Event") }), LogicType.void()),
        submit: LogicType.function(LogicType.object({ event: LogicType.interface("Event") }), LogicType.void())
    },
    models: {
        modelValue: LogicType.string()
    },
    name: "Chat/ChatPrompt",
    properties: {
        ...LogicUtil.pick(TextareaProps, ["rows", "autofocus", "autofocusDelay", "autoresize", "autoresizeDelay", "maxrows", "icon", "avatar", "loading", "loadingIcon", "disabled"]).properties,
        error: LogicType.interface("Error")
    },
    slots: {
        default: LogicType.void(),
        footer: LogicType.void(),
        header: LogicType.void(),
        leading: LogicType.void(),
        trailing: LogicType.void()
    }
} satisfies TComponent;

export default chatPrompt;
export const ChatPromptProps = LogicUtil.partial(LogicType.object(chatPrompt.properties));
