import { LogicType, type TComponent } from "@luna-park/plugin";
import Input from "@nuxt/ui/components/Input.vue";

const ModelModifiers = LogicType.object({ lazy: LogicType.boolean({ name: "lazy", optional: true }), nullable: LogicType.boolean({ name: "nullable", optional: true }), number: LogicType.boolean({ name: "number", optional: true }), optional: LogicType.boolean({ name: "optional", optional: true }), string: LogicType.boolean({ name: "string", optional: true }), trim: LogicType.boolean({ name: "trim", optional: true }) }, { name: "ModelModifiers" });

const ChipProps = LogicType.object({ as: LogicType.unknown({ description: "The element or component this component should render as.", name: "as", optional: true }), class: LogicType.unknown({ name: "class", optional: true }), color: LogicType.union([LogicType.string(), LogicType.number(), LogicType.interface("symbol")], { name: "color", optional: true }), inset: LogicType.boolean({ description: "When `true`, keep the chip inside the component for rounded elements.", name: "inset", optional: true }), position: LogicType.union([LogicType.string(), LogicType.number(), LogicType.interface("symbol")], { description: "The position of the chip.", name: "position", optional: true }), size: LogicType.union([LogicType.string(), LogicType.number(), LogicType.interface("symbol")], { name: "size", optional: true }), standalone: LogicType.boolean({ description: "When `true`, render the chip relatively to the parent.", name: "standalone", optional: true }), text: LogicType.union([LogicType.string(), LogicType.number()], { description: "Display some text inside the chip.", name: "text", optional: true }), ui: LogicType.object({}, { name: "ui", optional: true }) }, { name: "ChipProps" });

const AvatarProps = LogicType.object({ alt: LogicType.string({ name: "alt", optional: true }), as: LogicType.unknown({ description: "The element or component this component should render as.", name: "as", optional: true }), chip: LogicType.union([LogicType.boolean(), ChipProps], { name: "chip", optional: true }), class: LogicType.unknown({ name: "class", optional: true }), icon: LogicType.union([LogicType.string(), LogicType.interface("object")], { name: "icon", optional: true }), size: LogicType.union([LogicType.string(), LogicType.number(), LogicType.interface("symbol")], { name: "size", optional: true }), src: LogicType.string({ name: "src", optional: true }), style: LogicType.unknown({ name: "style", optional: true }), text: LogicType.string({ name: "text", optional: true }), ui: LogicType.object({}, { name: "ui", optional: true }) }, { name: "AvatarProps" });

const VNodeProps = LogicType.object({ key: LogicType.union([LogicType.string(), LogicType.number()], { name: "key", optional: true }), onVnodeBeforeMount: LogicType.union([VNodeMountHook, LogicType.array(VNodeMountHook)], { name: "onVnodeBeforeMount", optional: true }), onVnodeBeforeUnmount: LogicType.union([VNodeMountHook, LogicType.array(VNodeMountHook)], { name: "onVnodeBeforeUnmount", optional: true }), onVnodeBeforeUpdate: LogicType.union([VNodeUpdateHook, LogicType.array(VNodeUpdateHook)], { name: "onVnodeBeforeUpdate", optional: true }), onVnodeMounted: LogicType.union([VNodeMountHook, LogicType.array(VNodeMountHook)], { name: "onVnodeMounted", optional: true }), onVnodeUnmounted: LogicType.union([VNodeMountHook, LogicType.array(VNodeMountHook)], { name: "onVnodeUnmounted", optional: true }), onVnodeUpdated: LogicType.union([VNodeUpdateHook, LogicType.array(VNodeUpdateHook)], { name: "onVnodeUpdated", optional: true }), ref: LogicType.interface("VNodeRef", { name: "ref", optional: true }), ref_for: LogicType.boolean({ name: "ref_for", optional: true }), ref_key: LogicType.string({ name: "ref_key", optional: true }) }, { name: "VNodeProps" });

const PropertyKey = LogicType.union([LogicType.string(), LogicType.number(), LogicType.interface("symbol")], { name: "PropertyKey" });

const VNodeMountHook = LogicType.object({}, { name: "VNodeMountHook" });

const VNodeUpdateHook = LogicType.object({}, { name: "VNodeUpdateHook" });

const InputSlots = LogicType.object({ default: LogicType.function(LogicType.object({ props: LogicType.object({ ui: LogicType.object() }) }), LogicType.unknown(), { name: "default" }), leading: LogicType.function(LogicType.object({ props: LogicType.object({ ui: LogicType.object() }) }), LogicType.unknown(), { name: "leading" }), trailing: LogicType.function(LogicType.object({ props: LogicType.object({ ui: LogicType.object() }) }), LogicType.unknown(), { name: "trailing" }) }, { name: "InputSlots" });

export const input: TComponent = {
    component: Input,
    emits: {
        blur: LogicType.function(LogicType.object({ event: LogicType.interface("FocusEvent") }), LogicType.unknown()),
        change: LogicType.function(LogicType.object({ event: LogicType.interface("Event") }), LogicType.unknown())
    },
    models: {
        modelValue: LogicType.interface("AcceptableValue")
    },
    name: "Element/Input",
    properties: {
        color: LogicType.union([LogicType.string(), LogicType.number(), LogicType.interface("symbol")], { name: "color" }),
        name: LogicType.string(),
        placeholder: LogicType.string({ description: "The placeholder text when the input is empty.", name: "placeholder" }),
        autocomplete: LogicType.string({ name: "autocomplete" }),
        required: LogicType.boolean({ name: "required" }),
        size: LogicType.union([LogicType.string(), LogicType.number(), LogicType.interface("symbol")], { name: "size" }),
        autofocus: LogicType.boolean({ name: "autofocus" }),
        type: LogicType.interface("InputTypeHTMLAttribute", { name: "type" }),
        autofocusDelay: LogicType.number({ name: "autofocusDelay" }),
        defaultValue: LogicType.interface("AcceptableValue", { name: "defaultValue" }),
        disabled: LogicType.boolean({ name: "disabled" }),
        variant: LogicType.union([LogicType.string(), LogicType.number(), LogicType.interface("symbol")], { name: "variant" }),
        avatar: AvatarProps,
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state.", name: "highlight" }),
        icon: LogicType.union([LogicType.string(), LogicType.interface("object")], { description: "Display an icon based on the `leading` and `trailing` props.", name: "icon" }),
        leading: LogicType.boolean({ description: "When `true`, the icon will be displayed on the left side.", name: "leading" }),
        leadingIcon: LogicType.union([LogicType.string(), LogicType.interface("object")], { description: "Display an icon on the left side.", name: "leadingIcon" }),
        modelModifiers: ModelModifiers,
        ui: LogicType.object({}, { name: "ui" }),
        loading: LogicType.boolean({ description: "When `true`, the loading icon will be displayed.", name: "loading" }),
        loadingIcon: LogicType.union([LogicType.string(), LogicType.interface("object")], { description: "The icon when the `loading` prop is `true`.", name: "loadingIcon" }),
        trailing: LogicType.boolean({ description: "When `true`, the icon will be displayed on the right side.", name: "trailing" }),
        trailingIcon: LogicType.union([LogicType.string(), LogicType.interface("object")], { description: "Display an icon on the right side.", name: "trailingIcon" })
    }
};
