import { AddUserModel } from "@/components/module/user/AddUserModel";
import { useAppDispatch } from "@/redux/hooks";

const User = () => {
    const dispatch = useAppDispatch();
    console.log(dispatch);
    return (
        <div>
            <div className="flex justify-between items-center gap-5" >
                <h3 className="text-2xl text-center font-bold">all Users</h3>
                <AddUserModel />
            </div>
        </div>
    )
};

export default User