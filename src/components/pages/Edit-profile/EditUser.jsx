import React from 'react';
import Footer from '../../shared/footer/Footer';
import userAvatarBlack from '../Signup/Signup_picture/user.jpg';
import UserForm from './forms/UserForm';
import editUserAvatar from './pictures/edit-user.jpg';

function EditUser() {
  return (
    <>
      <div className="flex flex-col justify-start items-center h-full my-5 gap-5">
        <div className="w-5/6">
          <p className="text-center text-red-500 font-semibold text-lg">
            Please fill al the fields with correct and valid details to complete
            your profile.
          </p>
        </div>
        <div className="w-5/6 h-full flex flex-col justify-center items-center gap-5 lg:flex-row lg:justify-between lg:items-start lg:gap-0">
          <div className="w-2/6 h-full">
            <span className="flex justify-center ">
              <img
                src={userAvatarBlack}
                alt="userAvatar"
                className="h-60 xl:h-80 -z-10 "
              />
            </span>
            <button
              type="button"
              className="z-20 -mt-10 w-full flex justify-center"
            >
              <img
                src={editUserAvatar}
                alt="editUser"
                className="h-12 border-black border-2 rounded-full"
              />
            </button>
          </div>

          <div className="w-full lg:w-3/6 ">
            <UserForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default EditUser;
