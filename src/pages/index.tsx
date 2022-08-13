import * as React from "react"
import Layout from "../components/layout"
import ExperienceSection from "../components/experience"
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal'
import { SiGithub } from "@react-icons/all-files/si/SiGithub"


class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="h-screen grid place-content-center text-text-color ">
          <p className="text-sub-color">Hello, my name is</p>
          <h1 className="text-main-color text-7xl my-4">Yelin Zhang</h1>
          <div className="text-caret-color text-4xl">
            <p>
              Full-Stack Web Developer and
            </p>
            <p>Machine Learning Student</p>
          </div>
          <div className="my-4">
            <p>
              I'm a Javascript and Python software engineer creating smooth web experiences.
            </p>
            <p>
              Currently my work is digitalizing complex workflows at <a className="text-sub-color" href="https://adfinis.com/en/" target="_blank">Adfinis</a>.
            </p>
          </div>
        </div>
        <section id="about" className="grid place-content-center">
          <h2 className="text-main-color text-5xl my-2">About me</h2>
          <div className="text-text-color whitespace-pre-wrap max-w-4xl">
            I have always been interested in computers and spend most of my time with them, but in my spare time I like to cook or travel.
            <p className="my-2">
              Currently i'm employed as Full-Stack Web Developer since 2017 in Bern, Switzerland.
              But recently have been developing an interest in Machine Learning and therefore
              begun an Bachlor in Machine Learning and Artificial Intelligence at HSLU.
            </p>
            <p>
              My work currently is creating digitalized Workflows for diverse Clients at <a className="text-sub-color" href="https://adfinis.com/en/" target="_blank">Adfinis</a>.
              The technologies we use are Ember.js in the Frontend and Django in the Backend.
            </p>
            <p className="my-2">Technologies i'm familiar with:</p>
            <ul className="list-decorate">
              <li>Javascript</li>
              <li>Python</li>
              <li>GraphQL</li>
              <li>Ember.js</li>
              <li>Django</li>
            </ul>
          </div>
        </section>
        <ExperienceSection/>
        <section id="projects" className="grid place-content-center text-text-color">
          <h2 className="text-main-color text-5xl my-7 text-center">Some of my works</h2>

<div className="flex flex-wrap justify-center">
          <div className="bg-sub-alt-color drop-shadow-lg rounded p-6 m-5 w-1/4">
            <h3 className="text-caret-color mb-3">mySAGW</h3>
            <p>
              A web app for the SAGW organisation to manage their grant applications.
              Students can fill out an application for a grant and the organisation has a workflow to check the application.
            </p>
            <div className="flex justify-around m-5 flex-wrap">
              <span className="mx-2">Ember.js</span>
              <span className="mx-2">Django</span>
              <span className="mx-2">Caluma</span>
              <span className="mx-2">GraphQL</span>
            </div>
            <a href="https://github.com/adfinis-sygroup/mySAGW" target="_blank" className="text-xl"><SiGithub /></a>
          </div>
          <div className="bg-sub-alt-color drop-shadow-lg rounded p-6 m-5 w-1/4">
            <h3 className="text-caret-color mb-3">eBau Schwyz</h3>
            <p>
              Building grant management application for the Canton Schwyz.
              Grants can be submitted by residents and reviewed and approved by the Authorities.
            </p>
            <div className="flex justify-around m-5 flex-wrap">
              <span className="mx-2">Ember.js</span>
              <span className="mx-2">Django</span>
              <span className="mx-2">PHP</span>
              <span className="mx-2">Vue.js</span>
              <span className="mx-2">GraphQL</span>
            </div>
          </div>
          <div className="bg-sub-alt-color drop-shadow-lg rounded p-6 m-5 w-1/4">
            <h3 className="text-caret-color mb-3">Caluma</h3>
            <p>
              A collaborative form editing and workflow service.
              Digitilize a workflow with forms, decision making and user permissions.
            </p>
            <div className="flex justify-around m-5 flex-wrap">
              <span className="mx-2">Ember.js</span>
              <span className="mx-2">Django</span>
              <span className="mx-2">Python</span>
              <span className="mx-2">GraphQL</span>
            </div>
            <a href="https://github.com/projectcaluma" target="_blank" className="text-xl"><SiGithub /></a>
            <a href="https://caluma.io/" target="_blank" className="m-5 text-xl"><BiLinkExternal /></a>
          </div>
          </div>
          <a href="https://github.com/Yelinz" target="_blank" className="place-self-center border-solid border-2 rounded border-main-color text-main-color text-m p-3 my-10 w-26 hover:bg-caret-color/50">See more</a>
        </section>
        <section id="contact" className="h-96 grid place-content-center text-center my-12 mb-24">
          <h2 className="text-main-color text-5xl">Contact</h2>
          <p className="text-text-color max-w-xl m-10">
            I'm currently not looking for any new Opportunities, but feel free to get in touch anyways.
            Wether it be just saying Hi or shooting a question about my Work.
          </p>
          <a
            href="mailto:test@test.com"
            className="place-self-center border-solid border-2 rounded border-main-color text-main-color text-xl p-4 w-30 hover:bg-caret-color/50"
          >
            Mail me
          </a>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
