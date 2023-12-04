//first we need to make sure the account is
//for the authenticated use

//we must also display the array of books
//a user has checked out

import { AuthData } from "../../auth/AuthWrapper";

export const Account = () => {
  const { user } = AuthData();
  //now we save the Username as what is input
  return (
    <div className="page">
      <h2>Your Account</h2>
      <p>Username: {user.name}</p>
    </div>
  );
};
