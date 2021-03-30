import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-json-server";
import PostList from "./components/PostList.js";
import PostCreate from "./components/PostCreate.js";
import PostEdit from "./components/PostEdit.js";
import UserList from "./components/UserList.js";
import UserCreate from "./components/UserCreate.js";
import UserEdit from "./components/UserEdit.js";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from "./components/Dashboard.js";

function App() {
    return (
        <Admin dashboard={Dashboard} dataProvider={restProvider("http://localhost:3000")}>
            <Resource
                name="posts"
                list={PostList}
                create={PostCreate}
                edit={PostEdit}
                icon={PostIcon}
            />
            <Resource
                name="users"
                list={UserList}
                create={UserCreate}
                edit={UserEdit}
                icon={UserIcon}
            />
        </Admin>
    );
}

export default App;
