export const state = () => ({
    layout: 'Cockpit',
 })
     
export const mutations = {
  CHANGE_NAV_LAYOUT(state, layout) {
    state.layout = layout;
  }
}