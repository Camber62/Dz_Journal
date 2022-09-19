import React, {useState} from 'react';

const Favorite = (props) => {


    let copuUser = [].concat(props.propsUsers)
    copuUser.sort((a, b) => (a.name > b.name) ? 1 : -1)

    console.log(copuUser)


    return (
        <div className='containerFavorite'>
            <th>Name</th>
            <th>Sername</th>
            <th>Age</th>
            {copuUser.map((int, element) => {
                return (
                    <tr key={element}>
                        <td style={{color : 'red'}}>{int.name}</td>
                        <td>{int.sername}</td>
                        <td>{int.age}</td>
                    </tr>
                );
            })}
        </div>

    );
};

export default Favorite;
