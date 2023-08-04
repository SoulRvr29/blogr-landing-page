import editorImgMobile from "./assets/illustration-editor-mobile.svg";
import editorImgDesktop from "./assets/illustration-editor-desktop.svg";
import phonesImg from "./assets/illustration-phones.svg";
import laptopImgMobile from "./assets/illustration-laptop-mobile.svg";
import laptopImgDesktop from "./assets/illustration-laptop-desktop.svg";
import circlesBkg from "./assets/bg-pattern-circles.svg";

function App() {
  return (
    <main>
      <h2>Designed for the future</h2>
      <article className="editor-article">
        <section>
          <img src={editorImgMobile}></img>
          <img src={editorImgDesktop}></img>
        </section>
        <section>
          <h3>Introducing an extensible editor</h3>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h3>Robust content management</h3>
          <p>
            Flexible content management enables users to easily move throught
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you're in full control.
          </p>
        </section>
      </article>
      <article className="phones-article">
        <section>
          <img className="phonesImg" src={phonesImg}></img>
        </section>
        <section>
          <h3>State of the Art Infrastructure</h3>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </section>
        <div className="phones-article-bkg">
          <img
            className="circles-bkg"
            src={circlesBkg}
            title="background"
          ></img>
        </div>
      </article>
      <article className="laptop-article">
        <section>
          <img src={laptopImgMobile}></img>
          <img src={laptopImgDesktop}></img>
        </section>
        <section>
          <h3>Free, open, simple</h3>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supoorts features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h3>Powerful tooling</h3>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </section>
      </article>
    </main>
  );
}

export default App;
