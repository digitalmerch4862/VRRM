/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, FormEvent } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Utensils, 
  ShoppingBag, 
  Star, 
  ChevronRight, 
  ExternalLink,
  ChefHat,
  ShieldCheck,
  MessageCircle,
  MessageSquare,
  Send,
  X,
  User,
  Bot
} from 'lucide-react';
import { motion } from 'motion/react';

const BUSINESS_NAME = "VRRM FOOD HOUSE";
const LOGO_IMAGE = "https://picsum.photos/seed/pizza-icon/200/200";
const PHONE_NUMBER = "+639266137337";
const ADDRESS = "Mabuhay City, Phase 1 Paoay St, Cabuyao City, 4025 Laguna, Philippines";
const MAP_LINK = "https://maps.app.goo.gl/SM8gqvenfNNYRHyg9";

const HERO_IMAGE = "https://picsum.photos/seed/spaghetti-luxury/1920/1080";

const GALLERY_IMAGES = [
  "https://picsum.photos/seed/spaghetti-meatballs/800/800",
  "https://picsum.photos/seed/pizza-oven/800/800",
  "https://picsum.photos/seed/spaghetti-carbonara/800/800",
  "https://picsum.photos/seed/pizza-slice-luxury/800/800",
  "https://picsum.photos/seed/spaghetti-pesto/800/800",
  "https://picsum.photos/seed/pizza-supreme/800/800",
];

const TESTIMONIALS = [
  {
    name: "Juan Dela Cruz",
    review: "Napakasarap ng pagkain dito sa VRRM Food House! Sulit na sulit ang bawat kagat. Ang ganda pa ng ambiance, talagang premium ang pakiramdam. Highly recommended!",
    rating: 5
  },
  {
    name: "Maria Clara",
    review: "The best experience ever! Sobrang bait ng mga staff at napakabilis ng service. Ang sasarap ng mga putahe, babalik-balikan mo talaga. 5 stars!",
    rating: 5
  },
  {
    name: "Ricardo Dalisay",
    review: "Talagang world-class ang lasa ng mga pagkain dito. Fresh na fresh ang ingredients at napakaganda ng presentation. Perfect para sa mga special occasions. Solid!",
    rating: 5
  }
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-luxury-black/80 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_IMAGE} 
              alt="VRRM Logo" 
              className="w-12 h-12 rounded-full object-cover border border-gold/30 shadow-lg shadow-gold/10"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif text-xl tracking-widest gold-text-gradient font-bold">
              {BUSINESS_NAME}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 font-medium"
            >
              <Phone size={18} />
              <span>{PHONE_NUMBER}</span>
            </a>
            <a 
              href="https://www.facebook.com/VRRMfoods/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gold hover:text-white transition-colors"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGE} 
            alt="VRRM Food House Hero" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Authentic Flavors in Cabuyao</span>
            </div>
            <motion.h1 
              whileHover={{ scale: 1.02, textShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
              className="text-6xl md:text-8xl font-serif mb-6 leading-tight cursor-default transition-all duration-300"
            >
              Savor the <span className="gold-text-gradient italic">Excellence</span> <br />
              of VRRM Foods.
            </motion.h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Discover a world of premium culinary delights. From our kitchen to your table, 
              we bring the finest local flavors with a touch of luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="gold-gradient text-black px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-gold/20"
              >
                <Phone size={20} />
                Call to Order
              </a>
              <a 
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/20 backdrop-blur-md px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                <MapPin size={20} />
                Visit Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-luxury-gray relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Services</h2>
            <div className="h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Dine-In",
                desc: "Experience our warm hospitality and elegant atmosphere in the heart of Mabuhay City.",
                icon: <Utensils className="text-gold" size={32} />,
              },
              {
                title: "Gourmet Takeout",
                desc: "Enjoy our signature dishes from the comfort of your home with our premium takeout service.",
                icon: <ShoppingBag className="text-gold" size={32} />,
              },
              {
                title: "Special Events",
                desc: "Make your celebrations unforgettable with our customized catering and event services.",
                icon: <ChefHat className="text-gold" size={32} />,
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.15)" }}
                className="luxury-card p-8 flex flex-col items-center text-center group"
              >
                <div className="mb-6 p-4 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Product Showcase</h2>
            <p className="text-gray-400">A glimpse into our culinary creations</p>
            <div className="h-1 w-20 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)" }}
                className="aspect-square rounded-lg overflow-hidden border border-gold/20 group cursor-pointer transition-all duration-300"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-luxury-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={GALLERY_IMAGES[0]} 
                alt="VRRM Food House Interior" 
                className="rounded-lg shadow-2xl luxury-border w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-lg hidden md:block">
                <p className="text-black font-serif text-2xl italic">"Taste the Passion."</p>
              </div>
            </div>
            <div>
              <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Crafting Memories Through Food</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                VRRM FOOD HOUSE was born from a love for authentic local flavors and a desire to provide a premium dining experience to the Cabuyao community. 
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Every dish we serve is a testament to our commitment to quality, using only the freshest ingredients and traditional techniques with a modern twist.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-gold shrink-0" size={24} />
                  <div>
                    <h4 className="font-serif text-xl">Quality First</h4>
                    <p className="text-sm text-gray-500">Fresh and safe food.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="text-gold shrink-0" size={24} />
                  <div>
                    <h4 className="font-serif text-xl">Top Rated</h4>
                    <p className="text-sm text-gray-500">Loved by locals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">What Our Guests Say</h2>
            <div className="h-1 w-20 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, scale: 1.02, boxShadow: "0 15px 30px rgba(212, 175, 55, 0.1)" }}
                className="luxury-card p-8 flex flex-col h-full"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 flex-grow">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                    {t.name[0]}
                  </div>
                  <span className="font-serif text-lg">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Reassurance Section */}
      <section className="py-20 bg-luxury-gray border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gold font-serif text-4xl">100%</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Fresh Ingredients</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-gold font-serif text-4xl">Premium</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Dining Experience</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-gold font-serif text-4xl">Local</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Cabuyao Pride</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-gold font-serif text-4xl">Expert</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">Culinary Team</span>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Visit Us</h2>
            <p className="text-gray-400">Find us in the heart of Mabuhay City</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 h-[400px] rounded-lg overflow-hidden luxury-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.452601955353!2d121.1215!3d14.2585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d09930f3c5b5%3A0x88f56113b5e5f5f5!2sMabuhay%20City%2C%20Cabuyao%2C%20Laguna!5e0!3m2!1sen!2sph!4v1711440000000!5m2!1sen!2sph" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="luxury-card p-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-gold/10 text-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Our Address</h4>
                    <p className="text-gray-400 leading-relaxed">
                      {ADDRESS}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-gold/10 text-gold">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Opening Hours</h4>
                    <p className="text-gray-400">Monday - Sunday: 10:00 AM - 9:00 PM</p>
                  </div>
                </div>
                <a 
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 border border-gold text-gold rounded-full flex items-center justify-center gap-2 hover:bg-gold hover:text-black transition-all"
                >
                  Open in Google Maps
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 bg-luxury-gray relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif mb-8">Ready to <span className="gold-text-gradient italic">Experience</span> VRRM?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Join us for an unforgettable dining experience or order your favorite dishes for delivery. 
            We are dedicated to bringing you the best flavors in Cabuyao.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.2)" }}
              href={`tel:${PHONE_NUMBER}`}
              className="luxury-card p-6 flex items-center justify-center gap-4 hover:border-gold transition-colors group"
            >
              <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-all">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-500">Call Us</p>
                <p className="text-xl font-serif">{PHONE_NUMBER}</p>
              </div>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.2)" }}
              href="https://www.facebook.com/VRRMfoods/"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-card p-6 flex items-center justify-center gap-4 hover:border-gold transition-colors group"
            >
              <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-black transition-all">
                <MessageCircle size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-500">Facebook</p>
                <p className="text-xl font-serif">VRRM Foods</p>
              </div>
            </motion.a>
          </div>

          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="gold-gradient text-black px-16 py-6 rounded-full font-bold text-2xl inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl shadow-gold/30"
          >
            <Phone size={28} />
            Order Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-luxury-black border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img 
                src={LOGO_IMAGE} 
                alt="VRRM Logo" 
                className="w-10 h-10 rounded-full object-cover border border-gold/20"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-lg tracking-widest gold-text-gradient font-bold">
                {BUSINESS_NAME}
              </span>
            </div>
            
            <div className="flex gap-8 text-gray-500 text-sm uppercase tracking-widest">
              <a href="#home" className="hover:text-gold transition-colors">Home</a>
              <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
              <a href="#testimonials" className="hover:text-gold transition-colors">Reviews</a>
              <a href="#about" className="hover:text-gold transition-colors">About</a>
              <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
            </div>

            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-600 text-xs max-w-2xl mx-auto">
              {ADDRESS}
            </p>
          </div>
        </div>
      </footer>
      <ChatBot />
    </div>
  );
}

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Welcome to VRRM FOOD HOUSE. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Dummy AI Response
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: getBotResponse(inputValue), 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('menu') || lowerInput.includes('food')) {
      return "You can check our menu in the Gallery section! We offer a variety of premium local dishes.";
    } else if (lowerInput.includes('order') || lowerInput.includes('buy')) {
      return "To place an order, you can call us at " + PHONE_NUMBER + " or message us on Facebook!";
    } else if (lowerInput.includes('location') || lowerInput.includes('where')) {
      return "We are located at " + ADDRESS + ". You can find the map link in the Contact section.";
    } else if (lowerInput.includes('hours') || lowerInput.includes('time')) {
      return "We are open daily from 10:00 AM to 9:00 PM.";
    } else {
      return "Thank you for your message! One of our team members will get back to you soon. For immediate assistance, please call us at " + PHONE_NUMBER + ".";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <div className="relative">
        {isOpen && (
          <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full animate-pulse pointer-events-none" />
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            scale: isOpen ? 1 : 0.8, 
            y: isOpen ? 0 : 20,
            pointerEvents: isOpen ? 'auto' : 'none'
          }}
          className="absolute bottom-20 right-0 w-80 sm:w-96 bg-luxury-gray border border-gold/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
        >
        {/* Header */}
        <div className="gold-gradient p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
              <Bot className="text-black" size={24} />
            </div>
            <div>
              <h3 className="text-black font-bold text-sm">VRRM AI Assistant</h3>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-black/70 text-[10px] uppercase font-bold tracking-wider">Online</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-black/50 hover:text-black transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gold/20">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.sender === 'user' ? 'bg-gold/20' : 'bg-white/5 border border-gold/20'}`}>
                  {msg.sender === 'user' ? <User size={16} className="text-gold" /> : <Bot size={16} className="text-gold" />}
                </div>
                <div className={`p-3 rounded-2xl text-sm ${
                  msg.sender === 'user' 
                    ? 'bg-gold text-black rounded-tr-none' 
                    : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-black/20">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 pr-12 text-sm focus:outline-none focus:border-gold/50 transition-colors"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full gold-gradient flex items-center justify-center text-black hover:scale-110 transition-transform"
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </motion.div>
      </div>

      {/* Toggle Button */}
      <div className="relative">
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl animate-pulse" />
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full gold-gradient flex items-center justify-center text-black shadow-2xl transition-all duration-300 ${!isOpen ? 'glow-pulse' : ''}`}
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </motion.button>
      </div>
    </div>
  );
}
