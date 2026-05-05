import { useEffect, useState } from "react";
import "./Hero.css"
import burger from "../../assets/burger.png"
import pizza from "../../assets/pizza.png";
import thali from "../../assets/thali.png";
function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section className="fh-section px-0 md:px-20">
        <div className="fh-slash" />
        <div className="fh-grid" />
        <div className="fh-glow" />

        <div className="fh-inner">

          {/* ── LEFT ── */}
          <div className="fh-left">

            <div className={`fh-badge fu d1 ${visible ? "on" : ""}`}>
              <span className="fh-dot" />
              Free delivery · 30 min
            </div>

            <h1 className={`fh-title fu d2 ${visible ? "on" : ""}`}>
              TASTE<br />
              THE <span className="red">BEST</span><br />
              FOOD
            </h1>

            <p className={`fh-sub fu d3 ${visible ? "on" : ""}`}>
              Cravings? Consider them handled. From sizzling burgers to wood-fired pizza — hot food, fast delivery, zero compromise.
            </p>

            <div className={`fh-ctas fu d4 ${visible ? "on" : ""}`}>
              <button className="btn-primary">Order Now →</button>
              <button className="btn-outline">View Menu</button>
            </div>

            <div className={`fh-stats fu d5 ${visible ? "on" : ""}`}>
              {[
                { num: "10+", label: "Years" },
                null,
                { num: "500K", label: "Customers" },
                null,
                { num: "4.8★", label: "Rating" },
              ].map((s, i) =>
                s === null ? (
                  <div key={i} className="fh-stat-div" />
                ) : (
                  <div key={i} className="fh-stat">
                    <span className="fh-stat-num">{s.num}</span>
                    <span className="fh-stat-label">{s.label}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className={`fh-right fu d6 ${visible ? "on" : ""}`}>

            {/* Burger */}
            <div className="food-img-wrap fi-burger">
              <img src={burger} alt="Burger" />
            </div>
            {/* Floating label tags */}
            <div className="fh-tag fh-tag-1">
              <span className="tag-dot" /> Crispy Burger
            </div>
            {/* Burger */}
            <div className="food-img-wrap fi-pizza">
              <img src={pizza} alt="Pizza" />
            </div>
            {/* Floating label tags */}
            <div className="fh-tag fh-tag-2">
              <span className="tag-dot" /> Pizza
            </div>
            <div className="food-img-wrap fi-thali">
              <img src={thali} alt="Pizza" />
            </div>
            {/* Floating label tags */}
            <div className="fh-tag fh-tag-3">
              <span className="tag-dot" /> Dinner Thali
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;