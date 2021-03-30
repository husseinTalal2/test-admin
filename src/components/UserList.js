import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    EmailField,
    ReferenceField,
} from "react-admin";
import UserFilter from "./UserFilter";
function UserList(props) {
    return (
        <List filters={<UserFilter/>} {...props}>
            <Datagrid>
                <ReferenceField source="id" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <EmailField source="email" />
                <EditButton basePath="/users" />
                <DeleteButton basePath="/users" />
            </Datagrid>
        </List>
    );
}

export default UserList;
