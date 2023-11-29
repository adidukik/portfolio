import { Container, Box, Button, NextLink, Heading, Image, Link, List, ListItem, useColorModeValue, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { GridItem } from '../components/grid-item'

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
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>  
                <BioSection>
                    <BioYear>2002</BioYear>
                        Born in Kazakhstan.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                        (Start) BSc in Computer Science at&nbsp;
                            <Link href="https://kaist.ac.kr/en" target="_blank">
                                KAIST
                            </Link> 
                        <br />Individually designed major with design and business specialization.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                        Frontend Engineering internship at<br/>
                            <Link href="https://en.narxoz.kz/" target="_blank">
                                Narxoz University
                            </Link>
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                        Junior Frontend Engineer at<br />
                            <Link href="https://iacng.kz/?page_id=3410&lang=en" target="_blank">
                                Information and Analytical Center for Oil and Gas
                            </Link>
                                        </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ❤️
                </Heading>
                <Paragraph>
                    History, Photography, Crypto, Piano.
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/craftzdog" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoGithub />}
                        >
                            @adidukik
                        </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://instagram.com/DAMEEKOH" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoInstagram />}
                        >
                            @dameekoh
                        </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    )
}

export default Page