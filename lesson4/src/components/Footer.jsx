import socialIcons from '../img/Frame 199.png'
import simple from '../img/Frame 85.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer_inner">
        <div className="footer_switch">
         
         <img src={simple} alt="simple" />
         
        </div>

        <div className="footer_socials">
          <img src={socialIcons} alt="social media icons" />
        </div>
      </div>
    </footer>
  )
}
