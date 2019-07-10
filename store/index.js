export const state = () => {
    return {
        layouts: {
            staticMessage: {}
        }
    }
}

export const mutations = {
    addStaticMessageLayout(state, payload) {
        state.layouts.staticMessage = payload
    }
}