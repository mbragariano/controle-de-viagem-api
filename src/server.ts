import express from 'express';

const application = express();

application.use(express.json());
application.use(express.urlencoded({ extended: false }));

export default application;
