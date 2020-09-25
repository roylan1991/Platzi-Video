export const addFavorite = newItem => ({
  type: 'ADD_FAVORITE',
  newItem,
});

export const delFavorite = id => ({
  type: 'DEL_FAVORITE',
  id,
});

export const loginUsuario = user => ({
  type: 'LOGIN_USUARIO',
  user,
});

export const logoutUsuario = user => ({
  type: 'LOGOUT_USUARIO',
  user,
});

export const registrarUsuario = user => ({
  type: 'REGISTRAR_USUARIO',
  user,
});

export const getVideo = id => ({
  type: 'GET_VIDEO',
  id,
});

export const buscarVideo = nombre => ({
  type: 'BUSCAR_VIDEO',
  nombre,
});
