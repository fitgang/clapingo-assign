const React = require('react');

const offerings = [
  {
    heading: "customized curriculum",
    description: "Customized sessions and module for Basic, Intermediate and Advanced learners."
  },
  {
    heading: "experimental learning",
    description: "Do not study English, rather consume and use it."
  },
  {
    heading: "shadowing method",
    description: "Think and speak in English rather than translating it from mother tongue."
  }
];

const Offer = () => {
  const offerCards = offerings.map(({heading, description}) => 
    <div className="offer-card">
      <div className="content">
        <h4>{heading}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
  return <div id="offer-card-container">{offerCards}</div>
}

module.exports = {Offer}