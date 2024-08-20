const express = require('express');
const redis = require('redis');

const app = express();

// Create Redis client using environment variables
const client = redis.createClient({
    host: process.env.REDIS_HOST || 'localhost',  // Use environment variable or fallback to localhost
    port: process.env.REDIS_PORT || 6379           // Use environment variable or fallback to 6379
});

// Initialize Redis key
client.set('visits', 0);

// Define the route
app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        if (err) {
            res.status(500).send('Error retrieving visits');
            return;
        }
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

// Start the server
app.listen(8081, () => {
    console.log('Listening on port 8081');
});
