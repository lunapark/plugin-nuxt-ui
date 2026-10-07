import { LogicType, LogicUtil, type TComponent } from "@luna-park/plugin";
import ChatShimmer from "@nuxt/ui/components/ChatShimmer.vue";

const chatShimmer = {
    build: {
        name: "UChatShimmer"
    },
    component: ChatShimmer,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/chat-shimmer"
    },
    name: "Chat/ChatShimmer",
    properties: {
        duration: LogicType.number({ default: 2, description: "The duration of the shimmer animation in seconds." }),
        spread: LogicType.number({ default: 2, description: "The spread multiplier for the shimmer highlight, scaled by text length." }),
        text: LogicType.string({ description: "The text to display with the shimmer effect." })
    },
    slots: {}
} satisfies TComponent;

export default chatShimmer;
export const ChatShimmerProps = LogicUtil.partial(LogicType.object({
    duration: chatShimmer.properties.duration,
    spread: chatShimmer.properties.spread
}));
