'use client'

import React, { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Mail } from 'lucide-react';

export default function PortfolioSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const projects = [
    {
      name: 'Landing Page Startup',
      category: 'Landing Page',
      image: '🚀',
      description: 'Site de conversion pour tech startup'
    },
    {
      name: 'Site Vitrine Restaurant',
      category: 'Vitrine',
      image: '🍽️',
      description: 'Menu, photos, réservations'
    },
    {
      name: 'Portfolio Freelancer',
      category: 'Portfolio',
      image: '✨',
      description: 'Showcase de travaux + blog'
    },
    {
      name: 'E-commerce Mini',
      category: 'Shop',
      image: '🛍️',
      description: 'Boutique 5-20 produits'
    }
  ];

  const services = [
    {
      title: 'Landing Page',
      price: '400-800$',
      features: ['Une page optimisée', 'Formulaire de contact', 'Mobile-friendly', 'Rapide à charger']
    },
    {
      title: 'Site Vitrine',
      price: '800-1500$',
      features: ['3-5 pages', 'Design professionnel', 'SEO de base', 'Admin simple']
    },
    {
      title: 'E-commerce',
      price: '1500-2500$',
      features: ['Système de paiement', 'Gestion produits', 'Sécurisé', 'Inventory']
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dion',
      business: 'Salon de coiffure, Montréal',
      text: 'Super rapide, professionnel, et à un bon prix. Les clients trouvent mon salon maintenant!'
    },
    {
      name: 'Jean-Paul Bélair',
      business: 'Plomberie, Côte-des-Neiges',
      text: 'J\'ai doublé mes appels grâce au site. Vraiment satisfait!'
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <img 
  src="/logo-ezrah-robot.svg" 
  alt="Ezrah Logo" 
  className="h-10 w-10"
/>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-sm text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#projects" className="text-sm text-gray-700 hover:text-blue-600 transition">Projets</a>
            <a href="#contact" className="text-sm text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3">
            <a href="#services" className="block text-sm text-gray-700 hover:text-blue-600">Services</a>
            <a href="#projects" className="block text-sm text-gray-700 hover:text-blue-600">Projets</a>
            <a href="#contact" className="block text-sm text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Basé au Québec 🍁
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sites web rapides<br />pour ton business
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tu as un commerce, un service ou une petite entreprise? Je crée des sites web modernes, rapides et abordables pour attirer des clients.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2">
              Commencer <ArrowRight size={20} />
            </a>
            <a href="#projects" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition">
              Voir les projets
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Services & Prix</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">{service.price}</div>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex gap-3 text-gray-700">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Exemples de projets</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{project.image}</div>
                <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Ce que disent les clients</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <div key={j} className="text-yellow-400">⭐</div>)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Prêt à lancer ton site?</h2>
          <p className="text-lg mb-8 opacity-90">Ecris-moi un message, on discute de ton projet et je te fais une offre.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Me contacter</h2>
          
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-900">Message envoyé!</h3>
              <p className="text-green-700">Je vais te revenir rapidement.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Ton nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="toi@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Décris ton projet..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <Mail size={20} /> Envoyer
              </button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p className="mb-2">Ou écris directement:</p>
            <a href="mailto:ezrahsiteofficiel@gmail.com" className="text-blue-600 font-medium hover:underline">ezrahsiteofficiel@gmail.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <div className="max-w-4xl mx-auto">
          <p>© 2026 Ezarh Sites - Sites web pour petits business au Québec </p>
        </div>
      </footer>
    </div>
  );
}
