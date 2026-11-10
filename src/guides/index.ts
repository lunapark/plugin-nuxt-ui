import type { TPluginGuide } from "@luna-park/plugin";

import chatPrompt from "@/guides/chatPrompt.md?raw";
import dashboard from "@/guides/dashboard.md?raw";
import form from "@/guides/form.md?raw";
import lists from "@/guides/lists.md?raw";
import page from "@/guides/page.md?raw";
import sidebar from "@/guides/sidebar.md?raw";
import siteLayout from "@/guides/siteLayout.md?raw";

export const guides: Record<string, TPluginGuide> = {
    "chat-prompt": {
        content: chatPrompt,
        description: "ChatPrompt with ChatPromptSubmit and its status"
    },
    "dashboard": {
        content: dashboard,
        description: "Nesting of every Dashboard component: group, sidebar, panel, navbar, toolbar, search"
    },
    "form": {
        content: form,
        description: "Form with FormField: state, field names, validation and submit"
    },
    "lists": {
        content: lists,
        description: "BlogPosts, PricingPlans, ChangelogVersions and PageGrid/PageColumns with their items"
    },
    "page": {
        content: page,
        description: "Docs or content page: Page with PageAside, PageHeader and PageBody"
    },
    "sidebar": {
        content: sidebar,
        description: "Standalone Sidebar next to the page content, outside a dashboard"
    },
    "site-layout": {
        content: siteLayout,
        description: "Site page structure: Header, Main, Footer, Container and Error"
    }
};
