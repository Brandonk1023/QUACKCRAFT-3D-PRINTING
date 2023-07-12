import { Container } from '@chakra-ui/react'
import SimpleBar from 'simplebar-react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../userProfile/helpers/index'
import Content from './Content'
import Sidebar from './Sidebar/Sidebar'
import Cover from './Cover'

export default function UserProfile() {
    return (
            <ChakraProvider theme={theme}>
                <Cover />
                <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
                    <Sidebar />
                    <Content />
                </Container>
            </ChakraProvider>
    )
}