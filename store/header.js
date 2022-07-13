export const headerMenuQuery = `*[_type == "sectionsHeader" && !(_id in path('drafts.**'))]{
    'menu': headerMenu->menuItems[]{
      'name': menuItemName,
      'url': menuItemUrl,
    }
  }[0]
`
export const state = () => ({
  menu: [],
})

export const mutations = {
  setData(state, menu) {
    state.menu = menu ? menu.menu : []
  },
}
