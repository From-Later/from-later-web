import RotateOnScroll from '@/components/RotateOnScroll'

export default function Navigation(){
  return (
    <div className="navigation w-clearfix wf-section">
        <a href="/" aria-current="page" className="nav-logo w-inline-block w--current">
      <RotateOnScroll>
          <img id="fl-logo" src="/images/fllogo-01.svg" loading="lazy" data-w-id="49c910d7-11d3-14d6-6350-5f53a727c92c" alt="" className="nav-logo-img" />
      </RotateOnScroll>
        </a>
      <div className="menu-links">
        <a href="/views" className="navigation-link w-inline-block">
          <div>Views</div>
        </a>
        <a href="/work" className="navigation-link w-inline-block">
          <div>Work</div>
        </a>
        <a href="/team" className="navigation-link w-inline-block">
          <div>Team</div>
        </a>
      </div>
      <a data-w-id="49c910d7-11d3-14d6-6350-5f53a727c937" href="#" className="contact-button w-inline-block">
        <img src="/images/write.png" loading="lazy" alt="" className="nav-logo-img"/>
      </a>
      <div className="pu-container">
        <div className="pop-up w-clearfix">
          <a data-w-id="1c6e397f-4e8c-1229-abef-83f8e5476924" href="#" className="close-pop-up w-inline-block">
            <div className="pu-close">
              <div className="line-across"></div>
              <div className="vertical-line"></div>
            </div>
          </a>
          <div className="contact-sections">
            <p>For new projects, business, collaborations, speaking, press, or general enquiries, please email us at: <a href="mailto:mail@fromlater.com" className="link">mail@fromlater.com</a>
            </p>
          </div>
          <div className="contact-sections">
            <div className="drop-text">Subscribe to our newsletter</div>
            <div className="w-form">
              <form id="email-form" name="email-form" data-name="Email Form" action="https://fromlater.us17.list-manage.com/subscribe/post?u=b1b32d764bc713886074f83b3&amp;amp;id=2895e0feb8&amp;amp;f_id=00694ee0f0" method="post" className="pu-contact-form w-clearfix"><input type="email" className="text-feild w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="your email address" id="email-2" required=""/><input type="submit" value="Submit" data-wait="Please wait..." className="button submit w-button"/></form>
              <div className="success-message w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <p className="small">You can unsubscribe at any time by clicking on the unsubscribe link at the bottom of our emails.</p>
          </div>
          <div className="column-list">
            <ul role="list" className="list w-clearfix w-list-unstyled">
              <li className="_16">
                <a href="https://twitter.com/since21XX" target="_blank">Twitter</a>
              </li>
              <li className="_16">
                <a href="https://www.instagram.com/since21xx/" target="_blank">Instagram</a>
              </li>
              <li className="_16">
                <a href="https://www.linkedin.com/company/fromlater/" target="_blank">Linkedin</a>
              </li>
              <li className="_16">
                <a href="https://www.youtube.com/fromlater" target="_blank">Youtube</a>
              </li>
              <li className="_16">
                <a href="https://www.twitch.tv/fromlater" target="_blank">Twitch</a>
              </li>
              <li className="_16">
                <a href="https://www.are.na/from-later" target="_blank">Are.na</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
