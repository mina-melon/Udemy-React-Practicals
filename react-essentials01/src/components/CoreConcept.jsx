export default function CoreConcept({ image, title, description }) {
  return (
    <div>
      <li>
        <img src={image} alt={title} />
      </li>
      <li>
        <h3>{title}</h3>
      </li>
      <li>
        <p>{description}</p>
      </li>
    </div>
  );
}


