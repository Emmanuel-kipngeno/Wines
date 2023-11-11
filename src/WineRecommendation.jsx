const WineRecommendation = ({
  wine,
  wineRecommendations,
  setWineRecommendations,
  onRandom,
}) => {
  const handleOrder = () => {
    alert(`You ordered ${wine?.name}. Fine Wining ahead,Enjoy! `);
  };

  const handleDelete = () => {
    alert(`The wine ${wine.name} has been deleted.`);

    fetch("http://localhost:3000/wines")
      .then((response) => response.json())
      .then((wines) => {
        const remainingWines = wines.filter(
          (wineItem) => wineItem.id !== wine.id
        );
        const randomIndex = Math.floor(Math.random() * remainingWines.length);
        const randomWine = remainingWines[randomIndex];
        setWineRecommendations([
          randomWine,
          ...wineRecommendations.filter((wineItem) => wineItem.id !== wine.id),
        ]);
      })
      .catch((error) => {
        console.error("No wine data:", error);
      });
  };

  return (
    <div className="wine-icon">
      {wine && <img src={wine.image} alt={wine.name} />}
      {wine && <h3>{wine.name}</h3>}
      {wine && <span> {wine.wine_type} </span>}
      {wine && <p>750ml = Kshs. {wine.price_750ml}</p>}
      {wine && <p>1litre = Kshs. {wine.price_1litre}</p>}
      <button className="mb-3 btn btn-success" onClick={handleOrder}>
        Order
      </button>
      <button className="mb-3 btn btn-success " onClick={handleDelete}>
        Delete
      </button>
      <button className="mb-3 btn btn-success " onClick={onRandom}>
        Random Wine
      </button>
    </div>
  );
};

export default WineRecommendation;
