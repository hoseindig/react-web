import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INC':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }
        case 'DEC':
            const derementBy = typeof action.derementBy === 'number' ? action.derementBy : 1
            return {
                count: state.count - derementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
})

store.subscribe(() => {
    console.log(store.getState());;
})

store.dispatch({
    type: 'INC',
    incrementBy: 11
})

store.dispatch({
    type: 'INC'
})

store.dispatch({
    type: 'DEC',
    derementBy: 5
})


store.dispatch({
    type: 'RESET'
})
// console.log("redux101 is run.");

