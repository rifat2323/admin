import styles from './post.module.css'
import React, { Suspense, useState,lazy } from 'react';

import { ColorRing } from 'react-loader-spinner';
const DetalisPage = lazy(()=>import('../components/Post/Details/DetalisPage'))


 const Short = lazy(()=>import('./../components/Post/shortDetalis/Short'))
 const Picture = lazy(()=>import('./../components/Post/Picture/Picture'))

const Posts = () => {
  const [activeSlide, setActiveSlide] = useState<string>('details')
  return (
    <div className={styles.main}>
        <h1 className={styles.header}>All Your Post at One place</h1>
        <div className={styles.navbars}>
        <ul>
          <li onClick={()=>setActiveSlide("details")} className={`${activeSlide === 'details' && styles.active}`}>Details post</li>
          <li onClick={()=>setActiveSlide("sort")} className={`${activeSlide === 'sort' && styles.active}`}>Sort post</li>
          <li onClick={()=>setActiveSlide("picture")}  className={`${activeSlide === 'picture' && styles.active}`} >Picture Upload</li>
        </ul>
        </div>

  {
     activeSlide === 'details' && (
      <Suspense fallback={<ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}>
               <DetalisPage/>
              </Suspense>
     )
  }
  {
     activeSlide === 'sort' && (
      <Suspense fallback={<ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}>
               <Short/>
              </Suspense>
     )
  }
  {
     activeSlide === 'picture' && (
      <Suspense fallback={<ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}>
               <Picture/>
              </Suspense>
     )
  }
  
   
    </div>
  )
}
const Post =React.memo(Posts)
export default  Post