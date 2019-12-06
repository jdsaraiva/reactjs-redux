
// REDUCER

// Podemos ter vários reducers de acordo com as funções, como um de autentificação, listagem de filmes, etc...
// a ideia é serem acessíveis para em todo o projeto
const counterReducer = (state= 0, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;
