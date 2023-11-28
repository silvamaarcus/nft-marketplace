// Imagens
import imgCard_1 from "../../../img/cyberpunk.png";
import imgCard_2 from "../../../img/charge.png";
import imgCard_3 from "../../../img/surgeon.png";

// Icons
import icon_ethereum from "../../../svg/ethereum-classic.svg";
import icon_clock from "../../../svg/clock.svg";

const Arts = () => {
  return (
    <>
      <section className="container arts">
        <div className="row flex arts-title">
          <h3 className="color-white">
            <span>Amazing</span> and Super Unique Art of This <span>Week</span>
          </h3>
          <div className="w-65">
            <a href="" className="btn">
              See All
            </a>
          </div>
        </div>

        <div className="row mt-5">
          <div className="grid-4 card-art">
            <img src={imgCard_1} alt="Cyberpunk" />
            <div className="flex-space mt-3">
              <p className="p1 color-white bold">Cyberpunk Cocomo</p>
              <div className="flex-start-row">
                <img src={icon_ethereum} alt="Ethernum" />
                <p className="p1 color-white bold">490ETH</p>
              </div>
            </div>
            <div className="flex-space mt-3">
              <div>
                <p className="p1">Ending In</p>
                <div className="flex-start-row">
                  <img src={icon_clock} />
                  <p className="p1 color-white bold ml-2">03:24:56</p>
                </div>
              </div>
              <a href="" className="btn-2">
                Place A Bid
              </a>
            </div>
          </div>

          <div className="grid-4 card-art">
            <img src={imgCard_2} alt="Charge" />
            <div className="flex-space mt-3">
              <p className="p1 color-white bold">Charge, Qi tiao yu</p>
              <div className="flex-start-row">
                <img src={icon_ethereum} alt="Ethernum" />
                <p className="p1 color-white bold">490ETH</p>
              </div>
            </div>
            <div className="flex-space mt-3">
              <div>
                <p className="p1">Ending In</p>
                <div className="flex-start-row">
                  <img src={icon_clock} />
                  <p className="p1 color-white bold ml-2">03:24:56</p>
                </div>
              </div>
              <a href="" className="btn-2">
                Place A Bid
              </a>
            </div>
          </div>

          <div className="grid-4 card-art">
            <img src={imgCard_3} alt="Surgeon" />
            <div className="flex-space mt-3">
              <p className="p1 color-white bold">Surgeon, Josh Rife</p>
              <div className="flex-start-row">
                <img src={icon_ethereum} alt="Ethernum" />
                <p className="p1 color-white bold">490ETH</p>
              </div>
            </div>
            <div className="flex-space mt-3">
              <div>
                <p className="p1">Ending In</p>
                <div className="flex-start-row">
                  <img src={icon_clock} />
                  <p className="p1 color-white bold ml-2">03:24:56</p>
                </div>
              </div>
              <a href="" className="btn-2">
                Place A Bid
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Arts;
