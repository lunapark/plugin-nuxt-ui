import { LogicType, type TComponent } from "@luna-park/plugin";
import FileUpload from "@nuxt/ui/components/FileUpload.vue";

import { color, size } from "@/lib/variants.ts";

const fileUpload = {
    component: FileUpload,
    documentation: {
        link: "https://ui.nuxt.com/docs/components/file-upload"
    },
    models: {
        modelValue: LogicType.union(LogicType.interface("File"), LogicType.array(LogicType.interface("File")))
    },
    name: "Form/FileUpload",
    properties: {
        accept: LogicType.string({ default: "*", description: "Specifies the allowed file types for the input. Provide a comma-separated list of MIME types or file extensions (e.g., \"image/png,application/pdf,.jpg\")." }),
        color,
        description: LogicType.string(),
        disabled: LogicType.boolean(),
        dropzone: LogicType.boolean({ description: "Create a zone that allows the user to drop files onto it." }),
        highlight: LogicType.boolean({ description: "Highlight the ring color like a focus state." }),
        icon: LogicType.string({ description: "The icon to display." }),
        interactive: LogicType.boolean({ description: "Make the dropzone interactive when the user is clicking on it." }),
        label: LogicType.string(),
        layout: LogicType.string({ default: "grid", description: "The layout of how files are displayed.\nOnly works when `variant` is `area`.", enum: ["list", "grid"] }),
        multiple: LogicType.boolean(),
        name: LogicType.string(),
        position: LogicType.string({ default: "outside", description: "The position of the files.\nOnly works when `variant` is `area` and when `layout` is `list`.", enum: ["outside", "inside"] }),
        preview: LogicType.boolean({ description: "Show the file preview/list after upload." }),
        required: LogicType.boolean(),
        reset: LogicType.boolean({ description: "Reset the file input when dialog is opened." }),
        size,
        variant: LogicType.string({ default: "area", description: "The `button` variant is only available when `multiple` is `false`.", enum: ["button", "area"] })
    },
    slots: {
        default: LogicType.void(),
        description: LogicType.void(),
        label: LogicType.void(),
        leading: LogicType.void()
    }
} satisfies TComponent;

export default fileUpload;
