import React from 'react'
import {Image} from 'antd'

import img1 from '@/assets/preImage/111.jpg'
import img2 from '@/assets/preImage/222.jpg'
import img3 from '@/assets/preImage/333.jpg'
import img4 from '@/assets/preImage/444.jpg'

function PreImage() {
    return <div>
        <Image width={200} height={200} src={img1}/>
        <Image width={200} height={200} src={img2}/>
        <Image width={200} height={200} src={img3}/>
        <Image width={200} height={200} src={img4}/>
    </div>
}

export default PreImage
