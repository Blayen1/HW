import React from 'react'
import { MessageType } from '../HW1'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
        message: MessageType

}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент
                    src={"https://kartinkin.net/uploads/posts/2022-02/1644892677_23-kartinkin-net-p-kartinki-dlya-avi-23.jpg"}
                    
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {props.message.message.text}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                {props.message.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default Message
