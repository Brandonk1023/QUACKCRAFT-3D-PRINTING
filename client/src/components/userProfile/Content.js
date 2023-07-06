import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'



import AccountSettings from './AccountSettings'
import Actions from './Actions'
import Notifications from './Notifications'

const Content = () => {
    const tabs = ['Account Settings', 'Notifications']

    return (
        <Box
            as="main"
            flex={3}
            d="flex"
            flexDir="column"
            justifyContent="space-between"
            pt={5}
            bg="white"
            // bgImage="linear-gradient(79deg, #173e43, #3fb0ac, #fae596, #dddfd4"
            rounded="md"
            borderWidth={3}
            borderColor="gray.200"
            style={{ transform: 'translateY(-100px)' }}
        >
            <Tabs>
                <TabList px={5}>
                    {tabs.map(tab => (
                        <Tab
                            key={tab}
                            mx={3}
                            px={0}
                            py={3}
                            fontWeight="semibold"
                            color="brand.cadet"
                            borderBottomWidth={1}
                            _active={{ bg: 'transparent' }}
                            _selected={{ color: 'brand.dark', borderColor: 'brand.yellow' }}
                        >
                            {tab}
                        </Tab>
                    ))}
                </TabList>

                <TabPanels px={3} mt={5}>
                    <TabPanel>
                        <AccountSettings />
                    </TabPanel>
                    <TabPanel>
                        <Notifications />
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Actions />
        </Box>
    )
}

export default Content
