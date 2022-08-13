import * as React from "react"

export default class ExperienceSection extends React.Component {
  constructor(props: {}) {
    super(props)
    this.state = { selectedExperience: "Work" }
  }

  toggleExperience = (type: string) => {
    this.setState({ selectedExperience: type })
  }

  get experienceContent() {
    let experience =
    <div className="flex">
      <div className="mr-10">
        <button className="border-l-2 pl-3 text-caret-color border-caret-color">Adfinis</button>
      </div>
      <div>
        <p className="text-lg">Full-Stack Web Developer <span className="text-sub-color" >@ <a href="https://adfinis.com/en/" target="_blank">Adfinis</a></span></p>
        <p className="text-sm">August 2017 - Present</p>
        <ul className="list-decorate">
          <li className="my-2">Creating and maintaining diverese applications for multiple clients and internal projects.</li>
          <li className="my-2">Working with modern and legacy code bases, in a variety of languages and framworks such as JavaScript, Python, PHP, Ember.js, Vue.js, Django, REST and GraphQL</li>
          <li className="my-2">Activly communicating with different levels of engineers and many clients on regular to daily basis.</li>
        </ul>
      </div>
    </div>

    if (this.state.selectedExperience === "Education") {
      experience =
      <div>
        <ul>
          <li>AI & Machine Learning Bachelor @ HSLU September 2022 - now</li>
          <li>Computer Engineer August 2017 - August 2021</li>
        </ul>
      </div>
    }

    return experience
  }

  get experienceButtons() {
    const baseClasses = [" mr-5 hover:text-caret-color hover:border-caret-color"]
    return ["Work", "Education"].map(type =>
    <button
      key={type}
      onClick={this.toggleExperience.bind(this, type)}
      className={[...baseClasses, this.state.selectedExperience === type && "text-caret-color border-caret-color"].join(" ")}
    >
      {type}
    </button>)
  }

  render() {
    return (
      <section id="experience" className="flex flex-col justify-center m-20 text-text-color">
        <h2 className="text-main-color text-5xl my-6 text-center">My experiences</h2>
        <div className="mx-60">
          <div className="my-4">
            {this.experienceButtons}
          </div>
          <div className="w-full">
            {this.experienceContent}
          </div>
        </div>

      </section>
    )
  }
}
