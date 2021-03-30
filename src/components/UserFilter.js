import React from 'react'
import {Filter,  ReferenceInput, SelectInput, TextInput, List } from "react-admin"
function UserFilter(props) {
    return (
        <Filter {...props}>
            <TextInput label="search" source="search" alwaysOn />
            <ReferenceInput label="user" source="id" reference="users" allowEmpty>
                <SelectInput optionText="name" />
            </ReferenceInput>
        </Filter>
    )
}

export default UserFilter
