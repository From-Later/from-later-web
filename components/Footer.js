import Link from 'next/link'

export default function Footer(){
  return (
    <div className="footer-contact wf-section">
        <div className="about-max-width">
          <p>​​For new projects, business, collaborations, speaking, press, or general enquiries, please email us at: <a href="#" className="link">mail@fromlater.com</a>
          </p>
          <div className="dropdown-container w-clearfix">
            <div className="dropdown-menu">
              <div className="drop-text">Subscribe to our newsletter</div>
              <div className="drop-expand">
                <div className="drop-intro">
                  <div className="form-block w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" action="https://fromlater.us17.list-manage.com/subscribe/post?u=b1b32d764bc713886074f83b3&amp;amp;id=2895e0feb8&amp;amp;f_id=00694ee0f0" method="post" className="form w-clearfix">
                      <input type="email" className="text-feild w-input" maxlength="256" name="email-3" data-name="Email 3" placeholder="your email address" id="email-3" required=""/>
                      <input type="submit" value="Subscribe" data-wait="Please wait..." className="button w-button"/>
                    </form>
                    <div className="success-message w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="error-message w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-list">
              <ul role="list" className="list w-clearfix w-list-unstyled">
                <li className="_16">
                  <a href="https://twitter.com/since21XX" target="_blank">Twitter</a>
                </li>
                <li className="_16">
                  <a href="https://www.instagram.com/since21xx/">Instagram</a>
                </li>
                <li className="_16">
                  <a href="https://www.linkedin.com/company/fromlater/" target="_blank">Linkedin</a>
                </li>
                <li className="_16">
                  <a href="https://www.youtube.com/fromlater">Youtube</a>
                </li>
                <li className="_16">
                  <a href="https://www.twitch.tv/fromlater">Twitch</a>
                </li>
                <li className="_16">
                  <a href="https://www.are.na/from-later">Are.na</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="small">We don’t use any kind of cookies or analytics on this site. Our social media accounts are on platforms that have their own privacy policies. You can unsubscribe at any time by clicking on the unsubscribe link at the bottom of our emails.<br/><br/>© Copyright 2022 From Later Inc. All Rights Reserved.</p>
        </div>
      </div>
  );
};
