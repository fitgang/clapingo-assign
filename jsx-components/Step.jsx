const steps = [
  {
    name: "1. Create Account",
    description: "Create your account using phonenumber or email or email and take a free trial at &#8377; 1."
  },
  {
    name: "2. Subscribe",
    description: "Choose your preferred duration and select subscription package for your sessions."
  },
  {
    name: "3. Select time slot",
    description: "Subscribe & select any time slot between 10 AM to 12 midnight."
  },
  {
    name: "4. You are done",
    description: "That's it! Start practicing and reach your learning goal in speaking."
  }
];

const Step = () => {
  const stepCards = steps.map(({name, description}) =>
    <div className="step">
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
  return <>{stepCards}</>
}

export default Step