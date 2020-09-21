const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_FAVORITE":
            return {
                ...state,
                //acá se describen los elementos que voy a modificar dentro del state
                mylist: [...state.mylist, action.newItem]
            }
        case "DEL_FAVORITE":
            return {
                ...state,
                mylist: state.mylist.filter(item => item.id != action.id)
            }
        case "LOGIN_USUARIO":
            return {
                ...state,
                user: action.user
            }
        case "LOGOUT_USUARIO":
            return {
                ...state,
                user: action.user
            }
        case "REGISTRAR_USUARIO":
            return {
                ...state,
                user: action.user
            }
        case "GET_VIDEO":
            return {
                ...state,
                //Uno ambos arrays y realizo una sola búsqueda del video según su id que llega como un "String"
                playing: state.trends.concat(state.originals).find(item => item.id === Number(action.id)) || []
            }
        case "BUSCAR_VIDEO":
            if (action.nombre === "") {
                return {
                    ...state, busqueda: [],
                }
            } else return {
                ...state,
                busqueda: state.trends.concat(state.originals).filter(item => item.title.toLowerCase().includes(action.nombre.toLowerCase()))
            }
        default:
            return state;
    }
};

export default reducer;