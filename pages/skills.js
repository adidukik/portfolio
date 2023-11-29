import { Heading ,List,
    ListItem,Button,Icon, Container, Box, useColorModeValue, Link} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
     IoHardwareChip, IoBook, IoCodeSharp ,  IoLogoPython, IoLogoWindows, IoLogoApple, IoLogoJavascript, IoTerminal, IoLogoAndroid, IoLogoReact, IoLogoAmazon, IoLogoNodejs
  } from 'react-icons/io5'



const Skills = () => (
  <Layout title="skills">
    <Container maxW="container.xl">
      
    <Heading as="h3" variant="section-title">
          Skills
    </Heading>

    <Box
        borderRadius="lg"
        mt={6}
        mb={6}
        
        p={3}
        align="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Below is a list of technologies I'm experienced with
      </Box>


    <Heading as="h5" variant="section-title">
        Programming
    </Heading>


    <List>

    <ListItem>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoJavascript} />}
              >
                JavaScript
    </Button>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoReact} />}
              >
                React
    </Button>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoAmazon} />}
              >
                AWS
    </Button>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoNodejs} />}
              >
                Node.js
    </Button>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoCodeSharp} />}
              >
                Java
    </Button>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoCodeSharp} />}
              >
                SQL
    </Button>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoLogoPython} />}
              >
                Python
    </Button>
    <Button
                variant="ghost"
                leftIcon={<Icon as={IoTerminal} />}
              >
                Linux
    </Button>
    
    </ListItem>
        
    </List>

    <Heading as="h5" variant="section-title">
          Notable Coursework
        </Heading>

    <Section>

    <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Interactive Software Design
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Introduction to Data Science
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Introduction to Human-Computer Interaction
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Introduction to Database
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Programming Principles
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
               Introduction to Algorithms
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Data Structures
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Future High-Tech Product Development
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Software Prototyping
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Machine Learning
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Software Prototyping
              </Button>
              <Button
                variant="ghost"
                leftIcon={<Icon as={IoBook} />}
              >
                Introduction to MIS
              </Button>



    </Section>

      </Container>
      </Layout>
)
export default Skills