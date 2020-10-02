import React from "react";
import TextInput from "./common/TextInput";
import Proptypes from "prop-types";

function CourseForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="title"
                label="Title"
                name="title"
                onChange={props.onChange}
                value={props.course.title}
                error={props.errors.title}
            />


            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        onChange={props.onChange}
                        value={props.course.authorId || ""}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">Test Name</option>
                        <option value="2">Name Test</option>
                    </select>
                </div>
                {props.errors.authorId && (
                    <div className="alert alert-danger">{props.errors.authorId}</div>
                )}
            </div>


            <TextInput
                id="category"
                label="Category"
                name="category"
                onChange={props.onChange}
                value={props.course.category}
                error={props.errors.category}
            />


            <input type="submit" value="save" className="btn btn-primary"/>
        </form>
    );
}

CourseForm.propType = {
    course: Proptypes.object.isRequired,
    onSubmit: Proptypes.func.isRequired,
    onChange: Proptypes.func.isRequired,
    errors: Proptypes.object.isRequired
};

export default CourseForm;
