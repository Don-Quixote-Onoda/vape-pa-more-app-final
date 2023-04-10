import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Link, useForm, usePage } from '@inertiajs/react';

export default function Delete({usersValue, setUsers, user, setDeleteUserDialog, deleteUserDialog, setDeleteUsersDialog, deleteUsersDialog, setSelectedUsers, data, setData, post, reset, processing, errors  }) {

    const users = usePage().props.users;

    let emptyUser = {
        id: null,
        firstname: "",
        lastname: "",
        sex: 0,
        birthdate: null,
        address: "",
        phoneNumber: null,
        email: null,
        role: "",
        password: null,
        confirm_password: null,
        image: null,
    };

    // const [user, setUser] = useState(emptyUser);
    const toast = useRef(null);

    const hideDeleteUserDialog = () => {
        setDeleteUserDialog(false);
    };

    const hideDeleteUsersDialog = () => {
        setDeleteUsersDialog(false);
    };

    const confirmDeleteUser = (user) => {
        setUser(user);
        setDeleteUserDialog(true);
    };

    const deleteUser = () => {
       
        post("api/delete_user", {
            onSuccess: () =>{
                setDeleteUserDialog(false);
                reset()
            },
        });
    };

    const confirmDeleteSelected = () => {
        setDeleteUsersDialog(true);
    };

    const deleteSelectedUsers = () => {
        // let _users = users.filter((val) => !selectedUsers.includes(val));

        // setUsers(_users);
        setDeleteUsersDialog(false);
        setSelectedUsers(null);
        // toast.current.show({
        //     severity: "success",
        //     summary: "Successful",
        //     detail: "Users Deleted",
        //     life: 3000,
        // });
    };


    const deleteUserDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteUserDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteUser}
            />
        </React.Fragment>
    );
    const deleteUsersDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                outlined
                onClick={hideDeleteUsersDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                severity="danger"
                onClick={deleteSelectedUsers}
            />
        </React.Fragment>
    );

    return (
        <div>
            <Dialog
                visible={deleteUserDialog}
                style={{ width: "32rem" }}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteUserDialogFooter}
                onHide={hideDeleteUserDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {user && (
                        <span>
                            Are you sure you want to delete <b>{user.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>
            <Dialog
                visible={deleteUsersDialog}
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm"
                modal
                footer={deleteUsersDialogFooter}
                onHide={hideDeleteUsersDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {user && (
                        <span>
                            Are you sure you want to delete the selected users?
                        </span>
                    )}
                </div>
            </Dialog>
        </div>
    );
}
