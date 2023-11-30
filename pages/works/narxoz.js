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
  <Layout title="narxoz">
    <Container maxW="container.lg">
      <Title>
        Narxoz University Website <Badge>2021</Badge>
      </Title>
      <P><Link href="https://en.narxoz.kz/" target="_blank">
                                Narxoz University
                            </Link> is a higher education institution in Kazakhstan providing training in economics, business, finance, and law, located in the city of Almaty. It is considered as Top 5 overall in Kazakhstan.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tools</Meta>
          <span>React, TypeScript</span>
        </ListItem>
      </List>

      <Container maxW="container.md">
        
      <WorkImage src="/images/works/narxoz-main.png" alt="digfor" />
      </Container>
    </Container>
  </Layout>
)

export default Work
