/* eslint-disable react/prop-types */
import logo from '../assets/cool_blog.png'

export const Logo = ({text}) => {
    return(
        <div className='logo'>
            <img src={logo} alt="Escudo Kinal" />
            <span>{text}</span>
        </div>
    )
}