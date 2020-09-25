import React from 'react';
const Usertr = account => {
    return (
        <tr onClick={account.click}>
            <td>{account.username}</td>
            <td>{account.fullname}</td>
        </tr>
    );
}
export default Usertr;