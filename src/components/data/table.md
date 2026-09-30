## Example data

```ts
const users = [
    { id: "1", name: "Ada Lovelace", role: "Engineer" },
    { id: "2", name: "Grace Hopper", role: "Admiral" }
];
```

## Basic table

```html
<nuxt-ui:Data.Table :data="users" :columns="[{ accessorKey: 'name', header: 'Name' }, { accessorKey: 'role', header: 'Role' }]" empty="No users yet." :loading="loading" />
```

> `columns` must be defined inline: the column slots are generated from it.
> Use `empty` and `loading` instead of custom empty or loading markup.

## Column slots

Each column exposes two slots named after its `id`, or its `accessorKey` when `id` is missing:

- `{id}-header` replaces the header cell. It has no scope.
- `{id}-cell` replaces every body cell of the column. Its scope is `{ row: { id, original } }`, where `row.original` is the `data` item of that row.

Declare the scope on the `<template>`, either by destructuring (`"{ row }"`) or with a new local ID (`"roleCell"`, then `roleCell.row.original`). The scope is only readable inside that template. Text still goes in `<txt>`.

A column without `accessorKey` (e.g. `{ id: 'actions' }`) has no value of its own and is rendered through its `-cell` slot.

```html
<nuxt-ui:Data.Table :data="users" :columns="[{ accessorKey: 'name', header: 'Name' }, { accessorKey: 'role', header: 'Role' }, { id: 'actions' }]">
    <template #name-cell="{ row }">
        <txt as="strong">{{row.original.name}}</txt>
    </template>
    <template #role-cell="roleCell">
        <nuxt-ui:Element.Badge :label="roleCell.row.original.role" variant="soft" />
    </template>
    <template #actions-cell="{ row }">
        <nuxt-ui:Element.Button icon="lucide:pencil" color="neutral" variant="ghost" @click="event/click(editUser, { user: row.original })" />
        <nuxt-ui:Element.Button icon="lucide:trash-2" color="error" variant="ghost" @click="event/click(deleteUser, { userId: row.original.id })" />
    </template>
</nuxt-ui:Data.Table>
```

> Never replace the table with a native `<table>` to get custom cells or row actions: use the `-cell` slots.
> The column `cell` render function is not supported: use the `-cell` slot instead.
