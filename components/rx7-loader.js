import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const RX7Spinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const RX7Container = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="rx7"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 600, 800]}
    h={[280, 600, 800]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <RX7Container>
      <RX7Spinner />
    </RX7Container>
  )
}

export default Loader