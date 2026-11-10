## Form structure

Wrap each input in a `FormField` and all fields in a `Form`:

```html
<nuxt-ui:Form.Form :state="contact" @submit="event/submit(contactForm)">
    <nuxt-ui:Form.FormField label="Email" name="email" required>
        <nuxt-ui:Form.Input v-model="contact.email" type="email" />
    </nuxt-ui:Form.FormField>
    <nuxt-ui:Form.FormField label="Message" name="message">
        <nuxt-ui:Form.Textarea v-model="contact.message" />
    </nuxt-ui:Form.FormField>
    <nuxt-ui:Element.Button type="submit" label="Send" />
</nuxt-ui:Form.Form>
```

- `state` is the object the inputs bind to. Submit with a `type="submit"` button inside the form and handle the `submit` event, which receives the validated `data`; `error` fires when validation fails.
- `FormField` `name` must match the input's key in `state`, so errors from `validate` (`[{ name, message }]`) or `schema` show under the right field.
- `FormField` provides the label, description, hint, help and error: don't add separate text elements for them.
- A `FormField` can be used without `Form` for its label and error only. A nested `Form` needs `nested` and a `name` for its part of the parent state.
