/*
包含品牌相关接口请求函数
*/

import request from '@/utils/request'  //相当于前面我们封装的ajax

const api_name = '/admin/product/baseTrademark'

export default {

  /*
  获取品牌分页列表
  GET /admin/product/baseTrademark/{page}/{limit}
  获取所有品牌列表
  GET /admin/product/baseTrademark/getTrademarkList
  一个函数里面也可以有两个接口请求函数
  */
  getList(page, limit) {
    // 1、作为函数的方式去发请求
    /*return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
    }) */
    // 2、也可以使用对象的方式去发送get请求
    if(page && limit){
      return request.get(`${api_name}/${page}/${limit}`)
    }
    return request.get(`${api_name}/getTrademarkList`)
  },

  /*
  根据ID获取品牌
  GET /admin/product/baseTrademark/get/{id}
  */
  get(id) {
    return request.get(`${api_name}/get/${id}`)
  },

  /*
  删除指定ID品牌
  DELETE /admin/product/baseTrademark/remove/{id}
  */
   remove(id) {
    return request.delete(`${api_name}/remove/${id}`)
  },

  /*
  添加品牌
  POST /admin/product/baseTrademark/save
  trademark：没有ID的品牌对象
  */
  /*这种方法也可以
  add({logoUrl,tmName}) {
    return request.post(`${api_name}`,{logoUrl,tmName})
  },*/
  add(trademark) {
    return request.post(`${api_name}`,trademark)
  },


  /*
  添加品牌
  PUT /admin/product/baseTrademark/update
  trademark：必须要有ID的品牌对象
  */
  /*update({id,logoUrl,tmName}) {
    return request.put(`${api_name}/update`,{id,logoUrl,tmName})
  },*/
  update(trademark) {
    return request.post(`${api_name}/update`,trademark)
  },
}

