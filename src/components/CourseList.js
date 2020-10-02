import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import {toast} from "react-toastify";

function CourseList(props){
    return (<table className="table">
        <thead>
        <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
        </tr>
        </thead>
        <tbody>
        { props.courses.map( courses => {
            return ( <tr key={courses.id}>
                    <td>
                        <button className="btn btn-outline-danger" onClick={
                            () => {
                                props.deleteCourse(courses.id)
                                toast.warn('Your course has been deleted.');
                            }
                            }>
                            Delete
                        </button>
                    </td>
                    <td><Link to={"/course/" + courses.slug}>{courses.title}</Link></td>
                    <td>{courses.authorId}</td>
                    <td>{courses.category}</td>
                </tr>
            );
        })}
        </tbody>
    </table>);
}

CourseList.protoTypes = {
    deleteCourse: PropTypes.func.isRequired,
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            authorId: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired
        })
    ).isRequired
}


export default CourseList;
