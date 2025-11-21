import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import ChatPalette from "@nuxt/ui/components/ChatPalette.vue";

const chatPalette = {
    name: "Chat/ChatPalette",
    component: ChatPalette,
    properties: {},
    slots: {
        default: LogicType.void(),
        prompt: LogicType.void()
    }
} satisfies TComponent;

export default chatPalette;
export const ChatPaletteProps = LogicUtil.partial(LogicType.object(chatPalette.properties));
