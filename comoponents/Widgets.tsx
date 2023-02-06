import { FiberManualRecord, Info, Subtitles } from '@material-ui/icons'
import React from 'react'

export default function Widgets() {
    
    const newsArticle = (heading:string, subtitle:string) => (
        <div className='flex p-3 cursor-pointer hover:bg-slate-200' style={{flex:0.2}}>
            <div className='text-blue-600 mr-1 text-xs'>
                <FiberManualRecord />
            </div>
            <div className='flex-1'>
                <h4 className=' text-sm'>{heading}</h4>
                <p className='text-xs'>{subtitle}</p>
            </div>
        </div>
    )
    return (
    <div style={{flex:0.2}} className='hidden lg:inline sticky top-20 bg-white rounded-lg border border-slate-200 h-fit pb-3'>
        <div className='flex items-center justify-between p-3'>
            <h2 className=' text-base font-normal'>Linkedin News</h2>
            <Info />
        </div>
        {newsArticle("New NF album", "Top new - 999 reades")}
        {newsArticle("web 3.0 and it's future", "3 days- 164 reades")}
        {newsArticle("5 ideas to comfront exit", "1 day")}
    </div>
  )
}
