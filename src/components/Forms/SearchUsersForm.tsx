import {Field, Form, Formik, FormikValues} from 'formik';
import React from 'react';
import {FilterType} from "../state/usersReducer";

type valuesType = {
    term:string
    friend: "false" | "true" | "null"
}

const validateSearch = (values:valuesType) => {
    const errors = {};
    return errors;
}

type searchUsersFormType = {
    onFilterChanges:(filter:FilterType)=> void
}

const SearchUsersForm = ({onFilterChanges}:searchUsersFormType) => {

    const onSubmit = (values:valuesType, {setSubmitting}:{setSubmitting:(isSubmitting: boolean) => void}) => {
        const filters:FilterType = {
            term: values.term,
            friend:values.friend === "null" ? null : values.friend === "true"
        }
        onFilterChanges(filters)
        setSubmitting(false);
    }

    return (
        <div>
            <Formik
                initialValues={{term: '',friend:'null'}}
                validate={validateSearch}
                onSubmit={onSubmit}
            >
                {({isSubmitting}) => {
                    return (
                    <Form>
                        <Field type="text" name="term" />
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Friends</option>
                            <option value="false">Other</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}}
            </Formik>
        </div>
    );
};

export default SearchUsersForm;