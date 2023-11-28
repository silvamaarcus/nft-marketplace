// Imagens
import artist_1 from "../../../img/artists-1.png";
import artist_2 from "../../../img/artists-2.png";
import artist_3 from "../../../img/artists-3.png";
import artist_4 from "../../../img/artists-4.png";
import artist_5 from "../../../img/artists-5.png";

const NFTS = () => {
  return (
    <>
      <section className="container arts">
        <div className="row flex arts-title">
          <h3 className="color-white">
            Popular <span>Artists</span> On This Week
          </h3>
          <div className="w-65">
            <a href="" className="btn">
              See All
            </a>
          </div>
        </div>

        <div className="row my-5 artists-grid">
          <div className="artist-1">
            <img src={artist_1} />
          </div>
          <div className="artist-2 ml-4">
            <img src={artist_2} />
          </div>
          <div className="artist-3 mt-3">
            <img src={artist_3} />
          </div>
          <div className="artist-4 mt-3 ml-4">
            <img src={artist_4} />
          </div>
          <div className="artist-5 ml-4">
            <img src={artist_5} />
          </div>
        </div>
      </section>
    </>
  );
};

export default NFTS;
