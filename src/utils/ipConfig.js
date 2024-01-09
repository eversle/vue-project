export let ipConfig = {
    baseURL: () => process.env.VUE_APP_BASE_URL,
    player: () => process.env.VUE_APP_API_BASE_PLAYER,

}