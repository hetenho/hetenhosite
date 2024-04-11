import Icon from "./Icon";

export default function Hero() {
  return (
    <header>
      <h1>Hi, I'm Henrik &#128406;</h1>
      <h2>I am an experienced <strong>fullstack web developer</strong> available for hire<strong>.</strong></h2>
      <div class="contact">
        <a class="social-media-link" href="https://github.com/hetenho">
          <Icon name="github" /> Github
        </a>
        <a class="social-media-link" href="https://www.linkedin.com/in/henrik-tenhovirta-7a78aa48">
          <Icon name="linkedin" /> LinkedIn
        </a>
        <a class="social-media-link" href="mailto:hetenho@gmail.com">
          <Icon name="email" /> Email
        </a>
      </div>
    </header>
  );
}
