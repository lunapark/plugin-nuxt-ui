## Chat prompt

`ChatPrompt` renders its own `<form>` and textarea. Put `ChatPromptSubmit` in its `footer` slot (or default slot) and handle the prompt's `submit` event:

```html
<nuxt-ui:Chat.ChatPrompt v-model="input" @submit="event/submit(prompt)">
    <template #footer>
        <nuxt-ui:Element.Button icon="lucide:paperclip" color="neutral" variant="ghost" />
        <nuxt-ui:Chat.ChatPromptSubmit :status="status" />
    </template>
</nuxt-ui:Chat.ChatPrompt>
```

- `ChatPromptSubmit` only works inside `ChatPrompt`: it submits the form, so don't add a click event to it.
- Bind its `status` (`ready`, `submitted`, `streaming`, `error`) to the chat state: it switches its icon and color, becomes a stop button while submitted or streaming and a retry button on error. Handle its `stop` and `reload` events for those.
- Don't wrap `ChatPrompt` in a `Form.Form`.
