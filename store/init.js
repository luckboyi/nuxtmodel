export const state = () => ({
  nowThemeInfo: 'default-theme', //当前主题
  themes: ['default', 'red'] //所有主题
})

export const mutations = {
  SET_THEMEINFO(state, theme){
    state.nowThemeInfo = theme + '-theme';
  }
}
export const actions = {
  // async actionGetGameList({
  //   commit
  // }) {
  //   // 获取游戏列表数据
  //   let res=await getGameListData()
  //   commit('setGameList',res)
  // }
}