import {
  Container,
  Badge,
  List,
  ListItem,
  Link
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="blockbay">
    <Container maxW="container.lg">
      <Title>
        CattyMap <Badge>2023</Badge>
      </Title>
      <P>
        In progress
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Figma, React</span>
        </ListItem>
        
        
        
      </List>

      <Container>
      <WorkImage src="/images/works/cattymap-main.jpg" alt="cattymap picture" />

      </Container>
      
      
      
    </Container>
  </Layout>
)

export default Work
