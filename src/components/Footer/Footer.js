import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin, FaGithub
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { Button } from "../pages/Button";



function Footer() {
  return (
    <div className='footer_container'>
      <section className="footer_subscription">
        <p className="footer_subscription_heading">
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className="footer_subscription_text">
          You can unsubscribe at any time.
        </p>
        <div className="input_areas">
          <form>
            <input
              className="footer_input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn__outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer_links'>
        <div className='footer_link_wrapper'>
          <div className='footer_link_items'>
            <h2>About Us</h2>
            <Link to='/sign_up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer_link_items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer_link_wrapper'>
          <div className='footer_link_items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer_link_items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to={'//www.github.com/Akibsheikh48'}>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social_media'>
        <div className='social_media_wrap'>
          <div className='footer_logo'>
            <Link to='/' className='social_logo'>
              <MdFingerprint className='navbar_icon' />
              AKIB
            </Link>
          </div>
          <small className='website_rights'>AKIB © 2020</small>
          <div className='social_icons'>
            <Link
              className='social_icon_link'
              to={'//www.github.com/Akibsheikh48'}
              target='_blank'
              aria_label='Facebook'
            >
              <FaGithub />
            </Link>
            <Link
              className='social_icon_link'
              to={'//www.instagram.com/akibsheikh1/?igshid=1n35acwkvzx00'}
              target='_blank'
              aria_label='Instagram'
            >
              <FaInstagram/>
            </Link>
            <Link
              className='social_icon_link'
              to={
                '//www.youtube.com/channel/UC3rtUUwsd09W6yZ6dkR8Wmw?view_as=subscriber'
              }
              target='_blank'
              aria_label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social_icon_link'
              to={'//WWW.twitter.com/akibsheikh48?s=03'}
              target='_blank'
              aria_label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social_icon_link'
              to='/'
              target='_blank'
              aria_label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
