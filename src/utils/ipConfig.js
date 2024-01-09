export let ipConfig = {
    baseURL: () => process.env.VUE_APP_BASE_URL,
    anotherURL: () => process.env.VUE_APP_API_ANOTHER_URL,

}