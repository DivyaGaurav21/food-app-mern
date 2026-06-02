import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="w-full bg-[var(--black)] text-white px-0 md:px-20">
      {/* Main grid */}
      <div className="px-8 pt-10 pb-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Logo />
          <p className="text-[11px] text-white/40 tracking-[1.5px] uppercase mt-1 mb-5">
            Delivered fresh, always
          </p>
          <div className="flex gap-2">
            {[FaInstagram, FaFacebook, FaTwitter, FaLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="https://www.linkedin.com/in/divya-gaurav/"
                target="_blank"
                className="w-[34px] h-[34px] rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "2px",
            }}
            className="text-[15px] text-[var(--red)] mb-3"
          >
            Explore
          </p>
          {["Menu", "Offers", "Track Order", "Restaurants"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-[13px] text-white/55 hover:text-[var(--red)] mb-2 transition-colors"
            >
              {item}
              {item === "Offers" && (
                <span className="ml-2 bg-[var(--red)] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  Hot
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Company */}
        <div>
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "2px",
            }}
            className="text-[15px] text-[var(--red)] mb-3"
          >
            Company
          </p>
          {["About Us", "Careers", "Partner with Us", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-[13px] text-white/55 hover:text-[var(--red)] mb-2 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div>
          <p
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "2px",
            }}
            className="text-[15px] text-[var(--red)] mb-3"
          >
            Get the app
          </p>
          {[
            { icon: <FaApple />, store: "App Store", sub: "Download on the" },
            { icon: <FaGooglePlay />, store: "Google Play", sub: "Get it on" },
          ].map(({ icon, store, sub }) => (
            <a
              key={store}
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl 
    border border-white/10 bg-white/5 
    hover:bg-white/10 hover:border-[var(--red)] 
    transition-all duration-200 w-fit mb-2"
            >
              {/* Icon */}
              <span className="text-2xl text-white">{icon}</span>

              {/* Text */}
              <div className="leading-tight">
                <p className="text-[10px] text-white/60">{sub}</p>
                <p className="text-sm font-semibold text-white">{store}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.08] bg-[var(--black)] px-8 py-4 flex flex-wrap items-center justify-between gap-2">
        <span className="text-[12px] text-white/25">
          © 2026 foodKart. All rights reserved.
        </span>
        <div className="flex items-center gap-2">
          {["Privacy", "Terms"].map((link, i) => (
            <span key={link} className="flex items-center gap-2">
              {i > 0 && (
                <span className="w-1 h-1 rounded-full bg-[var(--red)] inline-block" />
              )}
              <a
                href="#"
                className="text-[12px] text-white/25 hover:text-[var(--red)] transition-colors"
              >
                {link}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
