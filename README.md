A first pass at getting familiar with Typescript and Koa
by trying to build the local library api based on the MDN
project:

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website

Base Level Goals:
- An identical API to local-library api, but with 
postgres rather than MongoDB

- Decent enough typescript conventions
- Figure out a solid directory structure
- Figure out how to do env variables in JS
- Learn how to write unit + integration tests for
a node app

Next Level Goals:
- Dockerize + get API deployed 
- Build a UI to display the data
- Concept of users + JWT auth
- logs, spans, traces with OpenTelemetry