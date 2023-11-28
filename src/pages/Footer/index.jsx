// Icons
import icon_facebook from "../../svg/icon-facebook.svg";
import icon_telegram from "../../svg/icon-telegram.svg";
import icon_twitter from "../../svg/icon-twitter.svg";
import icon_linkedin from "../../svg/icon-linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer className="container">
        <div className="row flex-space bb-black pb-6 footer-mobile">
          <div className="w-25 footer-title">
            <p className="p1 color-white">
              Discover NFTs by category, track the latest drop, and and follow
              the collections you love. Enjoy it!
            </p>
            <div className="flex-start-row footer-social">
              <a href="">
                <img src={icon_facebook} />
              </a>
              <a href="">
                <img src={icon_telegram} />
              </a>
              <a href="">
                <img src={icon_twitter} />
              </a>
              <a href="">
                <img src={icon_telegram} />
              </a>
            </div>
          </div>

          <div className="w-25 disappear"></div>

          <div className="menu-footer flex">
            <ul>
              <li className="p1 mb-3 bold color-white">Explore</li>
              <li>
                <a href="">Art Sign In</a>
              </li>
              <li>
                <a href="">Collectibles</a>
              </li>
              <li>
                <a href="">Domain Name</a>
              </li>
              <li>
                <a href="">Utility</a>
              </li>
            </ul>

            <ul>
              <li className="p1 mb-3 bold color-white">Statistic</li>
              <li>
                <a href="">Ranking</a>
              </li>
              <li>
                <a href="">Collectibles</a>
              </li>
              <li>
                <a href="">Activity</a>
              </li>
            </ul>

            <ul>
              <li className="p1 mb-3 bold color-white">Company</li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Partners</a>
              </li>
            </ul>

            <ul>
              <li className="p1 mb-3 bold color-white">Resources</li>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Platform Status</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row flex-space mt-6 footer-copy">
          <p className="p1">© Copyright 2023 - davixq</p>
          <div className="w-50 disappear"></div>
          <div className="flex-start-row">
            <p className="p1">Privacy Policy</p>
            <p className="p1 ml-2">Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
