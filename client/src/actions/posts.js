import * as api from '../api'

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts()
        dispatch({type : 'FETCH_ALL', payload: data})
    } catch (error) {
     console.log(error.message)   
    }
}

export const getPost = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchPost(id)
        dispatch({type : 'FETCH_ONE', payload: data})
    } catch (error) {
     console.log(error.message)   
    }
}



export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post)
        dispatch({type : 'CREATE', payload: data})
    } catch (error) {
     console.log(error.message)   
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post)
        dispatch({type : 'UPDATE', payload: data})
    } catch (error) {
     console.log(error.message)   
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({type : 'DELETE', payload: id})
    } catch (error) {
     console.log(error.message)   
    }
}

export const commentPost = (id, comment)=> async (dispatch) => {
    try {
        console.log(comment)
        const {data} = await api.commentPost(id, comment)
        console.log(data)
        dispatch({type : 'COMMENT', payload: data})
    } catch (error) {
     console.log(error)   
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
       const {data} = await api.likePost(id)
        dispatch({type :'LIKE', payload: data})
    } catch (error) {
     console.log(error.message)   
    }
}

export const dislikePost = (id) => async (dispatch) => {
    try {
       const {data} = await api.dislikePost(id)
        dispatch({type :'DISLIKE', payload: data})
    } catch (error) {
     console.log(error.message)   
    }
}