import { Box } from '@chakra-ui/react'
import SidebarActions from '../Sidebar/SidebarActions'


import Data from './Data'
import Profile from './Profile'

function Sidebar() {
    return (
        <Box
        as="aside"
        flex={1.5}
        mr={{ base: 0, md: 5 }}
        mb={{ base: 5, md: 0 }}
        bg="white"
        rounded="md"
        borderWidth={3}
        borderColor="brand.light"
        style={{ transform: 'translateY(-100px)' }}
        >
            <Profile />
            <Data />
            <SidebarActions />
        </Box>
    )
}

export default Sidebar