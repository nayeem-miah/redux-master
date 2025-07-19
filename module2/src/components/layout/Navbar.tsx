import { Link } from 'react-router'
import logo from '../../assets/react.svg'
import { ModeToggle } from '../mode-toggle'

export default function Navbar() {
    return (
        <nav className='max-w-7xl mx-auto h-16 flex items-center gap-3 px-3 justify-between'>
            <div className='flex items-center'>
                <img src={logo} alt="logo" /> <span className='font-bold ml-2'>Task</span> Master
            </div>
            <div className='flex gap-3 items-center'>
                <div className=' hover:underline hover:underline-offset-4 -underline-offset-4 '>
                    <Link to={'/user'}>User</Link>
                </div>
                <div className=' hover:underline hover:underline-offset-4 -underline-offset- '>
                    <Link to={'/'}>Task</Link>
                </div>

                <div>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}
