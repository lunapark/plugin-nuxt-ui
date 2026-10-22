import type { Component, ComputedRef, InjectionKey } from "vue";
import { defineComponent, h, inject } from "vue";

export const collisionBoundaryKey: InjectionKey<ComputedRef<HTMLElement | undefined>> = Symbol("collision-boundary");

export function withCollisionBoundary(component: Component) {
    return defineComponent((_, { attrs, slots }) => {
        const boundary = inject(collisionBoundaryKey, undefined);

        return () => h(component, {
            ...attrs,
            content: { collisionBoundary: boundary?.value, ...(attrs.content as object | undefined) }
        }, slots);
    }, { inheritAttrs: false });
}
