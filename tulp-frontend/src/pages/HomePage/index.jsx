import "./styles.css"
import onlineImage from "../../assets/images/online-teaching.jpg"
import CodeSVG from "../../assets/svgs/Code"
import { CameraOn, ChatIcon } from "../../assets/Icons"
import Button from "../../components/Base/Button"

const HomePage = () => {
  return (
    <div className='landing-page'>
      <section className='hero-section flex center'>
        <h1>TULP</h1>
      </section>
      <section className='why-us home-section flex center'>
        <div>
          <h2>Why Choose us</h2>
          <div className='home-section-container flex center'>
            <div className='why-us-item border rounded-1 flex column'>
              <div className='why-us-icon-wrapper flex center'>
                <div className='why-us-icon'>
                  <ChatIcon />
                </div>
              </div>
              <p>
                You don't have to rely on external messaging applications; we
                offer class channels with options for read-only,
                instructor-only, or general channels that cater to everyone's
                needs.
              </p>
            </div>
            <div className='why-us-item border rounded-1 flex column'>
              <div className='why-us-icon-wrapper flex center'>
                <div className='why-us-icon'>
                  <CameraOn />
                </div>
              </div>
              <p>
                We provide dedicated video rooms. These rooms include options
                for screen sharing, camera/mic functionality, and a chat section
              </p>
            </div>
            <div className='why-us-item border rounded-1 flex column'>
              <div className='why-us-icon-wrapper flex center'>
                <div className='why-us-icon'>
                  <CodeSVG />
                </div>
              </div>
              <p>
                One of our standout features is our online collaborative
                compiler. During class, you can initiate this compiler, enabling
                real-time collaborative coding for an enhanced learning
                experience
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='home-section home-about flex center'>
        <div className='flex center column'>
          <h2>Who are we</h2>
          <div className='home-section-container flex center'>
            <div className='home-about-part'>
              TULP is the ultimate learning platform for teaching and taking
              classes online, we provide the best user experience so you can
              focus on taking classes or making them. With TULP you will never
              need any other platform or tool to host the best material online.
            </div>
            <div className='home-about-part'>
              <div className='about-img'>
                <img src={onlineImage} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-section flex center'>
        <div className='flex center column'>
          <h2>Register Now</h2>
          <div className='home-section-container flex column center'>
            What are you waiting for register now and start creating your own
            online classes
            <div className='enroll flex'>
              <a href='/register'>
                <Button text='Register' />
              </a>
              <a href='/login'>
                <Button text='Login' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
