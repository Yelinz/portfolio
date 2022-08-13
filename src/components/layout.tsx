import * as React from "react"
import { Navbar } from "./navbar"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin"

export default class Layout extends React.Component {
  render() {
    return (
      <div className="scroll-smooth">
        <header>
          <title>Yelin Zhang - Portfolio</title>
          <meta name="description" content="Welcome to my portfolio" />
          <Navbar></Navbar>
        </header>
        <main className="m-3">
          {this.props.children}
          <ul className="fixed inset-y-0 left-0 grid content-end h-full text-white pl-5 gap-10">
            <li>
              <a href="https://github.com/Yelinz" target="_blank" className="text-xl"><SiGithub /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yelinzhang/" target="_blank" className="text-xl"><SiLinkedin /></a>
            </li>
            <div className="w-px h-10 border-solid border-r-2 border-main-color"></div>
          </ul>
        </main>
      </div>
    )
  }
}
