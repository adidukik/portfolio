import {
    Container,
    Badge,
    List,
    ListItem,
    
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, WorkImage, Meta } from '../../components/work'
  import thumbDoodle from '../../public/images/works/doodle-main.png'

  const Work = () => (
    <Layout title="doodle">
      <Container maxW="container.lg">
        <Title> Doodle Jump control with Face Control
         <Badge>2023</Badge>
        </Title>
          <WorkImage src="/images/works/doodle-main.png" alt="Pilot dashboard picture" />

          <br />
          email: dameekoh@kaist.ac.kr
          <br />
          source code: <a href="https://github.com/dameekoh/doodle311">https://github.com/dameekoh/doodle311</a>
          <br />
          video: <a href="https://youtu.be/fGbONT0qzRQ">https://youtu.be/fGbONT0qzRQ</a> 
          <br />
          try: <a href="https://doodle311.netlify.app">https://doodle311.netlify.app</a>
          <br />
          <br />
          <ul>
          <li>A description of the game - how it works and what the user has to do</li>
          </ul>
          <p>The game is a platformer where the player controls a ball and tries to jump on platforms to reach higher levels. </p>
          <ul>
          <br />
          <li>Goal: to keep climbing as high as possible without falling off the screen or touching a black hole. </li>
          </ul>
          <p>The player can perform regular jumps and interact with different types of platforms that provide various effects, such as fragile platforms that break upon landing and spring platforms that give an extra boost. The game <strong>continues until the player falls off the screen </strong> or touches a black hole, at which point they can restart the game by pressing the space bar.</p>
          <br />
          <p><i>Most of the computer games are programmed in OOP. I decided to challenge myself with functional style.</i></p>
          <br />
          <p>The code is divided into several files: blackhole.js, player.js, platform.js and sketch.js. The canvas is rendered and updated on sketch.js file.</p>
      </Container>
     
  </Layout>
)

export default Work