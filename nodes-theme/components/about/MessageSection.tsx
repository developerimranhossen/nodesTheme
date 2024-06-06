import Image from 'next/image'
import React from 'react'
import MessageImg from '../../public/message.png'
import SendMessage from './SendMessage'

function MessageSection() {
  return (
    <div className='nt-message-container'>
        <div className="nt-left">
            <Image src={MessageImg} width={404} height={237} alt='' />
            <h1>Let's start a project together</h1>
            <p>We work closely with our clients to understand their objectives, target audience, and unique needs. We use our creative skills to translate these requirements and practical design solutions.</p>
        </div>
        <div className="nt-right">
            <SendMessage />
        </div>
        
    </div>
  )
}

export default MessageSection