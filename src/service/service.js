import http from './http'
const api = '/api';
// ownerLogin
export const addProfile = (data) => {
    return http.post(`${api}/profile`, data)
}
export const getProfile = () =>{
    return http.get(`${api}/getProfile`)

}
export const getbyIDProfile  = (data) =>{
      return http.get(`${api}/getbyIDProfile /${data._id} `)
  }
  export const updateProfileById = (data) => {
      console.log("datassssss",data)
          return http.post(`${api}/updateProfileById`,data)
  }

export const deleteProfileById= (data) => {
    return http.delete(`${api}/deleteProfileById/${data._id}`)
}

export default {
    addProfile,
    getProfile,
    getbyIDProfile,
    updateProfileById,
    deleteProfileById,
    }