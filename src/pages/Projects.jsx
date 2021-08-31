import Footer from "../components/Footer"
import Header from "../components/Header"
import Space from '../image/block_big.jpg';
// import { Card } from 'react-bootstrap';
import './projects.scss';


function Projects() {
  return (
    <div>
      <Header />
      <div className="project-container">
        <main>
          <h1>My Projects</h1>
          <div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through 
          </div>
          <p>Link to my 
            <a href="https://github.com/juliofilizzola" target="_blank" rel="noreferrer">
              <span></span>
              <span></span>
              Github
              <span></span>
              <span></span>
            </a>
          </p>
        </main>
        <section>
          <div className="Project">
            <h3>Todo-List</h3> 
            <div className="containerProject">
              <img className="img-projects" src={Space} alt='imagem do projeto'/>
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              <span>Repositorio git</span> <span>site</span>
              </p>
            </div>
          </div>
          <div className="Project">
            <h3>Todo-List</h3> 
            <div className="containerProject">
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              <span>Repositorio git</span> <span>site</span>
              </p>
              <img className="img-projects" src={Space} alt='imagem do projeto'/>
            </div>
          </div>
          <div className="Project">
            <h3>Todo-List</h3> 
            <div className="containerProject">
              <img className="img-projects" src={Space} alt='imagem do projeto'/>
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              <span>Repositorio git</span> <span>site</span>
              </p>
            </div>
          </div>

   
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
