import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import ChatPalette from "@nuxt/ui/components/ChatPalette.vue";

const chatPalette = {
    component: ChatPalette,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/chat-palette"
    },
    name: "Chat/ChatPalette",
    properties: {},
    slots: {
        default: LogicType.void(),
        prompt: LogicType.void()
    }
} satisfies TComponent;

export default chatPalette;
export const ChatPaletteProps = LogicUtil.partial(LogicType.object(chatPalette.properties));
