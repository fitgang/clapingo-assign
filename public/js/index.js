import Metric from "./Metric.js";
import Offer from "./Offer.js";
import Step from "./Step.js";
const metricContainer = ReactDOM.createRoot(document.getElementById('metric-container')),
      offerContainer = ReactDOM.createRoot(document.getElementById('offer-container')),
      stepContainer = ReactDOM.createRoot(document.getElementById('step-container'));
metricContainer.render( /*#__PURE__*/React.createElement(Metric, null));
offerContainer.render( /*#__PURE__*/React.createElement(Offer, null));
stepContainer.render( /*#__PURE__*/React.createElement(Step, null));