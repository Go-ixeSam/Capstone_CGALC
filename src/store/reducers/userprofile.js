import * as actionTypes from '../../store/actions';

const initialState = {
    account: {
        username: 'Samnk',
        full_name: 'Nguyen Khac Sam',
        photo: '',
        email: 'samxx@gmail',
        gender: 'male',
        address: 'lê văn sĩ',
        city: 'HCM',
        is_active: true,
    },
    accounts: []

}

const userprofile = (state = initialState.accounts, action) => {

    // const newAccount = { ...state };
    console.log(action.type);
    switch (action.type) {
        case actionTypes.ADD:
            alert('Đây là hàng mới: ' + action.fullname + 'username: ' + action.username);
            console.log(action.fullname);
            // return {
            //     ...newAccount,
            //     full_name: action.fullname,
            //     username: action.username,
            //     address: action.address,
            //     city: action.city,
            //     gender: action.gender,
            //     email: action.mail
            // };
            // alert('Đây là hàng mới: '+action.fullname+'username: '+action.username);
            console.log(action.fullname);
            return [...state,
            {
                full_name: action.fullname,
                username: action.username,
                address: action.address,
                city: action.city,
                gender: action.gender,
                email: action.mail
            }];
        default:
            console.log('vào defaul rồi ông ơi');
            return state;
    }

};
// const addArray=()=>{
//     const newArray=[...this.state.account];
//     newArray.concat(this.state.account);
//     return this.accounts=[...newArray];
// }
export default userprofile;