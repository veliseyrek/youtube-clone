import React from 'react'
import moment from 'moment'

const SearchCard = ({search}) => {
  return (
    <div onClick={()=>window.location =`/videos/${search?.id?.videoId}`} className='flex space-x-2 justify-center mx-5 my-10 cursor-pointer'>
      <img className='h-44 w-72' src={search?.snippet?.thumbnails?.high?.url} alt="" />
      <div className='w-2/3 space-y-2'>
            <div className='font-bold text-lg'>{search?.snippet?.title}</div>
            <div className='text-sm  text-gray-700 space-x-2'>
                <span>3.5 Görüntülenme  *</span>
                <span> {moment(search?.snippet?.publishedAt).startOf('day').fromNow()}</span>
            </div>
            <div className='flex items-center space-x-2 text-sm'>
                <div className='w-10 h-10 rounded-full bg-gray-200'>
                <img className='h-10 w-10 rounded-full' src={search?.snippet?.thumbnails?.medium?.url} alt="" />
                </div>
                <div className='text-gray-700'>{search?.snippet?.channelTitle}</div>
            </div>
            <div className='text-sm '>
            {search?.snippet?.description ? search?.snippet?.description : " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"}
               
            </div>
      </div>
      
    </div>
  )
}

export default SearchCard
