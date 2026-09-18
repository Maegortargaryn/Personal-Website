import React, { useEffect, useState } from "react";
import {
  ArrowRight, Check, ChevronDown, Clock3, Droplets, HeartHandshake,
  Home, MapPin, Menu, MessageCircle, Milk, Phone, ShoppingBasket,
  Sparkles, Store, Truck, UserRound, X
} from "lucide-react";
import { business, products, whatsappMessage } from "./data/business";

const callUrl = `tel:${business.phone}`;
const generalWhatsApp = whatsappMessage("Hello, I would like to place an order from Sardar Vallabh Bhai Patel Dairy.");

function WhatsAppButton({ children = "Order on WhatsApp", message = "Hello, I would like to place an order from Sardar Vallabh Bhai Patel Dairy.", className = "" }) {
  return <a className={`btn btn-whatsapp ${className}`} href={whatsappMessage(message)} target="_blank" rel="noreferrer">
    <MessageCircle size={18} /> {children}
  </a>;
}

function ProductCard({ product, index }) {
  return (
    <article className="product-card reveal" style={{ "--delay": `${index * 80}ms` }}>
      <div className="product-image">
        <img
          src={product.image}
          alt={`${product.name} from ${business.name}`}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=80"; }}
        />
        <span className="image-badge">Fresh</span>
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-actions">
          <span className="price-note">Contact for current price</span>
          <WhatsAppButton
            children="Order Now"
            message={`Hello, I would like to enquire about ${product.name}.`}
          />
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className={`navbar ${scrolled ? "compact" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark"><Milk size={22}/></span>
          <span><strong>Sardar Vallabh Bhai Patel</strong><small>Dairy</small></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["Home", "#home"], ["Our Products", "#products"], ["About Us", "#about"],
            ["Home Delivery", "#delivery"], ["Bulk Orders", "#bulk"], ["Contact", "#contact"]
          ].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <WhatsAppButton className="nav-order" message={generalWhatsApp.includes("text=") ? "Hello, I would like to place an order from Sardar Vallabh Bhai Patel Dairy." : ""}>Order Now</WhatsAppButton>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span>●</span> Local • Family-owned • Personal service</div>
              <h1>Pure Dairy Products,<br /><em>Made with Care.</em></h1>
              <p className="hero-text">Fresh Khoya, Paneer, Curd, Milk & Frozen Peas from Sardar Vallabh Bhai Patel Dairy, Baraula, Kaushambi.</p>
              <div className="hero-actions">
                <WhatsAppButton />
                <a className="btn btn-dark" href={callUrl}><Phone size={18}/> Call Now</a>
              </div>
              <a className="directions-link" href={business.maps} target="_blank" rel="noreferrer"><MapPin size={17}/> Get Directions <ArrowRight size={15}/></a>
              <div className="trust-row">
                <span><Check size={16}/> Fresh products</span>
                <span><Check size={16}/> Local delivery</span>
                <span><Check size={16}/> Bulk orders</span>
              </div>
            </div>
            <div className="hero-visual reveal">
              <div className="hero-card main-product">
                <img src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=85" alt="Fresh dairy products" />
                <div className="hero-image-caption"><span className="dot"></span><div><strong>Fresh & Local</strong><small>Prepared with care</small></div></div>
              </div>
              <div className="floating-card"><span className="float-icon"><HeartHandshake/></span><div><strong>Personal service</strong><small>Talk directly with Dinesh Singh</small></div></div>
            </div>
          </div>
          <a className="scroll-cue" href="#products"><span>Explore</span><ChevronDown size={18}/></a>
        </section>

        <section id="products" className="section products-section">
          <div className="container">
            <div className="section-heading reveal">
              <span className="kicker">WHAT WE OFFER</span>
              <h2>Our Fresh Products</h2>
              <p>Quality dairy products prepared with care for your family and your business.</p>
            </div>
            <div className="products-grid">{products.map((p, i) => <ProductCard key={p.name} product={p} index={i}/>)}</div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container">
            <div className="section-heading reveal"><span className="kicker">WHY US</span><h2>Simple values. Personal service.</h2></div>
            <div className="features-grid">
              {[
                [Sparkles, "Pure Products", "Our Khoya and Paneer are made with a focus on purity and quality."],
                [Droplets, "Fresh Dairy Products", "Fresh milk, paneer and curd are available for local customers."],
                [HeartHandshake, "Personal Service", "A family-run business where customers can communicate directly with the owner."],
                [Truck, "Home Delivery", "Home delivery is available within a reasonable nearby distance."],
                [ShoppingBasket, "Bulk Orders", "Bulk quantities can be arranged for businesses, functions and events."],
                [Store, "Local & Trusted", "Serving customers from Baraula and nearby areas."]
              ].map(([Icon, title, text], i) => <div className="feature-card reveal" style={{"--delay": `${i*60}ms`}} key={title}><div className="feature-icon"><Icon/></div><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="about-art reveal"><div className="about-image"><img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1000&q=85" alt="Milk being prepared and served" loading="lazy"/></div><div className="location-pill"><MapPin size={17}/><span>Baraula, Kaushambi<br/><small>Uttar Pradesh</small></span></div></div>
            <div className="about-copy reveal">
              <span className="kicker">ABOUT THE DAIRY</span>
              <h2>A Local Dairy Built on Trust</h2>
              <p>Sardar Vallabh Bhai Patel Dairy is a local dairy business based in Baraula, Post Nara, Kaushambi, Uttar Pradesh. The business focuses on providing fresh dairy products such as pure Khoya, Paneer, Curd and Milk, along with Frozen Peas.</p>
              <p>The dairy is owned by Dinesh Singh, a humble and hardworking person who believes in serving customers with honesty and care.</p>
              <p>Whether you need dairy products for your home, a restaurant, a sweet shop, a catering order or a family function, you can contact us directly to discuss your requirements.</p>
              <a className="text-link" href={callUrl}><Phone size={17}/> Talk to Dinesh Singh <ArrowRight size={16}/></a>
            </div>
          </div>
        </section>

        <section className="owner-section">
          <div className="container owner-card reveal">
            <div className="owner-placeholder"><UserRound size={52}/><span>Owner</span></div>
            <div><span className="kicker">MEET THE OWNER</span><h2>Dinesh Singh</h2><p className="owner-role">Owner, Sardar Vallabh Bhai Patel Dairy</p><p>With a simple approach to business and a focus on serving customers honestly, Dinesh Singh personally handles customer enquiries and orders.</p><div className="hero-actions"><a className="btn btn-dark" href={callUrl}><Phone size={17}/> Call Dinesh</a><WhatsAppButton children="WhatsApp Dinesh" /></div></div>
          </div>
        </section>

        <section id="delivery" className="section delivery-section">
          <div className="container delivery-card reveal">
            <div className="delivery-icon"><Truck/></div>
            <div><span className="kicker">HOME DELIVERY</span><h2>Freshness Delivered to Your Door</h2><p>We offer home delivery for customers within a reasonable nearby distance. Contact us with your location and requirements to check delivery availability.</p></div>
            <WhatsAppButton children="Check Delivery Availability" message="Hello, I would like to check home delivery availability for my location." />
          </div>
        </section>

        <section id="bulk" className="section bulk-section">
          <div className="container bulk-grid">
            <div className="bulk-copy reveal"><span className="kicker">FOR BUSINESSES & EVENTS</span><h2>Planning a Function or Need a Bulk Order?</h2><p>Bulk orders can be booked for weddings, family functions, religious events, catering, sweet shops, restaurants, local businesses and other large requirements.</p><div className="bulk-list">{["Weddings & family functions","Religious events & catering","Sweet shops & restaurants","Local businesses & large requirements"].map(x => <span key={x}><Check size={16}/>{x}</span>)}</div><div className="hero-actions"><WhatsAppButton children="Enquire About Bulk Orders" message="Hello, I would like to enquire about a bulk order from Sardar Vallabh Bhai Patel Dairy."/><a className="btn btn-outline" href={callUrl}><Phone size={17}/> Call Now</a></div></div>
            <div className="bulk-visual reveal"><div className="bulk-image"><img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80" alt="Indian food prepared for a gathering" loading="lazy"/></div><div className="bulk-note"><ShoppingBasket size={20}/><span><strong>Tell us what you need</strong><small>We'll discuss quantity, price and availability.</small></span></div></div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-heading reveal"><span className="kicker">HOW TO ORDER</span><h2>From your message to your order.</h2></div>
            <div className="steps">
              {[
                ["01","Choose Your Products","Select what you need."],
                ["02","Contact Us","Call or WhatsApp Dinesh Singh."],
                ["03","Confirm Your Order","Discuss quantity, price and delivery availability."],
                ["04","Receive Your Order","Collect it from the dairy or use home delivery if available in your area."]
              ].map(([n,t,d]) => <div className="step reveal" key={n}><span className="step-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="section location-section">
          <div className="container location-grid">
            <div className="location-copy reveal"><span className="kicker">FIND US</span><h2>Visit Sardar Vallabh Bhai Patel Dairy</h2><p className="address">{business.address.map(x => <span key={x}>{x}</span>)}</p><a className="btn btn-dark" href={business.maps} target="_blank" rel="noreferrer"><MapPin size={18}/> Get Directions</a></div>
            <div className="map-card reveal"><div className="map-pattern"><MapPin size={44}/><span>Baraula Village</span><small>Kaushambi, Uttar Pradesh</small><a href={business.maps} target="_blank" rel="noreferrer">Open in Google Maps <ArrowRight size={15}/></a></div></div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner reveal">
            <span className="kicker">GET IN TOUCH</span><h2>Need Fresh Dairy Products?<br/><em>Let's Talk.</em></h2>
            <p>For orders, home delivery enquiries and bulk requirements, contact us directly.</p>
            <div className="contact-person"><div className="contact-avatar"><UserRound/></div><div><strong>Dinesh Singh</strong><span>9628454491</span></div></div>
            <div className="contact-actions"><a className="btn btn-light" href={callUrl}><Phone size={18}/> Call Now</a><WhatsAppButton children="WhatsApp" /><a className="btn btn-ghost-light" href={business.maps} target="_blank" rel="noreferrer"><MapPin size={18}/> Get Directions</a></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div><a className="brand footer-brand" href="#home"><span className="brand-mark"><Milk size={21}/></span><span><strong>Sardar Vallabh Bhai Patel</strong><small>Dairy</small></span></a><p>Baraula, Post Nara, Kaushambi, Uttar Pradesh</p><a href={callUrl}>9628454491</a></div>
          <div><h4>Quick links</h4><div className="footer-links"><a href="#home">Home</a><a href="#products">Products</a><a href="#about">About</a><a href="#delivery">Delivery</a><a href="#bulk">Bulk Orders</a><a href="#contact">Contact</a></div></div>
          <div><h4>Order directly</h4><p>Call or WhatsApp Dinesh Singh for current prices, availability and delivery details.</p><WhatsAppButton children="Start a WhatsApp Chat" /></div>
        </div>
        <div className="container copyright"><span>© 2026 Sardar Vallabh Bhai Patel Dairy. All rights reserved.</span><span>Made for local customers, with care.</span></div>
      </footer>

      <a className="floating-wa" href={generalWhatsApp} target="_blank" rel="noreferrer" aria-label="Order on WhatsApp"><MessageCircle/></a>
      <div className="mobile-actions"><a href={callUrl}><Phone/><span>Call</span></a><a href={generalWhatsApp} target="_blank" rel="noreferrer"><MessageCircle/><span>WhatsApp</span></a><a href="#products"><ShoppingBasket/><span>Order</span></a></div>
    </div>
  );
}

export { App };