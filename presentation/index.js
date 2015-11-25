import React from "react";
import { render } from "react-dom";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "src";

import preloader from "src/utils/preloader";

import Interactive from "assets/interactive";

require("normalize.css");
require("src/themes/default/index.css");

const slideTransition = ['zoom', 'fade'];
const images = {
  javascript: require("assets/javascript.jpg"),
  javascript2: require("assets/javascript2.jpg"),
  logo: require("assets/logo.png"),
  kanban: require("assets/kanban.gif"),
  moduleCounts: require("assets/module_counts.png"),
  redmonk: require("assets/redmonk.png"),
  jobs: require("assets/jobs.png"),
  jobTitles: require("assets/jobTitles.png"),
  jackie: require("assets/jackie.png"),
};

preloader([images.moduleCounts, images.redmonk, images.jobs]);

render(
  <Spectacle>
    <Deck transition={slideTransition} transitionDuration={500}>
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          How to write a book and
        </Heading>
        <Heading size={1} fit>
          SurviveJS it
        </Heading>
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
        notes="<ul><li>Popular</li><li>Same goes for AltJS</li></ul>">
        <Layout>
          <Link href="http://redmonk.com/jgovernor/2015/07/31/programming-language-rankings-summer-2015/">
            <Image src={images.redmonk.replace("/", "")} />
          </Link>
        </Layout>
      </Slide>

      <Slide transition={slideTransition} bgColor="primary"
        notes="<ul><li>Angular dominates the work market.</li><li>Early signs of React.</li></ul>">
        <Heading size={1} textColor="tertiary">
          Job Trends
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

      <Slide transition={slideTransition} bgColor="black" notes="">
        <Image src={images.javascript2.replace("/", "")} margin="0px auto 40px" height="650px"/>
      </Slide>

      <Slide transition={slideTransition} bgColor="white" notes="">
        <Image src={images.logo.replace("/", "")} margin="0px auto 40px" height="566px"/>
      </Slide>

      <Slide transition={slideTransition} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          SurviveJS
        </Heading>
        <Heading size={1} fit>
          Webpack and React
        </Heading>
      </Slide>

      <Slide transition={slideTransition} bgColor="black" notes="">
        <Image src={images.kanban.replace("/", "")} margin="0px auto 40px" height="279px"/>
      </Slide>

      <Slide transition={slideTransition} bgColor="primary">
        <iframe
          width="135%"
          height="750px"
          style={{transform: 'scale(0.75, 0.75)', transformOrigin: 'top left'}}
          src="https://www.survivejs.com"/>
      </Slide>

      <Slide transition={slideTransition} bgColor="primary">
        <iframe
          width="135%"
          height="750px"
          style={{transform: 'scale(0.75, 0.75)', transformOrigin: 'top left'}}
          src="https://antwarjs.github.io"/>
      </Slide>

      <Slide transition={slideTransition} bgColor="primary">
        <iframe
          width="135%"
          height="750px"
          style={{transform: 'scale(0.75, 0.75)', transformOrigin: 'top left'}}
          src="https://leanpub.com/survivejs_webpack_react"/>
      </Slide>

      <Slide transition={slideTransition} bgColor="primary">
        <Heading size={1} fit>
          @survivejs
        </Heading>
      </Slide>

      <Slide transition={slideTransition} bgColor="primary">
        <Heading size={1} fit>
          Quora
        </Heading>
      </Slide>

      <Slide transition={slideTransition} bgColor="primary">
        <Heading size={1} fit>
          <Link href="http://www.reactindiebundle.com/">React Indie Bundle</Link>
        </Heading>
      </Slide>

      <Slide transition={["slide"]} bgDarken={0.75}>
        <Appear fid="1">
          <Heading size={1} caps fit textColor="primary">
            Full Width
          </Heading>
        </Appear>
        <Appear fid="2">
          <Heading size={1} caps fit textColor="tertiary">
            Adjustable Darkness
          </Heading>
        </Appear>
        <Appear fid="3">
          <Heading size={1} caps fit textColor="primary">
            Background Imagery
          </Heading>
        </Appear>
      </Slide>

      <Slide transition={["zoom", "fade"]} bgColor="primary">
        <Heading caps fit>Flexible Layouts</Heading>
        <Layout>
          <Fill>
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Left
            </Heading>
          </Fill>
          <Fill>
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Right
            </Heading>
          </Fill>
        </Layout>
      </Slide>

      <Slide transition={["slide"]} bgColor="black">
        <BlockQuote>
          <Quote>Wonderfully formatted quotes</Quote>
          <Cite>Ken Wheeler</Cite>
        </BlockQuote>
      </Slide>

      <Slide transition={["spin", "zoom"]} bgColor="tertiary">
        <Heading caps fit size={1} textColor="primary">
          Inline Markdown
        </Heading>
        <Markdown>
          {`
You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
          `}
        </Markdown>
      </Slide>

      <Slide transition={["slide", "spin"]} bgColor="primary">
        <Heading caps fit size={1} textColor="tertiary">
          Smooth
        </Heading>
        <Heading caps fit size={1} textColor="secondary">
          Combinable Transitions
        </Heading>
      </Slide>

      <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <List>
          <ListItem><Appear fid="1">Inline style based theme system</Appear></ListItem>
          <ListItem><Appear fid="2">Autofit text</Appear></ListItem>
          <ListItem><Appear fid="3">Flexbox layout system</Appear></ListItem>
          <ListItem><Appear fid="4">React-Router navigation</Appear></ListItem>
          <ListItem><Appear fid="5">PDF export</Appear></ListItem>
          <ListItem><Appear fid="6">And...</Appear></ListItem>
        </List>
      </Slide>

      <Slide transition={["slide"]} bgColor="primary">
        <Heading size={1} caps fit textColor="tertiary">
          Your presentations are interactive
        </Heading>
        <Interactive/>
      </Slide>

      <Slide transition={["spin", "slide"]} bgColor="tertiary">
        <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
          Made with love in Seattle by
        </Heading>
        <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
      </Slide>
    </Deck>
  </Spectacle>
, document.getElementById("root"));
