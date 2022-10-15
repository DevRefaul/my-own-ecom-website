export const Statistics = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div>
        <h2 className="text-4xl  font-bold text-center">
          Stats about our Company
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mt-16">
          <div className="text-center">
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              144K+
            </h6>
            <p className="font-bold">Products Sold</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              100K+
            </h6>
            <p className="font-bold">Users</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              100+
            </h6>
            <p className="font-bold">Developers</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              2K+
            </h6>
            <p className="font-bold">Customers Support Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};
