const metrics = [
  {
    name: "mobile downloads",
    value: "50k"
  },
  {
    name: "happy learners",
    value: "80k"
  },
  {
    name: "sessions per month",
    value: "53k"
  },
  {
    name: "speakers around the globe",
    value: "200"
  }
];

const Metric = () => {
  const metricCards = metrics.map(({ name, value }) =>
    <div className="metric-card">
      <div className="metric-value">
        <span>{value}</span>
        <span className="hl-text">+</span>
      </div>
      <div className="metric-name">{name}</div>
    </div>
  )
  return <>{metricCards}</>
}

export default Metric