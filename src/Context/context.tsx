import createGlobalState from "./globalState";

const [BluePostsContext, BluePostsProvider] = createGlobalState(true);

export { BluePostsContext, BluePostsProvider };