import React, { useEffect, useState } from 'react';
import api from './services/api';
import LinearProgress from '@material-ui/core/LinearProgress';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import UserForm from './components/UserForm';
import UserItem from './components/UserItem';


function App() {

    const [ users, setUsers] = useState([]);
    var [search, setSearch] = useState("");

    const handleChange = e => {
        setSearch(e.target.value);
    };

    

    useEffect(() => {
        

        async function loadUsers(){
                
            const response = await api.get(`/users?q=${search}`);
            setUsers(response.data);

        }

        loadUsers();

    }, [search]);


    async function handleAddUser(data) {

        const response = await api.post('/users', data);
        setUsers([...users.reverse(), response.data]);
        

    };


    return (

        <div id="app">            

            <aside>

                <strong>Pesquisar User</strong>


                <form>

                    <div className = "input-block">
                        <label htmlFor="name">Pesquisar</label>
                        <input
                            name="search"
                            id="search"
                            value = {search}
                            onChange = {handleChange}
                            autocomplete = "off"
                            required />
                        
                    </div>
                    <LinearProgress />

                    
                </form>

                <hr />
                <strong>Cadastrar User</strong>

                <UserForm onSubmit = { handleAddUser }/>


            </aside>
            <main>

                <ul>
                
                    {users.reverse().map(user => (
                        <UserItem key = {user.id} user={user}/>
                    ))}


                </ul>

            </main>


        </div>
    )
}

export default App;
