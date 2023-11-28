// Imagens 
import imgSubsc from "../../../img/subsc-img.png"

const Subscribe = () => {
  return (
    <>
      <section className="container subsc">
        <div className="row flex-center subsc-center">
          <div className="grid-6">
            <img src={imgSubsc} alt="NFTs" />
          </div>

          <div className="grid-6 pl-4">
            <div className="subsc-title">
              <h3 className="color-white">
                Subscribe And <span>get our Updates</span> Every Week
              </h3>
              <p className="p1 color-white mt-3">
                We have a blog related to NFT so we can share thoughts and
                routines on our blog which is updated weekly
              </p>
            </div>

            <div className="mt-5 flex subsc-news">
              <input type="text" placeholder="Enter your e-mail" />
              <a href="" className="ml-1 btn">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
