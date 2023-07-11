import { Container } from '@chakra-ui/react'
import Content from './Content'
import Sidebar from './Sidebar/Sidebar'

export default function UserProfile() {
    return (
        <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
            <Sidebar />
            <Content />
        </Container>
    )
}