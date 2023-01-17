import React from 'react';
import userAvatarBlack from '../Signup/Signup_picture/user.jpg';
import UserForm from './forms/UserForm';
import editUserAvatar from './pictures/edit-user.jpg';

function EditUser() {
  return (
    <div className="flex flex-col justify-start items-center h-full my-5 gap-5">
      <div className="w-5/6">
        <p className="text-center text-red-500 font-semibold text-lg">
          Please fill al the fields with correct and valid details to complete
          your profile.
        </p>
      </div>
      <div className="w-5/6 h-full flex flex-row justify-between">
        <div className="w-2/6 border relative">
          <span className="flex justify-center">
            <img src={userAvatarBlack} alt="userAvatar" className="h-60" />
          </span>
          <button type="button" className="absolute left-56 top-48">
            <img
              src={editUserAvatar}
              alt="editUser"
              className="h-12 border-black border-2 rounded-full"
            />
          </button>
        </div>

        <div className="w-3/6 border">
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default EditUser;
