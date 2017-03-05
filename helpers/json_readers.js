/*jshint esversion: 6 */

'use strict';

const fs = require('fs');
const fsp = require('fs-promise');
const students_path = path.join(__dirname, 'models/students.json');
const student_path = path.join(__dirname, 'models/student.json');
const cohorts_path = path.join(__dirname, 'models/cohorts.json');
const cohort_students_path = path.join(__dirname, 'models/cohort_students.json');

function getStudents() {
    fsp.readFile(students_path)
        .then((students) => {
          return students;
        })
        .catch((err) => {
            console.error(err.stack);
        });
}

function getStudent() {
    fsp.readFile(student_path)
        .then((student) => {
          return student;
        })
        .catch((err) => {
            console.error(err.stack);
        });
}

function getCohorts() {
    fsp.readFile(cohorts_path)
        .then((cohorts) => {
          return cohorts;
        })
        .catch((err) => {
            console.error(err.stack);
        });
}

function getCohortStudents() {
    fsp.readFile(cohort_students_path)
        .then((students) => {
          return students;
        })
        .catch((err) => {
            console.error(err.stack);
        });
}
