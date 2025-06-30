import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-8 px-4 text-center sm:my-10">
      <h1 className="mb-6 text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
