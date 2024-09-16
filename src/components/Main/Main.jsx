import './main.css'
import first from "../images/first.png"
import clickFirst from "../ClickImages/clickFirst.png"
import clickSecond from "../ClickImages/clickSecond.png"
import clickThird from "../ClickImages/clickThird.png"
import { useState } from 'react'

import shoe1 from "../images/first.png"
import shoe2 from "../images/second.png"
import shoe3 from "../images/third.png"

export default function Main() {

    const [currentImage, setCurrentImage] = useState(first)
    const [spanColor, setSpanColor] = useState('black')
    const [colorShop, setColorShop] = useState('#FB5014')

    const handleClick = (image,color,color1) => {
        setCurrentImage(image);
        setSpanColor(color)
        setColorShop(color1)
    }


    return (
        <div>
            <main>
                <div className="nike-flexer">
                    <div className="nike-texts">
                        <h1>Nike <span style={{color : spanColor}}>Air</span> Max</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <button style={{background : colorShop}}>Shop now</button>
                    </div>
                    <div className="nike-images">
                        <img onClick={() => handleClick(clickFirst)} src={currentImage} alt="error" />
                    </div>
                    <div className="clicks">
                        <img onClick={() => handleClick(shoe2,'#C2C2C2','#E10F15')} className='firsts' src={clickFirst} alt="error" />
                        <img onClick={() => handleClick(shoe3,'#F24E3A','#2C77B9')} className='seconds' src={clickSecond} alt="error" />
                        <img onClick={() => handleClick(shoe1,'#17B4CC','#FB5014')} className='thirds' src={clickThird} alt="error" />
                    </div>
                </div>
            </main>
        </div>
    )
}