import {FieldValues, useForm, UseFormRegister} from "react-hook-form";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react'

type Props = {
    renderForm: (formProps: FormProps) => React.ReactNode;
    formData: any;
};

export type FormProps = {
    register: UseFormRegister<FieldValues>;
    isSubmitting: boolean;
};

function Form({ renderForm, formData }: Props) {
    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { isSubmitting, errors },
    } = useForm({ defaultValues: formData });

    // Submit handler which displays errors + success messages to the user
    const onSubmit = (data: object) => {
        try {
            console.log(data);
             // successful
            toast.success("Order Successful")
        } catch (error) {
            // // unknown error
            toast.error("An unexpected error occurred while submitting, please try again")
        }
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset(formData)
        }
        if (formState.isSubmitting) {
            for (const field in errors) {
                if (errors[field]) {
                    const message = errors[field]?.message || 'Fill the values correctly';
                    toast.error(`${message}`);
                }
            }
        }
    }, [formState, reset, errors])

    // Render the form itself
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {renderForm({register, isSubmitting})}
            <ToastContainer position="bottom-center"/>
        </form>
    );
}

export default Form