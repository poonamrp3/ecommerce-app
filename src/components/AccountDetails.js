const AccountDetails = ({account}) => {
    return(
        <div className='account-details'>
            <h2>Account Details</h2>
            <p>Name: {account.name}</p>
            <p>Email: {account.email}</p>
        </div>
    );
};

export default AccountDetails;