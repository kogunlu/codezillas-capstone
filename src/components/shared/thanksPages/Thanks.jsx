import React from 'react';
import BackToHome from '../backToHomeButton/BackToHome';

function Thanks({
  text = 'Your email has been added to the mailing list successfully!',
}) {
  return (
    <div className="p-10 h-72 md:h-64">
      <div className="h-full w-full flex flex-col justify-between">
        <h2 className="text-4xl font-medium">THANK YOU!</h2>

        <p className="text-gray-400 text-lg font-medium">{text}</p>

        <div className="w-4/6 md:w-3/6 xl:w-2/6">
          <BackToHome />
        </div>
      </div>
    </div>
  );
}

export default Thanks;
