import AboutMyself from "../components/AboutMyself";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectReview from "../components/ProjectReview";

function Home() {
  return (
    <div>
      <Header />
      <AboutMyself />
      <ProjectReview />
      <Footer />
    </div>
  );
}

export default Home;