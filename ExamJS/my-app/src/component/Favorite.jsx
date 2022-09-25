import React from "react";

const Favorite = (props) => {


    let copuUser = [].concat(props.propsUsers)
    copuUser.sort((a, b) => (a.rating > b.rating) ? -1 : 1)

    console.log(copuUser)


    return (
        <div className='containerFavorite'>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Rating</th>
            {copuUser.map((int, element) => {
                return (
                    <tr key={element}>
                        <td >{int.name}</td>
                        <td>{int.sername}</td>
                        <td>{int.age}</td>
                        <td style={{background : 'rgba(87,143,46,0.28)  '}}>{int.rating}</td>
                    </tr>
                );
            })}
        </div>

    );
};

export default Favorite;
