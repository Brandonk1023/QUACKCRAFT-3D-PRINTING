import { Container } from '@chakra-ui/react'
import Content from './Content'
import Sidebar from '../userProfile/Sidebar/Sidebar'

export default function Main() {
    return (
        <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
            <Sidebar />
            <Content />
        </Container>
    )
}