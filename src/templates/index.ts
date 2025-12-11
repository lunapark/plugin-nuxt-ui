import type { TFileExport, TTemplate } from "@luna-park/plugin";

import dashboardTemplate from "@/templates/dashboard.json";
import dashboardPreview from "@/templates/dashboard.png";
import landingTemplate from "@/templates/landing.json";
import landingPreview from "@/templates/landing.png";

export const templates = [
    {
        name: "Landing",
        preview: landingPreview,
        template: landingTemplate as unknown as TFileExport
    }, {
        name: "Dashboard",
        preview: dashboardPreview,
        template: dashboardTemplate as unknown as TFileExport
    }
] satisfies Array<TTemplate>;
