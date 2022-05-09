const express = require("express"),
      fs = require('fs'),
      React = require('react'),
      {
  renderToString
} = require('react-dom/server');

const app = express(),
      port = process.env.PORT || 3000; // import components

const {
  Metric
} = require(__dirname + '/components/Metric.js'),
      {
  Offer
} = require(__dirname + '/components/Offer.js'),
      {
  Step
} = require(__dirname + '/components/Step.js');

app.use('/public', express.static(__dirname + '/public'));
app.get("/", (req, res) => {
  // get HTML string from the `App` component
  let metricHTML = renderToString( /*#__PURE__*/React.createElement(Metric, null)),
      offerHTML = renderToString( /*#__PURE__*/React.createElement(Offer, null)),
      stepHTML = renderToString( /*#__PURE__*/React.createElement(Step, null)); // read `index.html` file

  let indexHTML = fs.readFileSync(__dirname + '/views/index.html', {
    encoding: 'utf8'
  }); // populate react elements with `HTML`

  indexHTML = indexHTML.replace('<!--metric-container-->', metricHTML).replace('<!--offer-card-container-->', offerHTML).replace('<!--step-container-->', stepHTML); // set header and status

  res.contentType('text/html');
  res.status(200);
  return res.send(indexHTML);
});
app.get("/login", (req, res) => res.sendFile(__dirname + "/views/login.html"));
app.get("/loggedIn", (req, res) => res.sendFile(__dirname + "/views/loggedIn.html"));
app.listen(port, () => console.log("Listening on " + port));
