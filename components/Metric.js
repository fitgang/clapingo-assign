const React = require('react');

const metrics = [{
  name: "mobile downloads",
  value: "50k"
}, {
  name: "happy learners",
  value: "80k"
}, {
  name: "sessions per month",
  value: "53k"
}, {
  name: "speakers around the globe",
  value: "200"
}];

const Metric = () => {
  const metricCards = metrics.map(({
    name,
    value
  }) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "metric-value"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "hl-text"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "metric-name"
  }, name)));
  return /*#__PURE__*/React.createElement("div", {
    id: "metric-container"
  }, metricCards);
};

module.exports = {
  Metric
};