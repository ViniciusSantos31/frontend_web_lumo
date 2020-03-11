import React from 'react';


import './styles.css'

function UserItem({ user }) {

    return (

        <li hey = {user.id} className="UserItem"  >

            <header>

                <img src = {user.avatarUrl} alt= {user.name} width = "128px" height = "128px"/>

                <div className="UserInfo">

                    <strong>{ user.name }</strong>
                    <span>Email: { user.email }</span> <br/>
                    <span>Telefone: { user.cell }</span> <br/>
                    <span>Id: { user.id }</span>                    

                </div>

            </header>

        </li>
    );
}

export default UserItem;