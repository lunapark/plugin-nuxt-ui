## Sidebar layout

`Sidebar` pushes the content next to it, so place both in a flex row that fills the available space:

```html
<div style="display:flex; flex:1;">
    <nuxt-ui:Layout.Sidebar v-model:open="sidebarOpen" collapsible="icon" title="Workspace">
        <template #default="{ state }">
            <nuxt-ui:Navigation.NavigationMenu :collapsed="state === 'collapsed'" orientation="vertical" :items="[
                { label: 'Inbox', to: '/inbox', icon: 'lucide:inbox' },
                { label: 'Settings', to: '/settings', icon: 'lucide:settings' }
            ]" />
        </template>
    </nuxt-ui:Layout.Sidebar>
    <div style="display:flex; flex:1; flex-direction:column; overflow:hidden;">
        <div>Page content</div>
    </div>
</div>
```

- On desktop `open` expands or collapses the sidebar; on mobile it opens the menu (`mode`: modal, slideover or drawer).
- `collapsible="icon"` keeps a narrow icon rail when collapsed: read `state` from the slots to adapt the content. `offcanvas` hides it completely, `none` disables collapsing.
- Use `Dashboard.DashboardSidebar` instead inside a `Dashboard.DashboardGroup`.
