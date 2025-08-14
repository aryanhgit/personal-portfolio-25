import Header from './components/Header'
import Project from './components/Project'
import Contact from './components/Contact' 
import Skill from './components/Skill'

function App() {

  return (
    <>
      <Header />
      <section>
        <Project />
      </section>
      <section>
        <Skill />
      </section>
      <section>
        <Contact />
      </section>
    </>
  )
}

export default App
