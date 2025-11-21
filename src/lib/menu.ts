import { LogicType } from "@luna-park/plugin";

import { DrawerProps } from "@/components/overlay/drawer.ts";
import { ModalProps } from "@/components/overlay/modal.ts";
import { SlideoverProps } from "@/components/overlay/slideover.ts";

export const menuProp = LogicType.unknown({
    dynamic: ({ inputs }) => {
        switch (inputs?.mode) {
            case "modal":
                return ModalProps;
            case "slideover":
                return SlideoverProps;
            case "drawser":
                return DrawerProps;
        }
        return LogicType.unknown();
    }
});
