import React, { useState } from 'react';


function UserForm({ onSubmit }) {

    const [ id, setId ] = useState('');
    const [ name, setName ] = useState('');
    const [ avatarUrl, setAvatarUrl ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ cell, setCell ] = useState('');

    async function handleSubmit(e) {

        e.preventDefault();

        await onSubmit({

            id,
            name,
            avatarUrl,
            email,
            cell,
        });

        setId('');
        setName('');
        setAvatarUrl('');
        setEmail('');
        setCell('');
    }


    return (

        <form onSubmit = { handleSubmit }>

            <div className = "input-block">
                <label htmlFor="name">Nome</label>
                <input
                    name="name"
                    id="name"
                    required
                    value = {name}
                    onChange = {e => setName(e.target.value)} />
            </div>

            <div className = "input-block">
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    required
                    value = {email}
                    onChange = {e => setEmail(e.target.value)} />
            </div>

            <div className = "input-group">
                <div className = "input-block">
                    <label htmlFor="avatarUrl">Link para Foto</label>
                    <input
                        name="avatarUrl"
                        id="avatarUrl"
                        required
                        value = {avatarUrl}
                        onChange = {e => setAvatarUrl(e.target.value)} />
                </div>

                <div className = "input-block">
                    <label htmlFor="cell">Telefone</label>
                    <input
                        name="cell"
                        id="cell"
                        pattern="[0-9]+"
                        title= "Somente Números"
                        required
                        value = {cell}
                        onChange = {e => setCell(e.target.value)} />
                </div>
            </div>

            <button type="submit">CADASTRAR</button>

        </form>
    );
}

export default UserForm;