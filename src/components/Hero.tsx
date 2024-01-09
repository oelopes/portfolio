const Hero = () => {
  return (
    <section className="h-screen py-8 p-4">
      <header className="flex justify-between items-center">
        <img className="w-24" src="logo.jpeg" alt="{...}oelopes-logo" />

        <div className="text-white flex gap-4">
          <a href="https://www.linkedin.com/in/oelopes/" target="_blank">
            <img className="w-6" src="linkedin.svg" alt="linkedin-logo" />
          </a>
          <a href="https://github.com/oelopes" target="_blank">
            <img className="w-6" src="github.svg" alt="github-logo" />
          </a>
        </div>
      </header>

      <section className="flex flex-col items-center gap-8 my-8">
        <aside>
          <img className="w-48" src="me.png" alt="me" />
        </aside>
        <aside className="text-white text-center">
            <h1 className="text-6xl bg-gradient-to-r from-white via-white to-transparent inline-block text-transparent bg-clip-text">Hi, I'm Leo</h1>
            <h2 className="text-2xl m-4">
              I'm a Software Engineer with 6 years of experience using React, Typescript and NodeJS.
            </h2>
            <button className="text-lg">Let's connect</button>
        </aside>
      </section>
    </section>
  )
}


// as a Front-end Developer. 
//               I had the opportunity to mentor and guide a few developers throughout my career and 
//               to collaborate with several others on various projects using different technologies 
//               like JavaScript, Typescript, React, Angular, Vue, NodeJS, PHP, GraphQL, AWS, GCP and 
//               others. For the most part of my career I've been using NodeJS Typescript and React, 
//               but I'm always open to learning new languages and technologies.

export default Hero