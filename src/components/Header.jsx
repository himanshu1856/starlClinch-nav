import React from 'react'

import starlinchLogo from '../assets/StarClinch-Logo-new.svg'
import hamburgerIcon from '../assets/hamburger.svg'
import cart from '../assets/cart.svg'
import ArtistMenuImage from '../assets/artist_menu_image.svg'

import image1 from '../assets/book-anchor-online.webp'
import image2 from '../assets/book-comedian-online.webp'
import image3 from '../assets/book-dj-online.webp'
import image4 from '../assets/book-band-online.webp'
import image5 from '../assets/book-makeup-artist-online.webp'
import image6 from '../assets/book-photographer-online.webp'
import image7 from '../assets/book-speaker-online.webp'
import image8 from '../assets/book-celebrity-online.webp'
import image9 from '../assets/book-dancer-online.webp'
import image10 from '../assets/book-instrumentalist-online.webp'
import image11 from '../assets/book-magician-online.webp'
import image12 from '../assets/book-model-online.webp'
import image13 from '../assets/book-singer-online.webp'
import image14 from '../assets/book-variety-artist-online.webp'
import image15 from '../assets/login.webp'
import image16 from '../assets/signup.webp'
import image17 from '../assets/jobs.webp'
import image18 from '../assets/artists_subscription.webp'

import './header.css'

function Header() {
    return (
        <>
            <header className='header' >
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <img className='starclinch-logo' src={starlinchLogo} alt="StarClinch" />
                        </div>
                        <div className="col-6 col-sm-8 col-md-9 col-lg-10 ">

                            <div className='hamburger d-sm-flex justify-content-end  d-lg-none  pt-2'>
                                <img src={hamburgerIcon} alt="StarClinch" />
                            </div>

                            <ul className=' d-none d-lg-flex  justify-content-end align-items-center gap-5 pt-1'>
                                <li>
                                    <div class="dropdown">
                                        <span class="dropdown-text dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Entertainers
                                        </span>
                                        <div class="dropdown-menu submenu ">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <ul>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image1} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Anchor/Emcee</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image2} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Comedian</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image3} alt="StarClinch" />
                                                                    </div>
                                                                    <p>DJ</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image4} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Live Band</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image5} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Make-Up Artist/Stylist</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image6} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Photo/Videographer</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image7} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Speaker</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-6">
                                                        <ul>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image8} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Celebrity Appearance</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image9} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Dancer/Troupe</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image10} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Instrumentalist</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image11} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Magician</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image12} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Model</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image13} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Singer</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className='entertainers-item'>
                                                                    <div>
                                                                        <img src={image14} alt="StarClinch" />
                                                                    </div>
                                                                    <p>Variety Artist</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown">
                                        <span class="dropdown-text dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Join Community
                                        </span>
                                        <div class="dropdown-menu" style={{ border: "0px", backgroundColor: "transparent" }}>

                                            <div class="card p-3 dropdown-menu" style={{ width: "18rem" }}>
                                                <img class="card-img-top" src={ArtistMenuImage} alt="Card image cap" />
                                                <div class="card-body">
                                                    <div className='entertainers-item'>
                                                        <div>
                                                            <img src={image15} alt="StarClinch" />
                                                        </div>
                                                        <p>Login</p>
                                                    </div>
                                                    <div className='entertainers-item'>
                                                        <div>
                                                            <img src={image16} alt="StarClinch" />
                                                        </div>
                                                        <p>Signup</p>
                                                    </div>
                                                    <div className='entertainers-item'>
                                                        <div>
                                                            <img src={image17} alt="StarClinch" />
                                                        </div>
                                                        <p>Jobs</p>
                                                    </div>
                                                    <div className='entertainers-item'>
                                                        <div>
                                                            <img src={image18} alt="StarClinch" />
                                                        </div>
                                                        <p>Artist Membership</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button className='btn red-rounded-btn'> Post Your Requirement</button>
                                </li>
                                <li>
                                    <div>
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </li>
                                <li className='p-0 pe-lg-5'>
                                    <div>
                                        <img className='cart-icon' src={cart} alt="StarClinch" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header