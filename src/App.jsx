import Header from "./components/Header";
import LocationItem from "./components/LocationItem";
import data from "./data";

export default function App() {
  let mainContent = data.map((item) => {
    return <LocationItem key={item.id} item={item} />;
  });
  return (
    <div className="app">
      <Header />
      {mainContent}
    </div>
  );
}
