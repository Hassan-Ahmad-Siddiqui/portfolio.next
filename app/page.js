import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="left">Hassan's Portfolio</div>
          <div className="right">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Project's</a>
              </li>
              <li>
                <a href="">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="firstSection">
          <div className="leftSection">
            <div> Hi, My name is</div> <span className="purple">Hassan</span>
            <div>and I am a passionate</div>
            <span id="element"></span>
            <div className="buttons">
              <button className="btn">Download Resume</button>
              <button className="btn">Visit GitHub</button>
            </div>
          </div>
          <div className="rightSection">
            <img src="bg.png" alt="" />
          </div>
        </section>
        <hr />
        <section className="secondSection">
          <span className="text-gray">What I have done so far!</span>
          <h1>Work Experience</h1>
          <div className="box">
            <div className="vertical">
              <img className="image-top" src="/2.png" alt="" />
              <div className="vertical-title">HTML Devloper (2023-2023)</div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                illo, ad hic blanditiis culpa deserunt totam neque libero in
                esse dignissimos suscipit explicabo aperiam tenetur officiis id
                quos sit? Temporibus!
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="/3.png" alt="" />
              <div className="vertical-title">Node.js Devloper (2023-2023)</div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                illo, ad hic blanditiis culpa deserunt totam neque libero in
                esse dignissimos suscipit explicabo aperiam tenetur officiis id
                quos sit? Temporibus!
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="/4.png" alt="" />
              <div className="vertical-title">HTML Devloper (2023-2023)</div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                illo, ad hic blanditiis culpa deserunt totam neque libero in
                esse dignissimos suscipit explicabo aperiam tenetur officiis id
                quos sit? Temporibus!
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="/5.png" alt="" />
              <div className="vertical-title">HTML Devloper (2023-2023)</div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                illo, ad hic blanditiis culpa deserunt totam neque libero in
                esse dignissimos suscipit explicabo aperiam tenetur officiis id
                quos sit? Temporibus!
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="/6.png" alt="" />
              <div className="vertical-title">HTML Devloper (2023-2023)</div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                illo, ad hic blanditiis culpa deserunt totam neque libero in
                esse dignissimos suscipit explicabo aperiam tenetur officiis id
                quos sit? Temporibus!
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="/7.png" alt="" />
              <div className="vertical-title">HTML Devloper (2023-2023)</div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                illo, ad hic blanditiis culpa deserunt totam neque libero in
                esse dignissimos suscipit explicabo aperiam tenetur officiis id
                quos sit? Temporibus!
              </div>
            </div>
          </div>
        </section>
      </main>
      <div>
        <footer>
          <div className="footer">
            <div className="footer-first">
              <h3>Hassan's Developer Portfolio</h3>
            </div>
            <div className="footer-second">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-third">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-fourth">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="footer-rights">
            Copyrights &#169; Hassansportfolio.com | All rights reserved
          </div>
        </footer>
      </div>
    </>
  );
}
