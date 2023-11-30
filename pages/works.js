import { Box, Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbIacng from '../public/images/works/iacng.jpg'
import thumbBlockbay from '../public/images/works/blockbay-main.jpg'
import thumbNarxoz from '../public/images/works/narxoz-main.png'
import thumbCattymap from '../public/images/works/cattymap-main.jpg'
import thumbDoodle from '../public/images/works/doodle-main.png'

const workItems = [
  {
    id: 'iacng',
    title: 'Dashboard for IACNG',
    thumbnail: thumbIacng,
    description: 'Pilot Dashboard for Oil & Gas Analytics company',
  },
  {
    id: 'doodle',
    title: 'Doodle Jump with Face Control',
    thumbnail:thumbDoodle,
    description: 'a platformer with jumping as high as possible',
  },
  {
    id: 'blockbay',
    title:'BlockBay',
    thumbnail: thumbBlockbay,
    description:'Decentralized trustworthy luxury second-hand market',
  },
  {
    id: 'cattymap',
    title:'CattyMap',
    thumbnail: thumbCattymap,
    description:'Map-based social media platform for cat-lovers at KAIST',
  },
  {
    id: 'narxoz',
    title: 'Narxoz University website',
    thumbnail: thumbNarxoz,
    description: 'Main public website for Narxoz University (Top 5 Kazakhstan)',
  }
]

const Works = () => (
  <Layout title="works">
    <Container maxW="container.xl">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <Box padding={4} w="100%" maxW="900px" mx="auto" sx={{ columnCount: [1, 2, 3], columnGap: '20px' }}>
        {workItems.map((item) => (
          <Section key={item.id} delay={0.1} h="auto" my="6px" sx={{ display: 'inline-block', width: '100%', breakInside: 'avoid' }}>
            <WorkGridItem id={item.id} title={item.title} thumbnail={item.thumbnail}>
              {item.description}
            </WorkGridItem>
          </Section>
        ))}
      </Box>
    </Container>
  </Layout>
)

export default Works