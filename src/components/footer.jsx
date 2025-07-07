export default function Footer() {
  return (
    <>
      <div className="footer-container mt-5 bg-white sticky bottom-0">
        <div className="md:flex justify-between p-2">
          <div className="socialMedia">
            <ul className="flex gap-6">
              <li style={{ color: "#0073B1" }}>
                <a href="https://www.linkedin.com/in/vasanthbalasubramaniyan/" target="_blank">
                  <i class="fa fa-2x fa-linkedin-square blue-color" ></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/VasanthBalasubramaniyan/" target="_blank">
                  <i class="fa fa-2x fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <p>&copy; Vasanth B</p>
          </div>
          <div className="flex items-center">
            <p><a href="mailto:vasanthbalsubramaniyan08@gmail.com">vasanthbalsubramaniyan08@gmail.com</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
