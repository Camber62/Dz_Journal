import React from "@types/react";

const Favorite = (props) => {


    let copuUser = [].concat(props.propsUsers)
    copuUser.sort((a, b) => (a.name > b.name) ? 1 : -1)

    console.log(copuUser)


    return (
        <>
            {/*{copuUser.map((int, element) => {*/}
            {/*    return (*/}
            {/*        <tr key={element}>*/}
            {/*            <td>{int.name}</td>*/}
            {/*            <td>{int.sername}</td>*/}
            {/*            <td>{int.age}</td>*/}
            {/*        </tr>*/}
            {/*    );*/}
            {/*})}*/}
        </>

    );
};

export default Favorite;
