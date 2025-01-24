import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined'

export const Header = ({ isDarkMode, toggleTheme }) => {
    
    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">

            <a href="index.html" className="logo d-flex align-items-center me-auto fw-bold">
                {/* Uncomment the line below if you also wish to use an image logo */}
                {/* <img src="assets/img/logo.png" alt=""> */}
                <ImportantDevicesOutlinedIcon className="me-2" /> 
                <h1 className="sitename fs-1 fs-sm-2 fs-md-3 fs-lg-6">SaPee Developer</h1>
            </a>
            
            <nav id="navmenu" className="navmenu">
                <ul>
                <li><a href="#hero" className="active">Home<br/></a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Team</a></li>
                <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                    <li><a href="#">Dropdown 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                        <li><a href="#">Deep Dropdown 1</a></li>
                        <li><a href="#">Deep Dropdown 2</a></li>
                        <li><a href="#">Deep Dropdown 3</a></li>
                        <li><a href="#">Deep Dropdown 4</a></li>
                        <li><a href="#">Deep Dropdown 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Dropdown 2</a></li>
                    <li><a href="#">Dropdown 3</a></li>
                    <li><a href="#">Dropdown 4</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <a className="btn-getstarted" href="#about">Get Started</a>

            <button 
                className="toggleTheme" 
                onClick={toggleTheme}
                aria-label={isDarkMode ? "light" : "dark"}
            >
               
                {isDarkMode ? 
                    <i className="bi bi-sun" style={{ fontSize: '20px', color: 'white' }} />
                    : <i className="bi bi-moon" style={{ fontSize: '20px', color: 'yellow' }} />
                }
            </button>

            </div>
        </header>
    )
}
