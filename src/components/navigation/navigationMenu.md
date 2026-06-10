## Basic navigation menu

```html
<nuxt-ui:Navigation.NavigationMenu :items="[
    { label: 'Home', to: '/', icon: 'lucide:house' },
    { label: 'Settings', to: '/settings', icon: 'lucide:settings' }
]" />
```

## With children

Use `children` to create trigger items with nested links.

```html
<nuxt-ui:Navigation.NavigationMenu :items="[
    { label: 'Home', to: '/', icon: 'lucide:house' },
    {
        label: 'Products',
        icon: 'lucide:box',
        children: [
            { label: 'Analytics', to: '/products/analytics', description: 'Track product usage.' },
            { label: 'Billing', to: '/products/billing', description: 'Manage plans and invoices.' }
        ]
    }
]" />
```

> If inside a `nuxt-ui:Dashboard.DashboardSidebar`, use `orientation="vertical"`
