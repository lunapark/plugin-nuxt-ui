## Example data

```ts
const data = [
    { name: "Ada Lovelace", role: "Engineer" },
    { name: "Grace Hopper", role: "Admiral" }
];
```

## Basic table

```html
<nuxt-ui:Data.Table :data="data" :columns="[{ accessorKey: 'name', header: 'Name' }, { accessorKey: 'role', header: 'Role' }]" />
```

> `columns` must be defined inlined

## With column slots

For each column, the table exposes slots named `{id}-header` and `{id}-cell`.
If `id` is missing, `accessorKey` is used.

```html
<nuxt-ui:Data.Table :data="data" :columns="[{id: 'rowId'}, { id: 'name', header: 'Name' }]">
    <template #rowId-cell="{ row }">
        {{ row.id }}
    </template>
    <template #name-cell="{ row }">
        {{ row.original.name }}
    </template>
</nuxt-ui:Data.Table>
```
