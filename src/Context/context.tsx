import createGlobalContext from "./globalState";

const [BluePostsContext, BluePostsProvider] = createGlobalContext(true);

export { BluePostsContext, BluePostsProvider };