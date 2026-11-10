## Site layout

A site page is built from `Header`, `Main` and `Footer` as siblings at the root of the page layout, usually in a shared local component:

```html
<nuxt-ui:Layout.Header title="Acme">
    <nuxt-ui:Navigation.NavigationMenu :items="[
        { label: 'Features', to: '/features' },
        { label: 'Pricing', to: '/pricing' }
    ]" />
    <template #right>
        <nuxt-ui:ColorMode.ColorModeButton />
    </template>
    <template #body>
        <nuxt-ui:Navigation.NavigationMenu orientation="vertical" :items="[
            { label: 'Features', to: '/features' },
            { label: 'Pricing', to: '/pricing' }
        ]" />
    </template>
</nuxt-ui:Layout.Header>
<nuxt-ui:Layout.Main>
    <nuxt-ui:Layout.Container>
        <div>Page content</div>
    </nuxt-ui:Layout.Container>
</nuxt-ui:Layout.Main>
<nuxt-ui:Layout.Footer>
    <template #left>
        <txt as="p">Copyright Acme</txt>
    </template>
    <template #right>
        <nuxt-ui:Element.Button icon="simple-icons:github" color="neutral" variant="ghost" to="https://github.com" />
    </template>
</nuxt-ui:Layout.Footer>
```

- `Header` is sticky and sets the header height used by `Main`, `Error` and `Page.PageAside`. Its default slot is centered on desktop; its `body` slot fills the mobile menu, so repeat the navigation there with `orientation="vertical"`.
- `Main` renders the `<main>` element and fills the viewport height below the header: don't add a `min-height` or `height` to it. Use it once per page, between `Header` and `Footer`.
- `Header`, `Footer`, `Page.PageHero`, `Page.PageSection` and `Page.PageCTA` already include a container: place them directly in `Main`. Wrap other content in `Container` (including `Page.Page`), and never wrap `Header`, `Main` or `Footer` in one.
- `Footer` uses `left`, default and `right` slots on one row. Put `Navigation.FooterColumns` in its `top` slot, inside a `Container`.
- `Error` renders its own `<main>`: use it instead of `Main` on an error or not-found page, never inside `Main`. It is a full-page state; use `Element.Alert` for an inline error message.
- Inside a dashboard, use `Dashboard.*` components instead of `Header`, `Main` and `Footer`.
