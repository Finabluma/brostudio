export const platosQuery = `*[_type == 'platos' && !(_id in path('drafts.**'))]{
  plato,
  precio,
  tipoplato
}| order(precio asc)`

export const state = () => ({
  platos: [],
})

export const mutations = {
  setPlatos(state, data) {
    state.platos = data || []
  },
}
