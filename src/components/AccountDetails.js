const AccountDetails = ({username}) => {
    return(
        <div className='account-details'>
            <h2>Account Details</h2>
            <p>Name: {username}</p>
        </div>
    );
};

export default AccountDetails;