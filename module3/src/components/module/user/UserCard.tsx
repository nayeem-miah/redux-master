import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { removeUser } from "@/redux/features/users/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
    user: IUser
}

function UserCard({ user }: IProps) {
    const dispatch = useAppDispatch()
    return (
        <div>
            <Card className="shadow-md hover:shadow-xl transition">
                <CardContent className="p-4 space-y-3">
                    <div className="flex justify-between mt-4">
                        <h3 className="text-2xl font-bold">
                            {user?.name}
                        </h3>

                        <Button
                            onClick={() => { dispatch(removeUser(user.id)) }}
                            variant="destructive"
                        >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default UserCard