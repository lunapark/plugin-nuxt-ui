export async function getComponents() {
    return (await Promise.all(
        Object.values(import.meta.glob("./**/*.ts"))
            .map((module) => module())
    ))
        .map((module) => module.default);
}
