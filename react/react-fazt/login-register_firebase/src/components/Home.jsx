import { useAuth } from "../context/authContext";

export function Home() {
  const { user, logOut, loading } = useAuth();

  console.log(user);

  const handelLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        Home
        {user && (
          <div>
            <h1 className="text-xl mb-4 ">
              Welcome {user.displayName || user.email}
            </h1>

            <button 
              onClick={handelLogOut}
              className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4"
            >
              LogOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
