// Imagens
import imgHero from "../../../img/img-hero.png";

const Hero = () => {
  return (
    <>
      <section className="container hero">
        <div className="row flex-space flex-wrap">
          <div className="grid-6">
            <div>
              <h1 className="color-white">
                Discover and Collect The Best NFTs <span>Digital Art.</span>
              </h1>
              <p className="mt-3 p1 color-white">
                Get started with the easiest and most secure platform to buy and
                trade digital ART and NFT’s. Start exploring the world of
                digital art and NFTs today and take control of your digital
                assets with confidence!
              </p>
              <div className="mt-5">
                <a href="" className="btn">
                  Explore Now
                </a>
                <a href="" className="ml-4 bold">
                  Learn More
                </a>
              </div>
            </div>

            <div className="flex-start-row mt-5 forced-center">
              <div className="br-primary pr-3">
                <h4 className="uppercase color-white">
                  <span>8.9</span>k
                </h4>
                <p className="color-white">Art wrok</p>
              </div>
              <div className="br-primary px-3">
                <h4 className="uppercase color-white">
                  <span>65</span>k
                </h4>
                <p className="color-white">Artist</p>
              </div>
              <div className="pl-3">
                <h4 className="uppercase color-white">
                  <span>87</span>k
                </h4>
                <p className="color-white">Collection</p>
              </div>
            </div>
          </div>

          <div className="grid-6">
            <img src={imgHero} alt="Card" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
