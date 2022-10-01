import requests from "./ajax";
import mockRequests from './mockAjax'

export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList',method:'Get'})
export const reqGetBannerList = () => mockRequests.get('/banner')
export const reqFloorList = () => mockRequests.get('/floor')