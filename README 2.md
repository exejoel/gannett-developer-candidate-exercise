# My Delicious Articles

## Sinatra

Sinatra has two end points:

* /data: Fetches a new profile ID and fetches the data for that profile
* /data/:id: Fetches the data for the provided profile :id

Execute this backend by running these commands in the same directory as this
file:

```
bundle install --path .bundle
bundle exec ruby api.rb
```

This will start the server at port 4000.

## Frontend

The React frontend structure is taken from [Create React Redux
App](https://github.com/YUzhva/create-react-redux-app).

Significant modifications include:

* Adding of custom components to the design making it more modular
* Adding of cookies to store the profile ID provided
* Adding conditional actions based on the value in the cookie (if it exists)
* Design changes

Execute the frontend by running these commands in the `frontend` directory:

```
npm install OR yarn install
npm start
```
# My-Delicious-Articles
