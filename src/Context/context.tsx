import createGlobalContext from "./globalContext";

const [BluePostsContext, BluePostsProvider] = createGlobalContext(true);

export { BluePostsContext, BluePostsProvider };