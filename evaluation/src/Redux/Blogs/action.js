

export const GET_ALL_BLOGS = "GET_ALL_BLOGS"


export const GET_ALL_BLOGS_LOADING = "GET_ALL_BLOGS_LOADING"

export const GET_ALL_BLOGS_FAILURE = "GET_ALL_BLOGS_FAILURE"

export const GET_ALL_BLOGS_SUCCESS = "GET_ALL_BLOGS_SUCCESS"

export const getAllBlogsLoading = () => ({
    type:GET_ALL_BLOGS_LOADING 
})

export const getAllBlogsFailure = () => ({
    type:GET_ALL_BLOGS_FAILURE
})

export const getAllBlogsSuccess = (payload) => ({
    type:GET_ALL_BLOGS_SUCCESS,
    payload
})

export const getAllBlogs = () => async (dispatch) => {
    try {
        dispatch(getAllBlogsLoading())
        
        let res = await fetch (`http://localhost:8080/blogs`)
        let data = await res.json()
    console.log(data)
        dispatch(getAllBlogsSuccess(data))
        
      } catch (error) {
         dispatch(getAllBlogsFailure())
      }
}

