import FooterCSS from "./Footer.module.css"

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className={FooterCSS.jobfooter}>
    <p className="copyright">
            Copyright &copy; <span className="year">{currentYear}</span> by JobChaser. <br />All
            right reserved.
          </p>
    </div>
  )
}

export default Footer;