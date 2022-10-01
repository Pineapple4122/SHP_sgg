import { reqCategoryList,reqGetBannerList,reqFloorList } from "@/api"

const state = {
   categoryList: [],
   bannerList: [],
   floorList: [],
}

const mutations = {
   CATEGORYLIST(state,categoryList) {
      state.categoryList = categoryList.slice(0,16)
   },
   GETBANNERLIST(state,bannerList) {
      state.bannerList = bannerList
   },
   FLOORLIST(state,floorList) {
      state.floorList = floorList
   },
}

const actions = {
   async categoryList({commit}) {
      const result = await reqCategoryList()
      if(result.code === 200) {
         commit('CATEGORYLIST',result.data)
      }
   },
   async getBannerList({commit}) {
      const result = await reqGetBannerList()
      if(result,code === 200) {
         commit('GETBANNERLIST',result.data)
      }
   },
   async floorList({commit}) {
      const result = await reqFloorList()
      if(result,code === 200) {
         commit('FLOORLIST',result.data)
      }
   },
}

const getters = {}

export default {
   state,
   mutations,
   actions,
   getters
}