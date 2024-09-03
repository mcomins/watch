/* eslint no-console: 0 */

const { SSM } = require('aws-sdk');
const router = require('express').Router();
const expressAsync = require('../middleware/express-async');

const { REGION } = process.env;
const PARAM_NAME_HEALTH_CHECK = `/health-check/${REGION}/is-healthy`;
const ssm = new SSM();

router.get('/', expressAsync(async (req, res) => {
    const isHealthy = await ssm.getParameter({ Name: PARAM_NAME_HEALTH_CHECK }).promise()
        .then(({ Parameter: { Value } }) => Value === 'true')
        .catch(err => {
            console.error('Unable to obtain parameter "%s" from parameter store.', PARAM_NAME_HEALTH_CHECK, err);
        });

    const responseBodyStatuses = { isHealthy, region: REGION };

    if (!isHealthy) {
        res.status(503);
        res.json({ status: 'Unhealthy', ...responseBodyStatuses });
    } else {
        res.json({ status: 'Healthy', ...responseBodyStatuses });
    }
}));

module.exports = router;
