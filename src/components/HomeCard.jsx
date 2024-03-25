import React from 'react'
import moment from 'moment'

const HomeCard = ({video}) => {
  return (
    <div onClick={()=>window.location =`videos/${video?.id?.videoId}`} className='w-[280px] m-2 cursor-pointer'>
      <img className='rounded-2xl' src={video?.snippet?.thumbnails?.high?.url} alt="" />
      <div className='font-bold mt-1'>{(video?.snippet?.title).substring(0,50)} ...</div>
      <div className='text-xs mt-1 tracking-wider text-gray-700'>{video?.snippet?.channelTitle}</div>
      <div className='text-xs mt-1 tracking-wider text-gray-700 space-x-2'>
        <span>100k görüntülenme</span>
        <span>{moment(video?.snippet?.publishedAt).startOf('day').fromNow()}</span>
      </div>
    </div>
  )
}

export default HomeCard
