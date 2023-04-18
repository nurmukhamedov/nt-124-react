import Navbar from '../Navbar/Navbar';
import heroImage from '../../assets/klipartz.png';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div>
                <Navbar />
                <img src={heroImage} alt='hero' />
            </div>
        </div>
    )
}
export default Header;