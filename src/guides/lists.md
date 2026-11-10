## Lists of items

`BlogPosts`, `PricingPlans` and `ChangelogVersions` lay out their items. Pass the items through their array prop (`posts`, `plans`, `versions`), or place `BlogPost`, `PricingPlan` or `ChangelogVersion` in their default slot to customize each item:

```html
<nuxt-ui:Page.PricingPlans :plans="[
    { title: 'Starter', price: '$9', features: ['1 project'] },
    { title: 'Pro', price: '$29', features: ['Unlimited projects'], highlight: true }
]" />

<nuxt-ui:Page.BlogPosts>
    <nuxt-ui:Page.BlogPost v-for="post in posts" :title="post.value.title" :description="post.value.description" :to="post.value.to" />
</nuxt-ui:Page.BlogPosts>
```

- `BlogPost`, `PricingPlan` and `ChangelogVersion` always go inside their list component, never directly in a section or a custom grid.
- `PricingPlans` sets its columns from the number of plans. `ChangelogVersions` draws the timeline between versions.
- `PageGrid` (1 to 3 equal columns) and `PageColumns` (masonry columns of varying heights, e.g. testimonials) lay out `PageCard` or any element placed in their default slot. Use them instead of a custom grid of cards.
