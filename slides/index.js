import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "src";

import preloader from "src/utils/preloader";

import Interactive from "./interactive.jsx";

const slideTransition = ['spin', 'zoom'];
const images = {
  javascript: require("assets/javascript.jpg"),
  javascript2: require("assets/javascript2.jpg"),
  moduleCounts: require("assets/module_counts.png"),
  jobs: require("assets/jobs.png"),
  jobTitles: require("assets/jobTitles.png"),
  jackie: require("assets/jackie.png"),
  indieBundle: require("assets/indiebundle.png"),
  jquery: require("assets/jquery.png"),
  backbone: require("assets/backbone.png"),
  angular: require("assets/angular.png"),
  ember: require("assets/ember.png"),
  spaghetti: require("assets/spaghetti.jpg"),
  construction: require("assets/construction.jpg"),
};

preloader([images.moduleCounts, images.jobs, images.jobTitles]);

export default class Slides extends React.Component {
  render() {
    return (
      <Spectacle>
        <Deck transition={slideTransition} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React
            </Heading>
            <Heading size={1} fit>
              for awesome people
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              JavaScript Usage on Sites
            </Heading>
            <Markdown>
          {`
* 2011 - 38.2%
* 2013 - 60.4%
* 2015 - 70.5%
* Source: [W3Techs](http://w3techs.com/technologies/history_overview/javascript_library/all/y)
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>Amazing growth rate.</li><li>At this rate bigger than others combined.</li></ul>">
            <Heading size={1} textColor="tertiary">
              Module Counts
            </Heading>
            <Layout>
              <Image src={images.moduleCounts.replace("/", "")} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.modulecounts.com/">modulecounts.com</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>Angular dominates the work market.</li><li>Early signs of React.</li></ul>">
            <Heading size={1} textColor="tertiary">
              Job Trends I
            </Heading>
            <Layout>
              <Image src={images.jobs.replace("/", "")} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.indeed.com/jobtrends?q=Angularjs%2C+React.js%2C+Knockout%2C+Backbone.js&l=">Indeed</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>Also job titles change.</li><li>Increasing demand for full stack developers.</li></ul>">
            <Heading size={1} textColor="tertiary">
              Job Trends II
            </Heading>
            <Layout>
              <Image src={images.jobTitles.replace("/", "")} padding="20px" />
            </Layout>
            <Layout>
              <Text>
                <Link href="http://www.indeed.com/jobanalytics/jobtrends?q=frontend%2C+backend%2C+full+stack&l=">Indeed</Link>
              </Text>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Image src={images.javascript.replace("/", "")} margin="0px auto 40px" height="650px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Image src={images.jackie.replace("/", "")} margin="0px auto 40px" height="381px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <Image src={images.jquery.replace("/", "")} margin="0px auto 40px" height="147px"/>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.spaghetti.replace("/", "")} />

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} caps fit>
              The rise of SPAs
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.construction.replace("/", "")} />

          <Slide transition={slideTransition} bgColor="white" notes="">
            <Image src={images.backbone.replace("/", "")} margin="0px auto 40px" height="109px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <Image src={images.angular.replace("/", "")} margin="0px auto 40px" height="230px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="white" notes="">
            <Image src={images.ember.replace("/", "")} margin="0px auto 40px" height="206px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1} caps fit>
              React?
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>This presentation was made in React.</li><li>Let's count cats.</li></ul>">
            <Heading size={1} caps fit textColor="tertiary">
              Cat Counter
            </Heading>
            <Interactive/>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary"
            notes="<ul><li>Note JSX (compiled to JS) and how we treat data!</li><li>A step beyond templating. Runtime checks against structure!</li></ul>">
            <CodePane
              lang="javascript"
              source={require("raw!../examples/cat.example")}
              margin="20px auto"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              React in Brief
            </Heading>
            <Markdown>
          {`
* Virtual DOM - Decouples React from DOM
* Just view layer
* Component thinking!
* Props, state, life cycle
* JSX
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              React Related Architectures
            </Heading>
            <Markdown>
          {`
* [Facebook Flux](https://facebook.github.io/flux/) &#8594; [Redux](https://github.com/rackt/redux)
* [Mobservable](https://github.com/mweststrate/mobservable)
* [Cerebral](http://www.cerebraljs.com/)
* [Baobab](https://github.com/Yomguithereal/baobab)
* No single, right way
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Styling in React
            </Heading>
            <Markdown>
          {`
* No clear standard yet
* Inline styling?
* FOUC - Extract CSS
* [CSS Modules](https://github.com/css-modules) - Solves CSS globalization
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Related Tooling
            </Heading>
            <Markdown>
          {`
* [Browserify](http://browserify.org/), [Webpack](https://webpack.github.io/), [jspm](http://jspm.io/) - Bundlers
* [Babel](https://babeljs.io/) - ES2015+, JSX, plugins
* [Flow](http://flowtype.org/), [Typescript](http://www.typescriptlang.org/) - Better typing, replaces propTypes + adds more safety
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Testing React
            </Heading>
            <Markdown>
          {`
* [Jest](https://facebook.github.io/jest/), [Karma](https://karma-runner.github.io)+[Mocha](https://mochajs.org/)+..., [Tape](https://www.npmjs.com/package/tape)
* Acceptance testing (Selenium), [CodeceptJS](http://codecept.io/)
* Property based testing?
          `}
            </Markdown>
          </Slide>

          <Slide transition={slideTransition} bgColor="secondary">
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Frameworks
                </Heading>
                <Markdown style={{color: "white"}}>
          {`
* Opinionated
* Powerful out of box
* Constrained by design
          `}
                </Markdown>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Libraries
                </Heading>
                <Markdown style={{color: "white"}}>
          {`
* You bring opinions
* Power through composition
* Design for change
          `}
                </Markdown>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Questions?
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Link href="http://www.reactindiebundle.com/">
              <Image src={images.indieBundle.replace("/", "")} margin="0px auto 40px" height="600px"/>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
