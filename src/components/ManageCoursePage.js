import React, {useState, useEffect} from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore"
import * as courseActions from "../actions/courseActions"

import { toast } from "react-toastify";

const ManageCoursePage = props => {


    const [errors, setErrors] = useState({});
    const [courses, setCourses] = useState(courseStore.getCourses())
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        authorId: null,
        category: ""
    })

    useEffect( () => {

        courseStore.addChangeListener(onChange);
        const slug = props.match.params.slug;
        if (courses.length === 0) {
            courseActions.loadCourses();
        }
        else if (slug)
         {
            setCourse(courseStore.getCourseBySlug(slug))
        }
        return () => courseStore.removeChangeListener(onChange);
    }, [courses.length, props.match.params.slug]);

    //handler takes an event but destructed as only target needed
    function handleChange( { target } ){
        setCourse({...course, [target.name]: target.value});
    }

    function onChange() {
        setCourses(courseStore.getCourses());
    }

    function formIsValid() {
        const _errors = {};

        if( !course.title) _errors.title = "A title is required";
        if( !course.authorId) _errors.authorId = "A Author is required";
        if( !course.category) _errors.category = "A category is required";

        setErrors(_errors)

        //form is valid if errors object has no errors
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event){
        event.preventDefault();
        if(!formIsValid()) return;
        courseActions.saveCourse(course).then( () => {
            props.history.push("/courses");
            toast.success('You course has been saved.');
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm errors={errors} course={course} onChange={handleChange} onSubmit={handleSubmit}/>
        </>
    );
}

export default ManageCoursePage;
