

import { useEffect } from 'react'
import './demo_scroll_table.less'

export default function Demo_GridBox() {

    // useEffect(()=>{
    //     const a = document.querySelector('.grid-box')
    //     const b = document.querySelectorAll('.grid-box-item')



    //     demo()
    // })


    const demo = (e: any) => {
        // console.log(e);
        
        const b = document.querySelectorAll('.grid-box-item')
        // console.log(b);

        for (const card of b) {
            const rect = card.getBoundingClientRect();
            console.log(rect,'rect');
            
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top


            console.log(x,y,'--->');
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
            // card.style.setProperty('--y', `${y}px`)
        }



    }

    return (
        <div className="grid-box" onMouseMove={demo}>
            <div className="grid-box-item"><div className='inner'>Grid</div></div>
            <div className="grid-box-item"><div className='inner'>Grid</div></div>
            <div className="grid-box-item"><div className='inner'>Grid</div></div>
            <div className="grid-box-item"><div className='inner'>Grid</div></div>
            <div className="grid-box-item"><div className='inner'>Grid</div></div>
            <div className="grid-box-item"><div className='inner'>Grid</div></div>
        </div>
    )
}