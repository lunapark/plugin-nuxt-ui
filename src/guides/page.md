## Page layout

`Page` is a content grid with optional side columns, for docs or content pages. Put it in a `Layout.Container` inside `Layout.Main`:

```html
<nuxt-ui:Layout.Main>
    <nuxt-ui:Layout.Container>
        <nuxt-ui:Page.Page>
            <template #left>
                <nuxt-ui:Page.PageAside>
                    <nuxt-ui:Navigation.NavigationMenu orientation="vertical" :items="[
                        { label: 'Introduction', to: '/docs' },
                        { label: 'Installation', to: '/docs/installation' }
                    ]" />
                </nuxt-ui:Page.PageAside>
            </template>
            <nuxt-ui:Page.PageHeader title="Introduction" description="Get started with Acme." />
            <nuxt-ui:Page.PageBody>
                <txt as="p">Content</txt>
            </nuxt-ui:Page.PageBody>
            <template #right>
                <nuxt-ui:Page.PageAnchors :links="[{ label: 'GitHub', to: 'https://github.com' }]" />
            </template>
        </nuxt-ui:Page.Page>
    </nuxt-ui:Layout.Container>
</nuxt-ui:Layout.Main>
```

- Without `left` or `right` slots, `Page` is a single centered column.
- `PageAside` goes only in the `left` or `right` slot of `Page`. It is sticky below the header and hidden under 1024px, so keep the navigation reachable elsewhere on mobile (e.g. the `Layout.Header` `body` slot).
- `PageHeader` then `PageBody` go in the default slot of `Page`. `PageBody` only adds spacing around the main content.
- For landing pages, don't use `Page`: stack `PageHero`, `PageSection` and `PageCTA` directly in `Layout.Main`.
