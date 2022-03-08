import {Field, Form, Formik} from 'formik';
import React from 'react';

type newMessageFormType = {
    onSendMessage:(values:newMessageFormValuesType)=>void
}
export type newMessageFormValuesType = {
    message:string
}
const NewMessageForm = ({onSendMessage}:newMessageFormType) => {
    const onSubmit = (values:newMessageFormValuesType, {setSubmitting}:{setSubmitting:(isSubmitting: boolean) => void}) => {
        onSendMessage(values)
        setSubmitting(false)
    }
    return (
        <div>
            <Formik
                initialValues={{message:''}}
                onSubmit={onSubmit}
            >
                {({isSubmitting}) => {
                return (
                    <Form>
                        <Field type='text' name='message'/>
                        <button type="submit" disabled={isSubmitting}>send</button>
                    </Form>
                )}}
            </Formik>
        </div>
    );
};

export default NewMessageForm;