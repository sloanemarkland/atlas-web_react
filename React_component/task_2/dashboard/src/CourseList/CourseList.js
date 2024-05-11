import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import './CourseList.css';

function CourseList({ listCourses }) {
  return (
    <>
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow textFirstCell="No course available yet" isHeader={false} />
          ) : (
            listCourses.map(course => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit.toString()}
                isHeader={false}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
