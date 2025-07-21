import { AddUserModel } from "@/components/module/user/AddUserModel";


const User = () => {

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center gap-5 " >
                <h3 className="text-2xl text-center font-bold">all Users</h3>
                <AddUserModel />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 my-10 gap-5">
                {/* {
                    users.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                        />))
                } */}
            </div>
        </div>
    )
};

export default User