import { type TComponent } from "@luna-park/plugin";

export async function getComponents(): Promise<Array<TComponent>> {
    return Object.values(import.meta.glob("./**/*.ts", { eager: true }))
        .map((module) => module.default);
}
