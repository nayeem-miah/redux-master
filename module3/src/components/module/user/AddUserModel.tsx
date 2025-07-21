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

import { DialogDescription } from "@radix-ui/react-dialog"
import { useState } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { toast } from "sonner"


export function AddUserModel() {
    const form = useForm();

    const [open, setOpen] = useState<boolean>(false)

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        setOpen(false)
        form.reset()
        toast.success("user created success ✅", {
            duration: 3000
        })
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
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
