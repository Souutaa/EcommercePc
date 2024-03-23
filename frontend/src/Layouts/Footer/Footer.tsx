import styled from ".//Footer.module.css";
function Footer() {
  return (
    <>
      <footer className={styled.footer}>
        <div
          className="container"
          style={{ display: "flex", alignItems: "start" }}
        >
          <div className={styled.left}>
            <div className={styled["info-left"]}>
              <div className={styled["introduction"]}>
                <div className={styled["introduction-logo"]}>
                  <img src="/img/logo.svg" alt="" />
                </div>
                <span className={styled["introduction-text"]}>
                  Lorem ipsum dolor sit amet consectetur. Id lobortis
                  donecturpis lorem massa integer consectetur vulputate. Amet
                  proin magna nulla ut. Platea imperdiet.
                </span>
              </div>

              <ul className={styled["socials-left"]}>
                <li className={styled["icon-left"]}>
                  <img alt="" src="/img/ic_facebbook.png"></img>
                </li>
                <li className={styled["icon-left"]}>
                  <img alt="" src="/img/ic_instagram.png"></img>
                </li>
                <li className={styled["icon-left"]}>
                  <img alt="" src="/img/ic_linkedin.png"></img>
                </li>
                <li className={styled["icon-left"]}>
                  <img alt="" src="/img/ic_twitter.png"></img>
                </li>
              </ul>
            </div>
            <div className={styled["text-left"]}>
              © 2021. All rights reserved
            </div>
          </div>
          <div className={styled.right}>
            <div className={styled["right-info"]}>
              <div className={styled["right-name"]}>
                <h1>TeachShop</h1>
              </div>
              <div className={styled["right-text"]}>
                <span>About Us</span>
                <span>Contact Us</span>
                <span>FAQ</span>
              </div>
            </div>
            <div className={styled["right-info"]}>
              <div className={styled["right-name"]}>
                <h1>Legal</h1>
              </div>
              <div className={styled["right-text"]}>
                <span>Terms and Condition</span>
                <span>Privacy Policy</span>
              </div>
            </div>
            <div className={styled["right-info"]}>
              <div className={styled["right-name"]}>
                <h1>Contact</h1>
              </div>
              <div className={styled["right-text"]}>
                <span>support@techshop.com</span>
                <span>975/28 Tran Xuan Soan, P. Tan Hung, Q.7, Tp. HCM</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
