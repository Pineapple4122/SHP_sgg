import requests from "./ajax";
import mockRequests from './mockAjax'

export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList',method:'Get'})
export const reqGetBannerList = () => mockRequests.get('/banner')
export const reqFloorList = () => mockRequests.get('/floor')
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})