import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

function SocialFollow() {
  return (
    <div className='social-container'>
        <a href="https://twitter.com/mazenmoataz24"
        className='twitter social'>
            <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
        <a href="https://instagram.com/mazenmoataz24_"
        className='instagram social'>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        <a href="https://www.linkedin.com/in/mazen-al-sharif-a8782823a/"
        className='linkedin social'>
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
    </div>
  )
}

export default SocialFollow