const AccountSetting = () => {
  return (
    <div className="container px-6 md:px-0 xl:px-20 mx-auto grid items-center gap-14">
      <div className="flex justify-center">
        <div className="w-2/5">
          <h1 className="text-center text-xl font-semibold mb-10 underline">
            User Profile
          </h1>
          <div>
            <label>Name: </label>
            <input type="text" placeholder={"Nama User"} disabled />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" placeholder={"Email User"} disabled />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-2/5">
          <h1 className="text-center text-xl font-semibold mb-10 underline">
            Destinations' Reviews
          </h1>
          <div>
            <label>Name: </label>
            <input type="text" placeholder={"Nama User"} disabled />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" placeholder={"Email User"} disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
