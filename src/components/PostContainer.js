import React, { useEffect } from 'react'
import { fetchPosts } from '../redux/posts/postActon'
import { useDispatch, useSelector } from 'react-redux'

function PostContainer() {
  const postData = useSelector((state) => state.posts);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  return (
    <>
      Post component
      <br/>
      {postData.loading ?
        <>loading....</> :
        postData.error ?
          <>{postData.error}</> :
          <>{postData.data.length}</>
      }
    </>
  )
}

export default PostContainer