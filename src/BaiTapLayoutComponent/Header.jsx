const Header = () => (
    <header>
        <div className='container-lg pt-2 pb-2 d-flex justify-content-between align-items-center'>
            <p className='navbar__brand mb-0'>Start Bootstrap</p>
            <ul className='d-flex list-unstyled mb-0'>
                <li>
                    <a className='nav__link active' href='...'>
                        Home
                    </a>
                </li>
                <li>
                    <a className='nav__link' href='...'>
                        About
                    </a>
                </li>
                <li>
                    <a className='nav__link' href='...'>
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;
