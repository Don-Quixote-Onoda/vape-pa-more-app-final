import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";


export default function FormDialog({userDialog, setSubmitted, setUserDialog, submitted, user, data, setData, post, reset, processing, errors}) {

    const toast = useRef(null);
    const roles = [{ name: "Administrator" }, { name: "Employee" }];

    const hideDialog = () => {
        setSubmitted(false);
        setUserDialog(false);
        setData(user);
    };

    const onCategoryChange = (e) => {
        setData('sex',e.value);
    };

    const saveUser = () => {
        setSubmitted(true);

        if (
            data.image &&
            data.firstname.trim() &&
            data.lastname.trim() &&
            data.sex &&
            data.birthdate &&
            data.address &&
            data.role &&
            data.phone_number &&
            data.email &&
            data.confirm_password
        ) {
            if (user.id) {
                const index = findIndexById(user.id);

                _users[index] = _user;
                toast.current.show({
                    severity: "success",
                    summary: "Successful",
                    detail: "Product Updated",
                    life: 3000,
                });
            } else {
                console.log(data);
                post(route('saveUser'), {
                    forceFormData: true,
                    onSuccess: () =>{
                        setUserDialog(false);
                        setData(user);
                        reset();
                        toast.current.show({
                            severity: "success",
                            summary: "Successful",
                            detail: "Product Created",
                            life: 3000,
                        });
                    },
                    onError: () => {
                    },
                });
                
            }
        }

        if (
            data.firstname.trim() &&
            data.lastname.trim() &&
            data.sex &&
            data.birthdate &&
            data.address &&
            data.role &&
            data.phone_number &&
            data.email &&
            data.id
        ) {
           
                post(route('updateUser'), {
                    forceFormData: true,
                    onSuccess: () =>{
                        setUserDialog(false);
                        setData(user);
                    },
                    onError: () => {
                        console.log(errors);
                    },
                });
                
        }
    };

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const userDialogFooter = (
        <React.Fragment>
            <Button
                label="Cancel"
                icon="pi pi-times"
                outlined
                onClick={hideDialog}
            />
            <Button label="Save" icon="pi pi-check" onClick={saveUser} />
        </React.Fragment>
    );

    const onRoleChange = (e, name) => {
        const val = (e.target && e.target.value) || "";
        setData(name,val.name);
    };

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        setData(name,val);

    };

    const handleFileUpload = (e, name) => {
        const val = (e.target.files[0]) || "";
        setData(name,val);

    };


    const confirmPassword = (e, name) => {
        const val = (e.target && e.target.value) || "";
        let _user = { ...user };

        if (data.password == val) {
            setData(name,val);
        }

        
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || "";
        setData(name,val);

    };

    return (
        <Dialog
            visible={userDialog}
            style={{ width: "32rem" }}
            breakpoints={{ "960px": "75vw", "641px": "90vw" }}
            header="User Details"
            modal
            className="p-fluid"
            footer={userDialogFooter}
            onHide={hideDialog}
        >
            <div className="field">
                <label className="">User Image</label>
                <input
                    type="file"
                    className={`w-full px-4 py-2 ${classNames({
                        "p-invalid": submitted && !data.image,
                    })}`}
                    label="Image"
                    name="image"
                    onChange={(e) => handleFileUpload(e, "image")}
                />
                {submitted && !data.image && (
                    <small className="p-error">User Image is required.</small>
                )}
            </div>
            <div className="field">
                <label htmlFor="firstname" className="font-bold">
                    First Name
                </label>
                <InputText
                    id="firstname"
                    value={data.firstname}
                    onChange={(e) => onInputChange(e, "firstname")}
                    required
                    autoFocus
                    className={classNames({
                        "p-invalid": submitted && !data.firstname,
                    })}
                />
                {submitted && !data.firstname && (
                    <small className="p-error">First Name is required.</small>
                )}
            </div>
            <div className="field">
                <label htmlFor="lastname" className="font-bold">
                    Last Name
                </label>
                <InputText
                    id="lastname"
                    value={data.lastname}
                    onChange={(e) => onInputChange(e, "lastname")}
                    required
                    autoFocus
                    className={classNames({
                        "p-invalid": submitted && !data.lastname,
                    })}
                />
                {submitted && !data.lastname && (
                    <small className="p-error">Last Name is required.</small>
                )}
            </div>
            <div className="field mb-5">
                <label className="mb-3 font-bold">Sex</label>
                <div className="flex gap-2">
                <div className="field-radiobutton col-6">
                    <RadioButton
                        inputId="sex1"
                        name="sex"
                        value="Male"
                        onChange={onCategoryChange}
                        checked={data.sex === "Male"}
                        className={classNames({
                            "p-invalid": submitted && !data.sex,
                        })}
                    />
                    <label htmlFor="sex1" className="ml-1">
                        Male
                    </label>
                </div>
                <div className="field-radiobutton col-6">
                    <RadioButton
                        inputId="sex2"
                        name="sex"
                        value="Female"
                        onChange={onCategoryChange}
                        checked={data.sex === "Female"}
                        className={classNames({
                            "p-invalid": submitted && !data.sex,
                        })}
                    />
                    <label htmlFor="sex2" className="ml-1">
                        Female
                    </label>
                </div>
                </div>
                {submitted && !data.sex && (
                    <small className="p-error">Sex is required.</small>
                )}
            </div>
            <div className="field mb-5">
                <label htmlFor="last" className="font-bold">
                    Birthdate
                </label>
                <Calendar
                    id="last"
                    value={new Date(data.birthdate)}
                    onChange={(e) => onInputChange(e, "birthdate")}
                    className={classNames({
                        "p-invalid": submitted && !data.birthdate,
                    })}
                />
                {submitted && !data.birthdate && (
                    <small className="p-error">Birthdate is required.</small>
                )}
            </div>

            <div className="field mb-5">
                <label htmlFor="address" className="font-bold">
                    Address
                </label>
                <InputText
                    id="address"
                    value={data.address}
                    onChange={(e) => onInputChange(e, "address")}
                    required
                    autoFocus
                    className={classNames({
                        "p-invalid": submitted && !data.address,
                    })}
                />
                {submitted && !data.address && (
                    <small className="p-error">Address is required.</small>
                )}
            </div>

            <div className="field mb-5">
                <label htmlFor="email" className="font-bold">
                    Role
                </label>
                <Dropdown
                    value={data.role}
                    onChange={(e) => onRoleChange(e, "role")}
                    options={roles}
                    optionLabel="name"
                    editable
                    placeholder="Select a City"
                    className={`w-full md:w-14rem ${classNames({
                        "p-invalid": submitted && !data.address,
                    })} `}
                />
                {submitted && !data.sex && (
                    <small className="p-error">Role is required.</small>
                )}
            </div>
            <div className="field mb-5">
                <label htmlFor="phone_number" className="font-bold">
                    Phone Number
                </label>
                <InputNumber
                    id="phone_number"
                    value={data.phone_number}
                    onChange={(e) => onInputNumberChange(e, "phone_number")}
                    useGrouping={false}
                    required
                    autoFocus
                    className={classNames({
                        "p-invalid": submitted && !data.phone_number,
                    })}
                />
                {submitted && !data.phone_number && (
                    <small className="p-error">Phone Number is required.</small>
                )}
            </div>
            <div className="field mb-5">
                <label htmlFor="email" className="font-bold">
                    Email Address
                </label>
                <InputText
                    id="email"
                    value={data.email}
                    onChange={(e) => onInputChange(e, "email")}
                    required
                    autoFocus
                    className={classNames({
                        "p-invalid": submitted && !data.email,
                    })}
                />
                {submitted && !data.email && (
                    <small className="p-error">
                        Email Address is required.
                    </small>
                )}
            </div>

            <div className="field mb-5">
                <label htmlFor="password" className="font-bold">
                    Password
                </label>
                <InputText
                    id="password"
                    value={data.password}
                    onChange={(e) => onInputChange(e, "password")}
                    required
                    autoFocus
                    className={classNames({
                        "p-invalid": submitted && !data.password && !data.id,
                    })}
                />
                {submitted && !data.password && !data.id && (
                    <small className="p-error">Password is required.</small>
                )}
            </div>

            <div className="field">
                <label htmlFor="confirm_password" className="font-bold">
                    Confirm Password
                </label>
                <InputText
                    id="confirm_password"
                    value={data.confirm_password}
                    onChange={(e) => confirmPassword(e, "confirm_password")}
                    required
                    autoFocus
                    className={classNames({
                        "p-invalid": submitted && !data.confirm_password && !data.id, 
                    })}
                />
                {submitted && !data.confirm_password && !data.id && (
                    <small className="p-error">Password don't match.</small>
                )}
            </div>
        </Dialog>
    );
}
