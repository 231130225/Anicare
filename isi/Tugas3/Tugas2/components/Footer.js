import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className='inner-footer'>
                <h1 className='logo'>
                    Dribbble
                </h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#">For Designers</a>
                       </li>
                       <li>
                            <a href="#">Hire talent</a>
                        </li>
                        <li>
                            <a href="#">Inspiration</a>
                        </li>
                        <li>
                            <a href="#">Advertising</a>
                        </li>
                        <li>
                              <a href="#">Blog</a>
                       </li>
                        <li>
                           <a href="#">About</a>
                        </li>
                          <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                        <li>
                            <div className='icon-nav'>
                                <img src='https://icons.iconarchive.com/icons/icons8/windows-8/256/Social-Networks-Twitter-icon.png' />
                                <img src='https://s.widget-club.com/samples/5eK00DPMnkT15iOEB9GHWPnGUbD2/qNNBdYSv3VLnt2lmqk6F/8B79465F-7406-44EB-89BA-8E460DBBC79D.jpg?q=70' />
                                <img src='https://www.edigitalagency.com.au/wp-content/uploads/Instagram-icon-black-png.png' />
                                <img src='https://seeklogo.com/images/P/pinterest-logo-E994F3A9FB-seeklogo.com.png' />
                            </div>
                        </li>
                    </ul>
                </nav>

            </div>

        </footer>
    );
};

export default Footer;