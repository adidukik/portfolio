import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello I&apos;m a software engineer based in Korea!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Damir Zhumatayev
                    </Heading>
                    <p>Korea Advanced Institute of Science and Technology</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page;