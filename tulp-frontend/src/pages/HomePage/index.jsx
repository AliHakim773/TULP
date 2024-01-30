import "./styles.css"
import onlineImage from "../../assets/images/online-teaching.jpg"
import HIW from "../../assets/images/how-it-works-removebg-preview.png"
import CodeSVG from "../../assets/svgs/Code"
import { CameraOn, ChatIcon } from "../../assets/Icons"

const HomePage = () => {
  return (
    <div className='landing-page'>
      <section className='hero-section flex center'>
        <h1>TULP</h1>
      </section>
      <section className='why-us home-section flex center'>
        <div>
          <h2>Why Choose Us</h2>
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
                for screen sharing, camera/mic functionality, and a chat
                section.
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
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='home-section home-about flex center'>
        <div className='flex center column'>
          <h2>Who are we</h2>
          <div className='home-section-container flex center'>
            <div className='home-about-part home-about-part-1'>
              TULP is the ultimate learning platform for teaching and taking
              classes online, we provide the best user experience so you can
              focus on taking classes or making them. With TULP you will never
              need any other platform or tool to host the best material online.
            </div>
            <div className='home-about-part home-about-part-2'>
              <div className='about-img'>
                <img src={onlineImage} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-section home-about home-section-why flex center'>
        <div className='flex center column'>
          <h2>What To Do Now</h2>
          <div className='home-section-container flex center'>
            <div className='home-about-part home-about-1'>
              <div className='about-img'>
                <img src={HIW} alt='' />
              </div>
            </div>
            <div className='home-about-part home-about-part-2'>
              When you decide to join out comunity all you need to do is to
              register an account and choose if you want to be a student or an
              instructor, after doing that you are free to start posting on the
              home page and start joinning classes.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
