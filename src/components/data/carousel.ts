import { LogicType, type TComponent } from "@luna-park/plugin";
import Carousel from "@nuxt/ui/components/Carousel.vue";

import { ButtonProps } from "@/components/element/button.ts";
import { AcceptableValues } from "@/lib/value.ts";
import { orientation } from "@/lib/variants.ts";

const carouselItems = LogicType.union([
    ...AcceptableValues.elements,
    LogicType.object({}, { customizable: true })
]);

const carousel = {
    component: Carousel,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/carousel"
    },
    emits: {
        select: LogicType.function(LogicType.object({ selectedIndex: LogicType.number() }), LogicType.unknown())
    },
    name: "Data/Carousel",
    properties: {
        active: LogicType.boolean(),
        align: LogicType.string({ default: "center", enum: ["start", "center", "end"] }),
        arrows: LogicType.boolean({ description: "Display prev and next buttons to scroll the carousel." }),
        autoHeight: LogicType.boolean({ description: "Enable Auto Height plugin" }),
        autoplay: LogicType.boolean({ description: "Enable Autoplay plugin" }),
        autoScroll: LogicType.boolean({ description: "Enable Auto Scroll plugin" }),
        classNames: LogicType.boolean({ description: "Enable Class Names plugin" }),
        containScroll: LogicType.union([LogicType.boolean({ enum: [false] }), LogicType.string({ enum: ["trimSnaps", "keepSnaps"] })], { default: "trimSnaps" }),
        dots: LogicType.boolean({ description: "Display dots to scroll to a specific slide." }),
        dragFree: LogicType.boolean(),
        dragThreshold: LogicType.number({ default: 10 }),
        duration: LogicType.number({ default: 25 }),
        fade: LogicType.boolean({ description: "Enable Fade plugin" }),
        inViewThreshold: LogicType.union([LogicType.number(), LogicType.array(LogicType.number())]),
        items: LogicType.array(carouselItems),
        loop: LogicType.boolean(),
        next: ButtonProps,
        nextIcon: LogicType.string({ description: "The icon displayed in the next button." }),
        orientation: { ...orientation, description: "The orientation of the carousel." },
        prev: ButtonProps,
        prevIcon: LogicType.string({ description: "The icon displayed in the prev button." }),
        skipSnaps: LogicType.boolean(),
        slidesToScroll: LogicType.union([LogicType.number(), LogicType.string({ enum: ["auto"] })], { default: 1 }),
        startIndex: LogicType.number(),
        wheelGestures: LogicType.boolean({ description: "Enable Wheel Gestures plugin" })
    },
    slots: {
        default: LogicType.object({ index: LogicType.number(), item: carouselItems })
    }
} satisfies TComponent;

export default carousel;
