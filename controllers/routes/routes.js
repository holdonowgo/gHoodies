const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const bodyParser = require('body-parser');
const ENV = process.env.NODE_ENV || "development";
const CONFIG = require("../../knexfile.js")[ENV];
const KNEX = require('knex')(CONFIG);

ROUTER.use(bodyParser.json());
ROUTER.use(bodyParser.urlencoded({
    extended: true
}));


ROUTER.get('/students', (req, res) => {
    KNEX('students')
        .orderBy('name', 'asc')
        .then((students) => {
            KNEX.destroy();
            res.status(200).json(students)
        })
        .catch((err) => {
            KNEX.destroy();
            console.error(err);
            res.status(500);
        });
});

ROUTER.patch('/students/:id', (req, res) => {

    let id = Number.parseInt(req.params.id);

    if (!id || !size) {
        res.set('Content-Type', 'text/plain');
        res.body = 'Bad Request';
        res.sendStatus(400);
    }

    let student = KNEX('students')
        .where('id', id)
        .update(req.body)
        .then((data) => {
            KNEX.destroy();
            res.sendStatus(202);
        })
        .catch((err) => {
            KNEX.destroy();
            console.error(err.stack);
            return res.sendStatus(500);
        });
});

ROUTER.get('/cohorts/:gnum', (req, res) => {
    let gnum = Number.parseInt(req.params.gnum);
    KNEX('students')
        .innerJoin('cohorts', 'cohorts.id', 'students.cohort_id')
        .where(`gnum`, '=', `${gnum}`)
        .select('name', 'fulfilled', 'size')
        .then((cohortStudents) => {
            KNEX.destroy();
            res.status(200).json(cohortStudents)
        })
        .catch((err) => {
            KNEX.destroy();
            console.error(err);
            res.status(500);
        });
});

module.exports = ROUTER;
