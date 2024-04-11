import { Title } from "@solidjs/meta";
import Hero from "~/components/Hero";
import Skills from "~/components/Skills";

export default function Home() {
  return (
    <main>
      <Title>HTSC</Title>
      <div class="content">
        <Hero />
        {/* <Skills /> */}
      </div>
    </main>
  );
}
