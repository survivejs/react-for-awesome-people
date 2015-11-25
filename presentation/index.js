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

const images = {
  javascript: require("assets/javascript.jpg"),
  javascript2: require("assets/javascript2.jpg"),
  logo: require("assets/logo.png"),
  kanban: require("assets/kanban.gif"),
};

preloader([images.javascript, images.javascript2, images.logo]);

render(
  <Spectacle>
    <Deck transition={["zoom", "slide"]} transitionDuration={500}>
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          How to write a book and
        </Heading>
        <Heading size={1} fit>
          SurviveJS it
        </Heading>
      </Slide>

      <Slide transition={["slide"]} bgColor="black" notes="">
        <Image src={images.javascript.replace("/", "")} margin="0px auto 40px" height="650px"/>
      </Slide>

      <Slide transition={["slide"]} bgColor="black" notes="">
        <Image src={images.javascript2.replace("/", "")} margin="0px auto 40px" height="650px"/>
      </Slide>

      <Slide transition={["slide"]} bgColor="white" notes="">
        <Image src={images.logo.replace("/", "")} margin="0px auto 40px" height="566px"/>
      </Slide>

      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          SurviveJS
        </Heading>
        <Heading size={1} fit>
          Webpack and React
        </Heading>
      </Slide>

      <Slide transition={["slide"]} bgColor="black" notes="">
        <Image src={images.kanban.replace("/", "")} margin="0px auto 40px" height="279px"/>
      </Slide>

      <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
        <CodePane
          lang="jsx"
          source={require("raw!assets/deck.example")}
          margin="20px auto"
        />
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
