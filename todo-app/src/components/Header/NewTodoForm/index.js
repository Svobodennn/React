import React from 'react'
import { Formik, Field, Form } from "formik";
import validationSchema from './validation'
import { useTodo } from '../../contexts/TodoContext';
import {v4 as uuidv4} from "uuid"

function NewTodoForm() {

    const {addTodo} = useTodo()


    return (
        <Formik
            initialValues={{
                text: "",
            }}
            onSubmit={(values, bag) => {

                // setTodos(prev => [...prev, {id: uuidv4(), text:values.text, completed:false}])
                addTodo(values.text)
                bag.resetForm()
            }}
            validationSchema={validationSchema}
        >

            <Form>
                <Field
                    className='new-todo'
                    placeholder='What needs to be done?'
                    autoFocus
                    id="text"
                    name="text"
                />
            </Form>
        </Formik>
    )
}

export default NewTodoForm
