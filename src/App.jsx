import React, { useEffect, useState } from "react";
import {
  ArrowRight, Check, ChevronDown, Clock3, Droplets, HeartHandshake,
  Home, MapPin, Menu, MessageCircle, Milk, Phone, ShoppingBasket,
  Sparkles, Store, Truck, UserRound, X
} from "lucide-react";
import { business, products, whatsappMessage } from "./data/business";

const translations = {
  en: {
    brandLine1: "Sardar Vallabh Bhai Patel",
    brandLine2: "Dairy",
    buttonOrder: "Order Now",
    buttonCall: "Call Now",
    buttonDirections: "Get Directions",
    toggleLabel: "हिन्दी",
    nav: [
      { label: "Home", href: "#home" },
      { label: "Our Products", href: "#products" },
      { label: "About Us", href: "#about" },
      { label: "Home Delivery", href: "#delivery" },
      { label: "Bulk Orders", href: "#bulk" },
      { label: "Contact", href: "#contact" }
    ],
    heroEyebrow: "Local • Family-owned • Personal service",
    heroTitle1: "Pure Dairy Products,",
    heroTitle2: "Made with Care.",
    heroText: "Fresh Khoya, Paneer, Curd, Milk & Frozen Peas from Sardar Vallabh Bhai Patel Dairy, Baraula, Kaushambi.",
    trust: ["Fresh products", "Local delivery", "Bulk orders"],
    explore: "Explore",
    offerKicker: "WHAT WE OFFER",
    offerTitle: "Our Fresh Products",
    offerText: "Quality dairy products prepared with care for your family and your business.",
    priceNote: "Contact for current price",
    freshBadge: "Fresh",
    whyKicker: "WHY US",
    whyTitle: "Simple values. Personal service.",
    aboutKicker: "ABOUT THE DAIRY",
    aboutTitle: "A Local Dairy Built on Trust",
    aboutP1: "Sardar Vallabh Bhai Patel Dairy is a local dairy business based in Baraula, Post Nara, Kaushambi, Uttar Pradesh. The business focuses on providing fresh dairy products such as pure Khoya, Paneer, Curd and Milk, along with Frozen Peas.",
    aboutP2: "The dairy is owned by Dinesh Singh, a humble and hardworking person who believes in serving customers with honesty and care.",
    aboutP3: "Whether you need dairy products for your home, a restaurant, a sweet shop, a catering order or a family function, you can contact us directly to discuss your requirements.",
    talkTo: "Talk to Dinesh Singh",
    ownerLabel: "Owner",
    ownerKicker: "MEET THE OWNER",
    ownerTitle: "Dinesh Singh",
    ownerRole: "Owner, Sardar Vallabh Bhai Patel Dairy",
    ownerText: "With a simple approach to business and a focus on serving customers honestly, Dinesh Singh personally handles customer enquiries and orders.",
    ownerButton: "WhatsApp Dinesh",
    deliveryKicker: "HOME DELIVERY",
    deliveryTitle: "Freshness Delivered to Your Door",
    deliveryText: "We offer home delivery for customers within a reasonable nearby distance. Contact us with your location and requirements to check delivery availability.",
    deliveryButton: "Check Delivery Availability",
    bulkKicker: "FOR BUSINESSES & EVENTS",
    bulkTitle: "Planning a Function or Need a Bulk Order?",
    bulkText: "Bulk orders can be booked for weddings, family functions, religious events, catering, sweet shops, restaurants, local businesses and other large requirements.",
    bulkList: ["Weddings & family functions", "Religious events & catering", "Sweet shops & restaurants", "Local businesses & large requirements"],
    bulkButton: "Enquire About Bulk Orders",
    bulkNoteTitle: "Tell us what you need",
    bulkNoteSub: "We'll discuss quantity, price and availability.",
    processKicker: "HOW TO ORDER",
    processTitle: "From your message to your order.",
    processSteps: [
      ["01", "Choose Your Products", "Select what you need."],
      ["02", "Contact Us", "Call or WhatsApp Dinesh Singh."],
      ["03", "Confirm Your Order", "Discuss quantity, price and delivery availability."],
      ["04", "Receive Your Order", "Collect it from the dairy or use home delivery if available in your area."]
    ],
    findKicker: "FIND US",
    findTitle: "Visit Sardar Vallabh Bhai Patel Dairy",
    mapsLink: "Open in Google Maps",
    contactKicker: "GET IN TOUCH",
    contactTitle: "Need Fresh Dairy Products?",
    contactAccent: "Let's Talk.",
    contactText: "For orders, home delivery enquiries and bulk requirements, contact us directly.",
    contactButton: "WhatsApp",
    quickLinksTitle: "Quick links",
    orderDirectTitle: "Order directly",
    footerNote: "Call or WhatsApp Dinesh Singh for current prices, availability and delivery details.",
    footerChat: "Start a WhatsApp Chat",
    copyrightMain: "© 2026 Sardar Vallabh Bhai Patel Dairy. All rights reserved.",
    copyrightSub: "Made for local customers, with care.",
    whatsappOrder: "Hello, I would like to place an order from Sardar Vallabh Bhai Patel Dairy.",
    productBadge: "Fresh",
    productNote: "Contact for current price"
  },
  hi: {
    brandLine1: "सरदार वल्लभ भाई पटेल",
    brandLine2: "डेयरी",
    buttonOrder: "अभी ऑर्डर करें",
    buttonCall: "अभी कॉल करें",
    buttonDirections: "दिशा-निर्देश",
    toggleLabel: "EN",
    nav: [
      { label: "होम", href: "#home" },
      { label: "हमारे उत्पाद", href: "#products" },
      { label: "हमारे बारे में", href: "#about" },
      { label: "होम डिलीवरी", href: "#delivery" },
      { label: "बल्क ऑर्डर", href: "#bulk" },
      { label: "संपर्क", href: "#contact" }
    ],
    heroEyebrow: "लोकल • परिवार-आधारित • निजी सेवा",
    heroTitle1: "शुद्ध डेयरी उत्पाद,",
    heroTitle2: "प्यार से तैयार।",
    heroText: "सरदार वल्लभ भाई पटेल डेयरी, बरौला, कौशांबी से ताज़ा खोया, पनीर, दही, दूध और फ्रीज़्ड मटर।",
    trust: ["ताज़ा उत्पाद", "स्थानीय डिलीवरी", "बल्क ऑर्डर"],
    explore: "अन्वेषण करें",
    offerKicker: "हम क्या देते हैं",
    offerTitle: "हमारे ताज़ा उत्पाद",
    offerText: "गुणवत्तापूर्ण डेयरी उत्पाद आपके परिवार और व्यवसाय के लिए सावधानी से तैयार किए जाते हैं।",
    priceNote: "वर्तमान कीमत के लिए संपर्क करें",
    freshBadge: "ताज़ा",
    whyKicker: "हम क्यों",
    whyTitle: "सरल मूल्यों. निजी सेवा.",
    aboutKicker: "डेयरी के बारे में",
    aboutTitle: "विश्वास पर आधारित स्थानीय डेयरी",
    aboutP1: "सरदार वल्लभ भाई पटेल डेयरी बरौला, पोस्ट नारा, कौशांबी, उत्तर प्रदेश में स्थित एक स्थानीय डेयरी है। यह शुद्ध खोया, पनीर, दही, दूध और फ्रीज़्ड मटर जैसी ताज़ा डेयरी वस्तुओं की आपूर्ति पर ध्यान केंद्रित करती है।",
    aboutP2: "यह डेयरी दिनेश सिंह के स्वामित्व में है, जो ईमानदारी और सेवा के साथ ग्राहकों की आवश्यकताओं को पूरा करने में विश्वास रखते हैं।",
    aboutP3: "चाहे आपको अपने घर, रेस्तराँ, मिठाई की दुकान, कैटरिंग ऑर्डर या पारिवारिक समारोह के लिए डेयरी उत्पाद चाहिए हों, आप सीधे संपर्क करके अपनी आवश्यकताएँ पूछ सकते हैं।",
    talkTo: "दिनेश सिंह से बात करें",
    ownerLabel: "मालिक",
    ownerKicker: "मालिक से मिलें",
    ownerTitle: "दिनेश सिंह",
    ownerRole: "मालिक, सरदार वल्लभ भाई पटेल डेयरी",
    ownerText: "व्यवसाय में सरल दृष्टिकोण और ईमानदारी के साथ सेवा करने की भावना के कारण दिनेश सिंह ग्राहकों की पूछताछ और ऑर्डर व्यक्तिगत रूप से संभालते हैं।",
    ownerButton: "दिनेश से WhatsApp",
    deliveryKicker: "होम डिलीवरी",
    deliveryTitle: "ताज़ा उत्पाद आपके दरवाज़े तक",
    deliveryText: "हम आस-पास के ग्राहकों के लिए होम डिलीवरी प्रदान करते हैं। अपने स्थान और आवश्यकताओं के बारे में बताइए ताकि डिलीवरी उपलब्धता की जानकारी मिल सके।",
    deliveryButton: "डिलीवरी उपलब्धता देखें",
    bulkKicker: "व्यवसायों और कार्यक्रमों के लिए",
    bulkTitle: "कार्यक्रम की योजना है या बल्क ऑर्डर चाहिए?",
    bulkText: "विवाह, पारिवारिक समारोह, धार्मिक कार्यक्रम, कैटरिंग, मिठाई की दुकानें, रेस्तराँ, स्थानीय व्यवसायों और बड़े ऑर्डर के लिए बल्क ऑर्डर दिए जा सकते हैं।",
    bulkList: ["विवाह और पारिवारिक समारोह", "धार्मिक कार्यक्रम और कैटरिंग", "मिठाई की दुकानें और रेस्तराँ", "स्थानीय व्यवसाय और बड़े ऑर्डर"],
    bulkButton: "बल्क ऑर्डर के लिए पूछें",
    bulkNoteTitle: "हमें बताइए क्या चाहिए",
    bulkNoteSub: "हम मात्रा, कीमत और उपलब्धता पर चर्चा करेंगे।",
    processKicker: "ऑर्डर कैसे करें",
    processTitle: "आपके संदेश से आपके ऑर्डर तक।",
    processSteps: [
      ["01", "अपना उत्पाद चुनें", "जिस चीज़ की ज़रूरत है उसे चुनें।"],
      ["02", "संपर्क करें", "दिनेश सिंह को कॉल या WhatsApp करें।"],
      ["03", "ऑर्डर की पुष्टि करें", "मात्रा, कीमत और डिलीवरी उपलब्धता पर चर्चा करें।"],
      ["04", "ऑर्डर प्राप्त करें", "डेयरी से ले लें या आपके क्षेत्र में उपलब्ध हो तो होम डिलीवरी लें।"]
    ],
    findKicker: "हमें ढूँढ़ें",
    findTitle: "सरदार वल्लभ भाई पटेल डेयरी जाएँ",
    mapsLink: "Google Maps में खोलें",
    contactKicker: "संपर्क करें",
    contactTitle: "ताज़ा डेयरी उत्पाद चाहिए?",
    contactAccent: "आइए बात करें।",
    contactText: "ऑर्डर, होम डिलीवरी और बल्क आवश्यकताओं के लिए सीधे संपर्क करें।",
    contactButton: "WhatsApp",
    quickLinksTitle: "त्वरित लिंक",
    orderDirectTitle: "सीधे ऑर्डर करें",
    footerNote: "वर्तमान कीमत, उपलब्धता और डिलीवरी की जानकारी के लिए दिनेश सिंह से कॉल या WhatsApp करें।",
    footerChat: "WhatsApp चैट शुरू करें",
    copyrightMain: "© 2026 सरदार वल्लभ भाई पटेल डेयरी। सर्वाधिकार सुरक्षित।",
    copyrightSub: "स्थानीय ग्राहकों के लिए, प्यार से बनाया गया।",
    whatsappOrder: "नमस्कार, मैं सरदार वल्लभ भाई पटेल डेयरी से ऑर्डर देना चाहता हूँ।",
    productBadge: "ताज़ा",
    productNote: "वर्तमान कीमत के लिए संपर्क करें"
  }
};

const callUrl = `tel:${business.phone}`;

function WhatsAppButton({ children = "Order on WhatsApp", message = "Hello, I would like to place an order from Sardar Vallabh Bhai Patel Dairy.", className = "" }) {
  return <a className={`btn btn-whatsapp ${className}`} href={whatsappMessage(message)} target="_blank" rel="noreferrer">
    <MessageCircle size={18} /> {children}
  </a>;
}

function ProductCard({ product, index, language }) {
  const copy = translations[language];
  const productMessage = language === "hi"
    ? `नमस्कार, मैं ${product.name} के बारे में जानकारी चाहता हूँ।`
    : `Hello, I would like to enquire about ${product.name}.`;

  return (
    <article className="product-card reveal" style={{ "--delay": `${index * 80}ms` }}>
      <div className="product-image">
        <img
          src={product.image}
          alt={`${product.name} from ${business.name}`}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=900&q=80"; }}
        />
        <span className="image-badge">{copy.freshBadge}</span>
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-actions">
          <span className="price-note">{copy.priceNote}</span>
          <WhatsAppButton
            children={copy.buttonOrder}
            message={productMessage}
          />
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("en");
  const copy = translations[language];
  const generalWhatsApp = whatsappMessage(copy.whatsappOrder);

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
  const switchLanguage = () => setLanguage(current => current === "en" ? "hi" : "en");

  return (
    <div className="site">
      <header className={`navbar ${scrolled ? "compact" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark"><Milk size={22}/></span>
          <span><strong>{copy.brandLine1}</strong><small>{copy.brandLine2}</small></span>
        </a>
        <div className="header-actions">
          <button className="lang-toggle" type="button" onClick={switchLanguage} aria-label="Toggle language">
            {copy.toggleLabel}
          </button>
          <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {copy.nav.map(({ label, href }) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <WhatsAppButton className="nav-order" message={copy.whatsappOrder}>{copy.buttonOrder}</WhatsAppButton>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span>●</span> {copy.heroEyebrow}</div>
              <h1>{copy.heroTitle1}<br /><em>{copy.heroTitle2}</em></h1>
              <p className="hero-text">{copy.heroText}</p>
              <div className="hero-actions">
                <WhatsAppButton message={copy.whatsappOrder}>{copy.buttonOrder}</WhatsAppButton>
                <a className="btn btn-dark" href={callUrl}><Phone size={18}/> {copy.buttonCall}</a>
              </div>
              <a className="directions-link" href={business.maps} target="_blank" rel="noreferrer"><MapPin size={17}/> {copy.buttonDirections} <ArrowRight size={15}/></a>
              <div className="trust-row">
                {copy.trust.map(item => <span key={item}><Check size={16}/> {item}</span>)}
              </div>
            </div>
            <div className="hero-visual reveal">
              <div className="hero-card main-product">
                <img src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=85" alt="Fresh dairy products" />
                <div className="hero-image-caption"><span className="dot"></span><div><strong>{language === "hi" ? "ताज़ा और स्थानीय" : "Fresh & Local"}</strong><small>{language === "hi" ? "सावधानी से तैयार" : "Prepared with care"}</small></div></div>
              </div>
              <div className="floating-card"><span className="float-icon"><HeartHandshake/></span><div><strong>{language === "hi" ? "निजी सेवा" : "Personal service"}</strong><small>{language === "hi" ? "दिनेश सिंह से सीधे बात करें" : "Talk directly with Dinesh Singh"}</small></div></div>
            </div>
          </div>
          <a className="scroll-cue" href="#products"><span>{copy.explore}</span><ChevronDown size={18}/></a>
        </section>

        <section id="products" className="section products-section">
          <div className="container">
            <div className="section-heading reveal">
              <span className="kicker">{copy.offerKicker}</span>
              <h2>{copy.offerTitle}</h2>
              <p>{copy.offerText}</p>
            </div>
            <div className="products-grid">{products.map((p, i) => <ProductCard key={p.name} product={p} index={i} language={language} />)}</div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container">
            <div className="section-heading reveal"><span className="kicker">{copy.whyKicker}</span><h2>{copy.whyTitle}</h2></div>
            <div className="features-grid">
              {[
                [Sparkles, language === "hi" ? "शुद्ध उत्पाद" : "Pure Products", language === "hi" ? "हमारा खोया और पनीर शुद्धता और गुणवत्ता पर ध्यान देते हुए बनाया जाता है।" : "Our Khoya and Paneer are made with a focus on purity and quality."],
                [Droplets, language === "hi" ? "ताज़ा डेयरी उत्पाद" : "Fresh Dairy Products", language === "hi" ? "स्थानीय ग्राहकों के लिए ताज़ा दूध, पनीर और दही उपलब्ध हैं।" : "Fresh milk, paneer and curd are available for local customers."],
                [HeartHandshake, language === "hi" ? "निजी सेवा" : "Personal Service", language === "hi" ? "एक पारिवारिक व्यवसाय जहाँ ग्राहक सीधे मालिक से संपर्क कर सकते हैं।" : "A family-run business where customers can communicate directly with the owner."],
                [Truck, language === "hi" ? "होम डिलीवरी" : "Home Delivery", language === "hi" ? "यथासंभव निकट स्थान पर होम डिलीवरी उपलब्ध है।" : "Home delivery is available within a reasonable nearby distance."],
                [ShoppingBasket, language === "hi" ? "बल्क ऑर्डर" : "Bulk Orders", language === "hi" ? "व्यवसाय, समारोह और कार्यक्रमों के लिए बल्क मात्रा व्यवस्थित की जा सकती है।" : "Bulk quantities can be arranged for businesses, functions and events."],
                [Store, language === "hi" ? "स्थानीय और भरोसेमंद" : "Local & Trusted", language === "hi" ? "बरौला और आसपास के क्षेत्रों के ग्राहकों की सेवा।" : "Serving customers from Baraula and nearby areas."]
              ].map(([Icon, title, text], i) => <div className="feature-card reveal" style={{"--delay": `${i*60}ms`}} key={title}><div className="feature-icon"><Icon/></div><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div className="about-art reveal"><div className="about-image"><img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1000&q=85" alt="Milk being prepared and served" loading="lazy"/></div><div className="location-pill"><MapPin size={17}/><span>{language === "hi" ? "बरौला, कौशांबी" : "Baraula, Kaushambi"}<br/><small>{language === "hi" ? "उत्तर प्रदेश" : "Uttar Pradesh"}</small></span></div></div>
            <div className="about-copy reveal">
              <span className="kicker">{copy.aboutKicker}</span>
              <h2>{copy.aboutTitle}</h2>
              <p>{copy.aboutP1}</p>
              <p>{copy.aboutP2}</p>
              <p>{copy.aboutP3}</p>
              <a className="text-link" href={callUrl}><Phone size={17}/> {copy.talkTo} <ArrowRight size={16}/></a>
            </div>
          </div>
        </section>

        <section className="owner-section">
          <div className="container owner-card reveal">
            <div className="owner-placeholder"><UserRound size={52}/><span>{copy.ownerLabel}</span></div>
            <div><span className="kicker">{copy.ownerKicker}</span><h2>{copy.ownerTitle}</h2><p className="owner-role">{copy.ownerRole}</p><p>{copy.ownerText}</p><div className="hero-actions"><a className="btn btn-dark" href={callUrl}><Phone size={17}/> {copy.buttonCall}</a><WhatsAppButton>{copy.ownerButton}</WhatsAppButton></div></div>
          </div>
        </section>

        <section id="delivery" className="section delivery-section">
          <div className="container delivery-card reveal">
            <div className="delivery-icon"><Truck/></div>
            <div><span className="kicker">{copy.deliveryKicker}</span><h2>{copy.deliveryTitle}</h2><p>{copy.deliveryText}</p></div>
            <WhatsAppButton>{copy.deliveryButton}</WhatsAppButton>
          </div>
        </section>

        <section id="bulk" className="section bulk-section">
          <div className="container bulk-grid">
            <div className="bulk-copy reveal"><span className="kicker">{copy.bulkKicker}</span><h2>{copy.bulkTitle}</h2><p>{copy.bulkText}</p><div className="bulk-list">{copy.bulkList.map(x => <span key={x}><Check size={16}/>{x}</span>)}</div><div className="hero-actions"><WhatsAppButton>{copy.bulkButton}</WhatsAppButton><a className="btn btn-outline" href={callUrl}><Phone size={17}/> {copy.buttonCall}</a></div></div>
            <div className="bulk-visual reveal"><div className="bulk-image"><img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80" alt="Indian food prepared for a gathering" loading="lazy"/></div><div className="bulk-note"><ShoppingBasket size={20}/><span><strong>{copy.bulkNoteTitle}</strong><small>{copy.bulkNoteSub}</small></span></div></div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <div className="section-heading reveal"><span className="kicker">{copy.processKicker}</span><h2>{copy.processTitle}</h2></div>
            <div className="steps">
              {copy.processSteps.map(([n,t,d]) => <div className="step reveal" key={n}><span className="step-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="section location-section">
          <div className="container location-grid">
            <div className="location-copy reveal"><span className="kicker">{copy.findKicker}</span><h2>{copy.findTitle}</h2><p className="address">{business.address.map(x => <span key={x}>{x}</span>)}</p><a className="btn btn-dark" href={business.maps} target="_blank" rel="noreferrer"><MapPin size={18}/> {copy.buttonDirections}</a></div>
            <div className="map-card reveal"><div className="map-pattern"><MapPin size={44}/><span>{language === "hi" ? "बरौला गाँव" : "Baraula Village"}</span><small>{language === "hi" ? "कौशांबी, उत्तर प्रदेश" : "Kaushambi, Uttar Pradesh"}</small><a href={business.maps} target="_blank" rel="noreferrer">{copy.mapsLink} <ArrowRight size={15}/></a></div></div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner reveal">
            <span className="kicker">{copy.contactKicker}</span><h2>{copy.contactTitle}<br/><em>{copy.contactAccent}</em></h2>
            <p>{copy.contactText}</p>
            <div className="contact-person"><div className="contact-avatar"><UserRound/></div><div><strong>Dinesh Singh</strong><span>9628454491</span></div></div>
            <div className="contact-actions"><a className="btn btn-light" href={callUrl}><Phone size={18}/> {copy.buttonCall}</a><WhatsAppButton>{copy.contactButton}</WhatsAppButton><a className="btn btn-ghost-light" href={business.maps} target="_blank" rel="noreferrer"><MapPin size={18}/> {copy.buttonDirections}</a></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div><a className="brand footer-brand" href="#home"><span className="brand-mark"><Milk size={21}/></span><span><strong>{copy.brandLine1}</strong><small>{copy.brandLine2}</small></span></a><p>{language === "hi" ? "बरौला, पोस्ट नारा, कौशांबी, उत्तर प्रदेश" : "Baraula, Post Nara, Kaushambi, Uttar Pradesh"}</p><a href={callUrl}>9628454491</a></div>
          <div><h4>{copy.quickLinksTitle}</h4><div className="footer-links">{copy.nav.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}</div></div>
          <div><h4>{copy.orderDirectTitle}</h4><p>{copy.footerNote}</p><WhatsAppButton>{copy.footerChat}</WhatsAppButton></div>
        </div>
        <div className="container copyright"><span>{copy.copyrightMain}</span><span>{copy.copyrightSub}</span></div>
      </footer>

      <a className="floating-wa" href={generalWhatsApp} target="_blank" rel="noreferrer" aria-label="Order on WhatsApp"><MessageCircle/></a>
      <div className="mobile-actions"><a href={callUrl}><Phone/><span>{copy.buttonCall}</span></a><a href={generalWhatsApp} target="_blank" rel="noreferrer"><MessageCircle/><span>{copy.contactButton}</span></a><a href="#products"><ShoppingBasket/><span>{copy.buttonOrder}</span></a></div>
    </div>
  );
}

export { App };