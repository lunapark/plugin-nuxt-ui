import { LogicType, type TComponent } from "@luna-park/plugin";
import Form from "@nuxt/ui/components/Form.vue";

const FormError = LogicType.object({ message: LogicType.string(), name: LogicType.string({ optional: true }) });

const form = {
    component: Form,
    emits: {
        error: LogicType.function(LogicType.object(), LogicType.unknown()),
        submit: LogicType.function(LogicType.object(), LogicType.unknown())
    },
    name: "Form/Form",
    properties: {
        disabled: LogicType.boolean({ description: "Disable all inputs inside the form." }),
        id: LogicType.union([LogicType.string(), LogicType.number()]),
        loadingAuto: LogicType.boolean({ description: "When true, disable form elements during submit." }),
        name: LogicType.string({ description: "Path of the form's state within it's parent form. Used for nesting forms. Only available if `nested` is true." }),
        nested: LogicType.boolean({ description: "Attach to parent Form and validate together." }),
        schema: LogicType.unknown({ description: "Validation schema (Zod/Yup/Joi/etc.)." }),
        state: LogicType.unknown({ description: "An object representing the current state of the form." }),
        transform: LogicType.boolean({ description: "Apply schema transformations on submit." }),
        validate: LogicType.function(LogicType.object({ state: LogicType.unknown() }), LogicType.array(FormError)),
        validateOn: LogicType.array(LogicType.string({ enum: ["input", "blur", "change", "focus"] }), { default: ["blur", "change", "input"], description: "Input events that trigger validation." }),
        validateOnInputDelay: LogicType.number({ default: 300, description: "Delay before validating on input (ms)." })
    },
    slots: {
        default: LogicType.void()
    }
} satisfies TComponent;

export default form;
