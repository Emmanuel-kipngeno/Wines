import { useEffect, useState } from "react";
import WineRecommendation from "./WineRecommendation";
import Comment from "./Comment";

function BodyRecommend() {
  const [wineRecommendations, setWineRecommendations] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/wines")
      .then((response) => response.json())
      .then((wines) => {
        setWineRecommendations(wines.slice(0, 1));
      })
      .catch((error) => {
        console.error("Error: No wine data:", error);
      });
  }, []);

  const handleRandom = () => {
    fetch("http://localhost:3000/wines")
      .then((response) => response.json())
      .then((wines) => {
        const randomIndex = Math.floor(Math.random() * wines.length);
        const randomWine = wines[randomIndex];
        setWineRecommendations([randomWine]);
      })
      .catch((error) => {
        console.error("No wine data:", error);
      });
  };

  return (
    <>
    <div className="recommendation">
      <h5>Wines of the Day!</h5>
        <div className="fancy-text">
          <p>
            Can not choose any of our lucrative choices? Have a look at our Random
            Premium Wines of the Day.
          </p>
        </div>
        <div className="body-flex">
          <div className="wine-big-container">
            {wineRecommendations.map((wine) => (
              <WineRecommendation
                key={wine.id}
                wine={wine}
                wineRecommendations={wineRecommendations}
                setWineRecommendations={setWineRecommendations}
                onRandom={handleRandom}
              />
            ))}
          </div>
          <div className="comments">
            <h4>
              <em>Talk to Us!</em>
            </h4>
            <Comment comments={comments} setComments={setComments} />
          </div>
        </div>
    </div>
    </>
  );
}

export default BodyRecommend;
