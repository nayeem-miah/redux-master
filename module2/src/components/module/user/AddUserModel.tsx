import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { addUser } from "@/redux/features/users/userSlice"
import { useAppDispatch } from "@/redux/hooks"
import type { IUser } from "@/types"
import { DialogDescription } from "@radix-ui/react-dialog"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"


export function AddUserModel() {
    const form = useForm();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        dispatch(addUser(data as IUser))
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add User</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add user</DialogTitle>
                </DialogHeader>
                <DialogDescription className="sr-only">
                    Fill up this form
                </DialogDescription>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormLabel> name </FormLabel>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <Input {...field} value={field.value || ""} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <br />
                        <DialogFooter>
                            <Button className="bg-green-300" type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
