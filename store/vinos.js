export const vinosQuery = `*[_type == 'vino' && !(_id in path('drafts.**'))]{
  vino,
  precio,
  tipovino,
  do{
   _type == 'reference'=> @->{do}
  },
  variedades[]{
    _type == 'reference' => @->{variedad}
  }
}| order(precio desc)`

export const state = () => ({
  vino: [],
})

export const mutations = {
  setVinos(state, data) {
    state.vino = data || []
  },
}
