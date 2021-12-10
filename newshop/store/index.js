
export const state =() => ({
    counter:1
})

export const mutations ={
    increase(state){
        state.counter++
    },
    decrease(state){
        state.counter--
    }
}