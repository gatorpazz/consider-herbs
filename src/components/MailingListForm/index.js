import React from 'react';

const MailingListForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    // <div className="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
    <div className="px-2 -mt-6">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl text-grey-800 font-bold leading-loose my-3 w-full">Join our Mailing List!</h1>
        <div className="w-full text-center">
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && (
            <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />
          )}
          {status === "success" && (
            <div style={{ color: "green" }} dangerouslySetInnerHTML={{ __html: message }} />
          )}
          <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
            <input type="email" ref={node => (email = node)} placeholder="email@example.com"
              className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none" />
            <button onClick={submit} type="submit" className="bg-green-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-green-600 p-3">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default MailingListForm;