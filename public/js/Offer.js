const offerings = [{
  heading: "customized curriculum",
  description: "Customized sessions and module for Basic, Intermediate and Advanced learners."
}, {
  heading: "experimental learning",
  description: "Do not study English, rather consume and use it."
}, {
  heading: "shadowing method",
  description: "Think and speak in English rather than translating it from mother tongue."
}];

const Offer = () => {
  const offerCards = offerings.map(({
    heading,
    description
  }) => /*#__PURE__*/React.createElement("div", {
    className: "offer-card"
  }, /*#__PURE__*/React.createElement("img", {
    src: "./images/bulb.jpg",
    className: "bg-img"
  }), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("h4", null, heading), /*#__PURE__*/React.createElement("p", null, description))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, offerCards);
};

export default Offer;