## Dashboard structure

Dashboard components only work together, nested this way:

```html
<nuxt-ui:Dashboard.DashboardGroup>
    <nuxt-ui:Dashboard.DashboardSidebar collapsible resizable>
        <template #header="{ collapsed }">
            <txt v-if="!collapsed" as="strong">Acme</txt>
        </template>
        <template #default="{ collapsed }">
            <nuxt-ui:Dashboard.DashboardSearchButton :collapsed="collapsed" />
            <nuxt-ui:Navigation.NavigationMenu :collapsed="collapsed" orientation="vertical" :items="[
                { label: 'Home', to: '/', icon: 'lucide:house' },
                { label: 'Inbox', to: '/inbox', icon: 'lucide:inbox' }
            ]" />
        </template>
    </nuxt-ui:Dashboard.DashboardSidebar>
    <nuxt-ui:Dashboard.DashboardSearch />
    <nuxt-ui:Dashboard.DashboardPanel id="home">
        <template #header>
            <nuxt-ui:Dashboard.DashboardNavbar title="Home">
                <template #leading>
                    <nuxt-ui:Dashboard.DashboardSidebarCollapse />
                </template>
                <template #right>
                    <nuxt-ui:Element.Button icon="lucide:plus" label="New" />
                </template>
            </nuxt-ui:Dashboard.DashboardNavbar>
            <nuxt-ui:Dashboard.DashboardToolbar>
                <template #left>
                    <nuxt-ui:Navigation.Tabs :items="[{ label: 'All' }, { label: 'Unread' }]" :content="false" />
                </template>
            </nuxt-ui:Dashboard.DashboardToolbar>
        </template>
        <template #body>
            <div>Page content</div>
        </template>
    </nuxt-ui:Dashboard.DashboardPanel>
</nuxt-ui:Dashboard.DashboardGroup>
```

- `DashboardGroup` is the root of the dashboard and fills the whole viewport. Its default slot holds one `DashboardSidebar`, optionally one `DashboardSearch`, and one or more `DashboardPanel` side by side. Never put it inside `Layout.Main`, a `Layout.Header`/`Layout.Footer` layout or another dashboard component.
- `DashboardSidebar`, `DashboardSearch` and `DashboardPanel` must be direct children of `DashboardGroup`, or the root of a local component placed there.
- `DashboardNavbar` and `DashboardToolbar` go in the `header` slot of `DashboardPanel`, the toolbar after the navbar. Page content goes in the `body` slot, which scrolls and has padding; use the default slot instead only for a custom layout without that padding.
- `DashboardSidebarCollapse` collapses the sidebar on desktop and only works when the sidebar has `collapsible`. Place it in the `header` slot of `DashboardSidebar` or the `leading` slot of `DashboardNavbar`.
- `DashboardSidebarToggle` opens the sidebar on mobile. It is already rendered by `DashboardSidebar` and `DashboardNavbar`: add it only in their `toggle` slot to customize it.
- `DashboardSearchButton` opens `DashboardSearch` and can be placed anywhere inside the group, usually in the sidebar. Pass the sidebar's `collapsed` slot value to its `collapsed` prop.
- Give every `DashboardPanel` an `id` when several pages use panels, so their saved sizes don't conflict.
- Use `Layout.Sidebar` instead of `DashboardSidebar` for a sidebar outside a dashboard.
