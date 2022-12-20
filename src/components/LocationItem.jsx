export default function LocationItem(props) {
  console.log(props.item);
  return (
    <section className="location-item">
      <div className="location-img">
        <img src={props.item.imageUrl} alt="location" />
      </div>
      <div className="location-details">
        <div className="above-country-name">
          <img
            src={`./images/location.png`}
            alt="location icon"
            className="location-icon"
          />
          <p>{props.item.location}</p>
          <a href={props.item.googleMapsUrl}>View Google Maps</a>
        </div>
        <div className="country-name">
          <h1>{props.item.title}</h1>
        </div>
        <div className="date">
          <p>
            {props.item.startDate} - {props.item.endDate}
          </p>
        </div>
        <div className="country-description">{props.item.description}</div>
      </div>
    </section>
  );
}
