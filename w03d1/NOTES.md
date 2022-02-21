Dom:

slides:
AGENDA
what is a web server? (asked students what they think)
creating a web server with vanilla js
creating a web server with express



WHAT IS A WEB SERVER?
1. listens for HTTP requests (headers and body)
2. 
3.

WEB THREE TIER ARCHITECTURE
browser(client), web server, database (we won't use this for TinyApp)
steps in the slides show steps
any questions?

The main challenge of TinyApp is figuring out which file represents which tier.

REQUESTS (VERB)

request = http verb + path (resource)

4 http verbs
  1. GET (Read)
  2. POST (Create)
  3. PUT (Update)
  4. DELETE (Delete)

REQUESTS (PATH)


Show a request in the browser using dev tools.

RESPONSE
Status Code (2xx, 3xx, 4xx, 5xx, ...)
Headers (contains metadata, cookies) and Body (the main part of the message)



DEMO

First Demo

const http = request('http'); // http package is different from the net package.
const PORT = 8888;
const server = http.createServer( (request, response)=>{
  // handing the request and the response

  console.log('request',request);
  console.log('request method',request.method);
  console.log('request path (url)',request.url);
  console.log('request.headers',request.headers);

  // ROUTES or END POINTS
  if (request.method === "GET" && request.url === '/'){
    response.write(`Homepage`);
    response.end();
  } else if (request.method === "GET" && request.url === '/todos'){
    response.write(`Todos`);
    response.end();
  } else {
    response.write(404 not found);
    response.end();
  }

} );
server.listen(PORT, () => {console.log(`Server is listening on ${PORT}`)});


You need .end to send the data back. You could have two .write calls before the .end.

Can refactor this by creating a "ROUTE" variable. const route = `${response.method} + ${response.url}`;
Can also refactor by putting in a switch statement instead of if / else if etc.
Can improve things by adding a views directory. (use require('fs') and a sync file reader.

const renderView = function(filename){
  const filepath = path.join(path.dirname(__dirname),`views`,`${filename}`;
};

Refactor response.write(renderView(filename));


You can simulate a DB by including a file:

module.exports = [
  {id: 1, type: 'read', description: 'read Getting to Yes'},
];

JSON.stringify(todos);


We would like to inject the TODOs object into the HTML that will be sent back.



BREAK

const renderTodos = function(todos){
  return `PUT DYNAMIC CODE IN HERE`;
};

We could put the HTML in a file and insert dynamic content into it.

But aren't we solving issues that others should have solved many times before?


Repeat the process but use the Express package instead.

SLIDE: EXPRESS JS
routing system
view templates (ejs)
middleware

DEMO

set up the listener

handle the routes

e.g. app.get(post,put,delete)

you don't need a switch statement because it will match the first route.

express EJS templates

how to pass variables into an EJS template

how to put a loop inside an EJS template: inject JS into aligator clips


2 HOURS IS UP

you can use a templateVars convenience variable

tips about likely errors (must define properties inside )

questions from the class:
would the dynamic content keep pace with DB changes?
do we need to require ejs? (no.)

LECTURE ENDS

example POST request


NALLY:

SLIDE 1: Computer Programs have INPUTS, PROCESSING and OUTPUTS
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

We will be dealing with many different programs, but mainly a) the web client (browser) and b) the web server

                 INPUTS                          PROCESSING               OUTPUTS

BROWSER      HTML/CSS/JS/IMAGES                  Apply Styling            the request
                                                To DOM Elements           (headers and body)


WEB SERVER   the request                        chose and build           the response
             (headers and body)                 customized data for       (headers and body)
                                                response

SLIDE 2: "From One Click To The Next" (intermediate version)
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Here are all of the steps that can happen "From One Click to the Next":

1. The Onramp to the Entire Web: Start A Web Browser and Create and Empty Tab

2. Type in a URL and hit Enter (this makes the browser output a "Request", as if you'd clicked on a link to 
that address)

3. i) That Request is sent out over the internet to a web server. It is an HTTP message sent over TCP/IP.
3. ii) One Computer Program's Output Becomes Another Program's Input.

4. The Web Server Accepts the Request (headers and body).

5. The Web Server processes its inputs and builds Custom HTML to send back.

6. The Web Server Outputs an HTML Response which references CSS, JS, Images, etc.

7. i) That response is sent out over the internet back to the web browser. It is an HTTP message sent over TCP/IP.
7. ii) One Computer Program's Output Becomes Another Program's Input.

8. The Browser Parses its Inputs. If it's HTML, that may list a bunch of resources (URLs) that it needs to get.
8. ii) For each of those, go back to step 3. and make a new request.
8. iii) Render the HTML using the styles, JS, images, etc.

9. If a User Clicks a Link and that click action initiates a new request, go back to Step 3.

SLIDE 3: INTRO TO "THE BACK-END"
++++++++++++++++++++++++++++++++

Today we will introduce what is happening on the back-end, Steps 4, 5, 6, and 7. We will look at:

a) the web server's inputs (a request = an HTTP verb, a path and maybe some data)
b) how it receives those inputs
c) how it processes those inputs to build customized output (including the role of middleware)
d) how it sends that output back to the browser side

SLIDE 4: HOW EXPRESS WORKS, FROM REQUEST TO RESPONSE
++++++++++++++++++++++++++++++++++++++++++++++++++++

The Request includes Headers (HTTP Verb + Path) and Body (Form Data)

Express matches the incoming request to an "End Point" (a.k.a. "Route")

Express can run data through a "Template"

The HTML that results from that Template Gets Sent Back as a "Response"

