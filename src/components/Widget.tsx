import { ChatTeardropDots } from 'phosphor-react';
// import { useState } from 'react';
import { Popover } from '@headlessui/react'

export function Widget(){

    // const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    // function toggleWidgetVisivility () {
    //     setIsWidgetOpen(!isWidgetOpen)
    // }

    return (
        <Popover className="absolute bottom-5 right-5">
            {/* condição AND onde as duas devem ser TRUE*/}
            {/* {isWidgetOpen && <p>Hello World</p>} */}
            <Popover.Panel>Hello World</Popover.Panel>


            <Popover.Button className="bg-brand-500 rounded-full flex px-3 h-12 text-white items-center group">
            {/* onClick={toggleWidgetVisivility} */}
                <ChatTeardropDots className="w-6 h-6"/>

                <span className="max-w-0 overflow-hidden group-hover:max-w-sm transition-all duration-400 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}