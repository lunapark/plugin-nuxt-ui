export async function getComponents() {
    return Object.values(import.meta.glob("./**/*.ts", { eager: true }))
        .map((module) => module.default);
}
