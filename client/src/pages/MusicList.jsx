import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMusic } from '../actions/musicActions';
import MusicCard from '../components/MusicCard';
import MusicPlayer from '../components/MusicPlayer';

const MusicList = () => {
    const musicList = useSelector((state) => state.music?.music);
    console.log(musicList)
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(getMusic())
    },[])

  return (
    <>
     <section className='treading hero mt-8 sm:mt-20'>
        <h1 className='text-5xl font-bold mb-5 text-primary'>Browse</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 sm:grid-cols-1 justify-content-center'>
          {musicList?.map((item, i) => (
            <div className='box card hero' key={i}>
              <MusicCard  cover={item.track?.album?.images[0].url} name={item.track?.name}  src={item.track?.preview_url} artist={item.track?.artists[0].name} />
            </div>
          ))}
          <div>
           
          </div>
        </div>
      </section>

      
    </>
  )
}

export default MusicList