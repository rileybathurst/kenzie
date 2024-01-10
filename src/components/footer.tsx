import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import List from "./list";
import Facebook from '../svg/facebook';
import Instagram from '../svg/instagram';

const Header = () => {

  return (
    <footer>
      <nav>
        <List />
      </nav>

      <div className="footer-social">
        <h4 className="circle-sketch-highlight">{useSiteMetadata().title}</h4>
        <h4 className="sr-only">Social Media</h4>
        <ul>
          <li key="Instagram">
            <a href={`https://www.instagram.com/${useSiteMetadata().social.instagram}`}>
              <p className="sr-only">instagram.com/{useSiteMetadata().social.instagram}</p>
              <Instagram />
            </a>
          </li>
          <li key="Facebook">
            <a href={`https://www.facebook.com/${useSiteMetadata().social.facebook}`}>
              <p className="sr-only">facebook.com/{useSiteMetadata().social.facebook}</p>
              <Facebook />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Header