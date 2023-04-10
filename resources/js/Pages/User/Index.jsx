import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
import Table from "./Components/Table";
import FormDialog from "./Components/FormDialog";
import Delete from "./Components/Delete";
import { useForm } from "@inertiajs/react";

export default function Users(props) {

    let emptyUser = {
        id: null,
        firstname: "",
        lastname: "",
        sex: null,
        birthdate: null,
        address: "",
        phone_number: null,
        email: null,
        role: "",
        password: null,
        confirm_password: null,
        image: null,
    };

    const [userDialog, setUserDialog] = useState(false);
    const [deleteUserDialog, setDeleteUserDialog] = useState(false);
    const [deleteUsersDialog, setDeleteUsersDialog] = useState(false);
    const [user, setUser] = useState(emptyUser);
    const [selectedUsers, setSelectedUsers] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const toast = useRef(null);
    const { data, setData, post, reset, processing, errors } = useForm({
        id: null,
        firstname: "",
        lastname: "",
        sex: null,
        birthdate: null,
        address: "",
        phoneNumber: null,
        email: null,
        role: "",
        password: null,
        confirm_password: null,
        image: null,
    });

    const openNew = () => {
        setUser(emptyUser);
        setSubmitted(false);
        setUserDialog(true);
    };

    const editUser = (user) => {
        setData({ ...user });
        setUserDialog(true);
    };

    const confirmDeleteUser = (user) => {
        setData({ ...user });
        setDeleteUserDialog(true);
    };

    const confirmDeleteSelected = () => {
        setDeleteUsersDialog(true);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 classNameName="font-semibold text-xl text-gray-800 leading-tight">
                    Users
                </h2>
            }
        >
            <div className="container px-6 mx-auto grid">
                <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                    Users
                </h2>
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto card">
                        <Toast ref={toast} />
                        <div className="card">
                            <Table  openNew={openNew}  editUser={editUser} confirmDeleteUser={confirmDeleteUser} setSelectedUsers={setSelectedUsers} selectedUsers={selectedUsers} />
                        </div>
                        <FormDialog user={user} data={data} reset={reset} setData={setData} post={post} errors={errors}  submitted={submitted} userDialog={userDialog} setSubmitted={setSubmitted} setUserDialog={setUserDialog} />

                        <Delete user={user} data={data} reset={reset} setData={setData} post={post} errors={errors} deleteUsersDialog={deleteUsersDialog} setSelectedUsers={setSelectedUsers} selectedUsers={selectedUsers} setDeleteUsersDialog={setDeleteUsersDialog} setDeleteUserDialog={setDeleteUserDialog} deleteUserDialog ={deleteUserDialog } />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
