import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="incident_response">
    <Container maxW="container.lg">
      <Title>
        Dashboard for IACNG <Badge>2023</Badge>
      </Title>
      <P>
        This dashboard was developed during my summer internship at IACNG.
        It analyzes in real time various metrics for oil and gas.
        The map is interactive and the dispatcher can extract automatically generated reports from AI chat

      </P>
      <List ml={4} my={4}>
        
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, PrimeReact, Bootstrap, Redux, PyTorch (for AI Chat)</span>
        </ListItem>
        
      </List>
       
      <Container maxW="container.md">

      <WorkImage src="/images/works/iacng.jpg" alt="Pilot dashboard picture" />

      </Container>
        
        
      
      
    </Container>
  </Layout>
)

export default Work
