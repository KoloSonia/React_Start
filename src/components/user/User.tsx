import React, {FC, ReactNode} from 'react';
import IUser from '../../module/IUser';


type UserPropsWithChildren<T> = T & { children?: ReactNode } & {clickHendler:(id:number) =>void};
const User: FC<UserPropsWithChildren<IUser>> = ({id, name, username, email,children,clickHendler}) => {
    return (
        <div>
<h3>{name} ----- {username}</h3>
            <button onClick={()=>{
                clickHendler(id);
            }}> Get ID</button>
        </div>
    );
};

export default User;