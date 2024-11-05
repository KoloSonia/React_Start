import React, {FC, useEffect, useState} from 'react';
import './App.css';
import IUser from './module/IUser';
import User from './components/user/User';
import {getUsers} from "./services/user.api.services";

const App: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {

        getUsers()
        .then(value => {
            setUsers(value);
        })
        return () => {
            console.log('end');
        }
    }, []);

    const [userId, setUserId] = useState<number>(0);

    const clickHendler = (id: number) => {
        setUserId(id);
        console.log(id);

    }

    return (
        <>
            <div>
                {
                    users.map(({name, id, email, username}, index) =>


                        <User
                            key={index}
                            name={name}
                            email={email}
                            id={id}
                            username={username}
                            clickHendler={clickHendler}
                        />
                    )
                }
            </div>
            <h2>{userId}</h2>
        </>
    );
}

export default App;
