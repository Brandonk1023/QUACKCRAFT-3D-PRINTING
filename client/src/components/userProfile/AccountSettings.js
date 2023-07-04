import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'

function AccountSettings() {
    return (
        <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
        >
            <FormControl id="firstName">
                <FormLabel>First Name</FormLabel>
                <Input focusBorderControl="brand.blue" type="text" placeholder="Daffy" />
            </FormControl>
            <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input focusBorderControl="brand.blue" type="text" placeholder="Duck" />
            </FormControl>
            <FormControl id="userName">
                <FormLabel>Username</FormLabel>
                <Input 
                    focusBorderControl="brand.blue" 
                    type="username" 
                    placeholder="what should we call you?" 
                    />
            </FormControl>
            <FormControl id="emailAddress">
                <FormLabel>Email Address</FormLabel>
                <Input 
                    focusBorderControl="brand.blue" 
                    type="email" 
                    placeholder="yourname@example.com" 
                    />
            </FormControl>

            <FormControl id="city">
                <FormLabel>City</FormLabel>
                <Input 
                    focusBorderControl="brand.blue" 
                    type="city" 
                    placeholder="what's your city?" 
                    />
            </FormControl>
            {/* <FormControl id="city">
                <FormLabel>City</FormLabel>
                <select focusBorderControl="brand.blue" placeholder="Select City" >
                    <option value="select" selected>
                        Select
                    </option>
                    <option value="texas">Texas</option>
                    <option value="california">California</option>
                    <option value="newyork">New York</option>
                    <option value="florida">Florida</option>
                    <option value="georgia">Georgia</option>
                    <option value="hawaii">Hawaii</option>
                    <option value="arizona">Arizona</option>
                    <option value="lasvegas">Las Vegas</option>              
                </select>
            </FormControl> */}
            <FormControl id="country">
                <FormLabel>Country</FormLabel>
                <select focusBorderControl="brand.blue" placeholder="Select Country">
                <option value="unitedstates" selected>
                        Unites States
                    </option>
                    <option value="unitedkingdom">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="france">France</option>
                    <option value="japan">Japan</option>
                    <option value="italy">Italy</option>
                    <option value="australia">Australia</option>
                    <option value="china">China</option>
                    <option value="india">India</option>
                    <option value="spain">Spain</option>
                    <option value="germany">Germany</option>
                    <option value="switzerland">Switzerland</option>
                    <option value="thailand">Thailand</option>
                    <option value="denmark">Denmark</option>
                    <option value="finland">Finland</option>
                    <option value="austria">Austria</option>
                    <option value="singapore">Singapore</option>
                    <option value="norway">Norway</option>
                    <option value="newzealand">New Zealand</option>
                    <option value="luxemborg">Luxemborg</option>
                    <option value="sweden">Sweden</option>
                    <option value="netherlands">Netherlands</option>
                    <option value="iceland">Iceland</option>
                    <option value="israel">Israel</option>
                    <option value="hongkong">Hong Kong</option>
                    <option value="unitedarabemirates">United Arab Emirates</option>
                </select>
            </FormControl>
        </Grid>
    )
}

export default AccountSettings