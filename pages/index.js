import { Container, Box, Button, NextLink, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello I&apos;m a software engineer based in Korea!
            </Box>
            <Box display={{md:'flex'}}>
                
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Damir Zhumatayev
                    </Heading>
                    <p>Digital Craftzman ( Artist / Developer / Designer ) </p>
                </Box>
                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 0}} 
                    ml={{md: 6}}
                    align="center"
                    >
                    <Image 
                        borderColor="whiteAlpha.800"
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px"
                        display="inline-block" 
                        borderRadius="full"
                        src="images/damir.jpg" 
                        alt="Profile Image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Damir is a Junior KAIST student based in Daejeon 
                    with a passion for building digital services/stuff he wants. 
                    He is a young leader who knows how to ignite the spark in others. 
                    Damir is a team player as he takes on board a diverse set of people 
                    to help them realize their potential.
                </Paragraph>
                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/works"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                        >
                        My portfolio
                    </Button>
                </Box>
            </Section>
        </Container>
    )
}

export default Page;