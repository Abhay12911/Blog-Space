/* eslint-disable react/prop-types */
import {IF} from '../url'


const HomePosts = ({post}) => {
  return (
    <div className=''>
    <div className="w-full flex mt-8 space-x-4 ">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={IF+post.photo} alt="image" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl text-white font-bold md:mb-2 mb-1 md:text-2xl">
      {post.title}
      </h1>
      <div className="flex mb-2 text-sm text-white font-semibold items-center justify-between md:mb-4">
       <p>@{post.username}</p>
       <div className="flex space-x-2 text-sm text-white">
       <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
       </div>
      </div>
      <p className="text-sm md:text-lg text-white">{post.desc}</p>
    </div>

    </div>
    </div>
  )
}

export default HomePosts