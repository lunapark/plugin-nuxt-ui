import { LogicType, makeLogicNode } from "@luna-park/plugin";

import { ToastProps } from "@/components/overlay/toast.ts";

export default [
    makeLogicNode({
        display: {
            name: "Add Toast"
        },
        inputs: {
            in_exec: LogicType.exec(),
            in_props: { ...ToastProps, name: "Props" }
        },
        methods: {
            async in_exec() {
                this.out_id = useToast().add(this.in_props).id as string;
                await this.out_exec();
            }
        },
        name: "toast/add",
        outputs: {
            out_exec: LogicType.exec(),
            out_id: LogicType.string()
        }
    }),
    makeLogicNode({
        display: {
            name: "Clear Toast"
        },
        inputs: {
            in_exec: LogicType.exec()
        },
        methods: {
            async in_exec() {
                useToast().clear();
                await this.out_exec();
            }
        },
        name: "toast/clear",
        outputs: {
            out_exec: LogicType.exec()
        }
    }),
    makeLogicNode({
        display: {
            name: "Remove Toast"
        },
        inputs: {
            in_exec: LogicType.exec(),
            in_id: LogicType.string()
        },
        methods: {
            async in_exec() {
                useToast().remove(this.in_id);
                await this.out_exec();
            }
        },
        name: "toast/remove",
        outputs: {
            out_exec: LogicType.exec()
        }
    })
];
