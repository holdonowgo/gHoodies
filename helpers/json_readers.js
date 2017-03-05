/*jshint esversion: 6 */

'use strict';

const fs = require('fs');
const fsp = require('fs-promise');
const path = require('path');
const students_path = path.join(__dirname, '../models/students.json');
const student_path = path.join(__dirname, '../models/student.json');
const cohorts_path = path.join(__dirname, '../models/cohorts.json');
const cohort_students_path = path.join(__dirname, '../models/cohort_students.json');

function getStudents() {
    fsp.readFile(students_path, {
            encoding: 'utf8'
        })
        .then((students) => {
            return JSON.parse(students);
        })
        .catch((err) => {
            console.error(err.stack);
        });
}

function getStudent() {
    return fsp.readFile(student_path)
        .then((student) => {
            return JSON.parse(student);
        })
        .catch((err) => {
            console.error(err.stack);
        });
}

function getCohorts() {
    return fsp.readFile(cohorts_path)
        .then((cohorts) => {
            return JSON.parse(cohorts);
        })
        .catch((err) => {
            console.error(err.stack);
        });
}

function getCohortStudents() {
    return fsp.readFile(cohort_students_path)
        .then((students) => {
            return JSON.parse(students);
        })
        .catch((err) => {
            console.error(err.stack);
        });
}

getStudent().then((result) => console.log(result));
getStudents().then((result) => console.log(result));
getCohorts().then((result) => console.log(result));
getCohortStudents().then((result) => console.log(result));
