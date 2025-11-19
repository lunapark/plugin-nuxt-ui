import { extractFile } from "@luna-park/plugin/extractor";

const components = {
    chat: [
        "ChatMessage",
        "ChatMessages",
        "ChatPalette",
        "ChatPrompt",
        "ChatPromptSubmit"
    ],
    dashboard: [
        "DashboardGroup",
        "DashboardNavbar",
        "DashboardPanel",
        "DashboardResizeHandle",
        "DashboardSearch",
        "DashboardSearchButton",
        "DashboardSidebar",
        "DashboardSidebarCollapse",
        "DashboardSidebarToggle",
        "DashboardToolbar"
    ],
    data: [
        "Accordion",
        "Carousel",
        "Empty",
        "Marquee",
        "Table",
        "Timeline",
        "Tree",
        "User"
    ],
    elements: [
        "Alert",
        "Avatar",
        "AvatarGroup",
        "Badge",
        "Banner",
        "Button",
        "Calendar",
        "Card",
        "Chip",
        "Collapsible",
        "FieldGroup",
        "Icon",
        "Kbd",
        "Progress",
        "Separator",
        "Skeleton"
    ],
    form: [
        "Checkbox",
        "CheckboxGroup",
        "ColorPicker",
        "FileUpload",
        "Form",
        "FormField",
        "Input",
        "InputMenu",
        "InputNumber",
        "InputTags",
        "PinInput",
        "RadioGroup",
        "Select",
        "SelectMenu",
        "Slider",
        "Switch",
        "Textarea"
    ],
    layout: [
        "App",
        "Container",
        "Error",
        "Footer",
        "Header",
        "Main"
    ],
    navigation: [
        "Breadcrumb",
        "CommandPalette",
        "FooterColumns",
        "Link",
        "NavigationMenu",
        "Pagination",
        "Stepper",
        "Tabs"
    ],
    overlay: [
        "ContextMenu",
        "Drawer",
        "DropdownMenu",
        "Modal",
        "Popover",
        "Slideover",
        "Toast",
        "Tooltip"
    ],
    page: [
        "AuthForm",
        "BlogPost",
        "BlogPosts",
        "ChangelogVersion",
        "ChangelogVersions",
        "Page",
        "PageAnchors",
        "PageAside",
        "PageBody",
        "PageCard",
        "PageColumns",
        "PageCTA",
        "PageFeature",
        "PageGrid",
        "PageHeader",
        "PageHero",
        "PageLinks",
        "PageList",
        "PageLogos",
        "PageSection",
        "PricingPlan",
        "PricingPlans",
        "PricingTable"
    ]
};

for (const [category, elements] of Object.entries(components)) {
    for (const element of elements) {
        let filePath = `@nuxt/ui/components/${ element }.vue`;
        if (category === "content") {
            filePath = `@nuxt/ui/components/content/${ element }.vue`;
        }
        // console.log(filePath);
        // await extractFile(filePath, `${ import.meta.dirname }/generated/${ category }/${ element }.ts`);
    }
}

await extractFile("@nuxt/ui/components/InputDate.vue", `${ import.meta.dirname }/generated/form/InputDate.ts`);
await extractFile("@nuxt/ui/components/InputTime.vue", `${ import.meta.dirname }/generated/form/InputTime.ts`);
