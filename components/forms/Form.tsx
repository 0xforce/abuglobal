import {FieldValues, useForm, UseFormRegister} from "react-hook-form";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    renderForm: (formProps: FormProps) => React.ReactNode;
    setFormData: any;
};

export type FormProps = {
    register: UseFormRegister<FieldValues>;
    isSubmitting: boolean;
    errors: { [error: string]: any };
};

function Form({ renderForm, setFormData }: Props) {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm();

    // Submit handler which displays errors + success messages to the user
    const onSubmit = async (data: object) => {
        try {
            setFormData(data);
            // successful
            toast.success("Order Successful")
        } catch (error) {
            // unknown error
            toast.error("An unexpected error occurred while submitting, please try again")
        }
    }

    // Render the form itself
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {renderForm({register, errors, isSubmitting})}
            <ToastContainer position="bottom-center"/>
        </form>
    );
}

export default Form