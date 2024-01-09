const Header = () => {
  return (
    <div className="py-8 px-16 flex justify-between items-center">
      <img className="w-40" src="logo.jpeg" alt="{...}oelopes-logo" />

      <div className="text-white flex gap-4">
        <a href="https://www.linkedin.com/in/oelopes/" target="_blank">
          <img className="w-8" src="linkedin.svg" alt="linkedin-logo" />
        </a>
        <a href="https://github.com/oelopes" target="_blank">
        <img className="w-8" src="github.svg" alt="github-logo" />
        </a>
      </div>
    </div>
  )
}

export default Header