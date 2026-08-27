import React, { useState, useEffect } from 'react';
import { Sidebar, TabType } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardView } from './components/views/DashboardView';
import { CatalogView } from './components/views/CatalogView';
import { CopyGeneratorView } from './components/views/CopyGeneratorView';
import { ImagePromptView } from './components/views/ImagePromptView';
import { LandingBuilderView } from './components/views/LandingBuilderView';
import { QuotesView } from './components/views/QuotesView';
import { MLMView } from './components/views/MLMView';
import { OfficesView } from './components/views/OfficesView';
import { SettingsView } from './components/views/SettingsView';
import { HGW_PRODUCTS } from './data/products';
import { Product, ContactData } from './types';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabType>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [products] = useState<Product[]>(HGW_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(HGW_PRODUCTS[0]);

  // Default distributor profile (Yamilka Batista) with localStorage persistence
  const [contact, setContact] = useState<ContactData>(() => {
    const defaultProfile: ContactData = {
      nombre: 'Yamilka Batista',
      whatsapp: '67603578',
      codigo: 'Yamilka507',
      pais: 'Panamá',
      ciudad: 'Ciudad de Panamá',
      enlaceWhatsapp: 'https://wa.me/50767603578',
      email: 'contacto@yamilkabatista.com',
      sitioWeb: 'https://hgw.yamilkabatista.com',
      fotoPerfil: 'https://hgwpanama.com/wp-content/uploads/Foto-de-perfil-Yamilka-Batista-HGW.png'
    };

    const saved = localStorage.getItem('hgw_contact_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...defaultProfile,
          ...parsed,
          fotoPerfil: parsed.fotoPerfil || defaultProfile.fotoPerfil
        };
      } catch (e) {
        console.error('Error parsing saved contact data', e);
      }
    }
    return defaultProfile;
  });

  const handleUpdateContact = (newContact: ContactData) => {
    setContact(newContact);
    localStorage.setItem('hgw_contact_data', JSON.stringify(newContact));
  };

  const handleGenerateCopysForProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentTab('copys');
  };

  const handleGenerateImagePromptForProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentTab('images');
  };

  const handleCreateLandingForProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentTab('landing');
  };

  const getTabTitle = (tab: TabType): string => {
    switch (tab) {
      case 'dashboard': return 'Panel de Control';
      case 'catalog': return 'Catálogo de Productos';
      case 'copys': return 'Generador de 30 Copys';
      case 'images': return 'Prompts de Imágenes';
      case 'landing': return 'Creador de Landing Pages';
      case 'quotes': return '30 Frases & Motivación';
      case 'mlm': return 'Network Marketing & Zoom';
      case 'offices': return 'Oficinas Internacionales';
      case 'settings': return 'Configuración de Contacto';
      default: return 'HGW Marketing AI';
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7F6] text-slate-900 flex font-sans antialiased">
      
      {/* Sidebar Navigation */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
        contact={contact}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header */}
        <Header
          currentTabName={getTabTitle(currentTab)}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          contact={contact}
          onOpenSettings={() => setCurrentTab('settings')}
        />

        {/* Dynamic View Render */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {currentTab === 'dashboard' && (
            <DashboardView
              products={products}
              contact={contact}
              onNavigate={setCurrentTab}
              onSelectProductForCopy={handleGenerateCopysForProduct}
            />
          )}

          {currentTab === 'catalog' && (
            <CatalogView
              products={products}
              onGenerateCopys={handleGenerateCopysForProduct}
              onGenerateImagePrompt={handleGenerateImagePromptForProduct}
              onCreateLanding={handleCreateLandingForProduct}
            />
          )}

          {currentTab === 'copys' && (
            <CopyGeneratorView
              products={products}
              selectedProduct={selectedProduct}
              onSelectProduct={setSelectedProduct}
              contact={contact}
            />
          )}

          {currentTab === 'images' && (
            <ImagePromptView
              products={products}
              selectedProduct={selectedProduct}
              onSelectProduct={setSelectedProduct}
            />
          )}

          {currentTab === 'landing' && (
            <LandingBuilderView
              products={products}
              selectedProduct={selectedProduct}
              onSelectProduct={setSelectedProduct}
              contact={contact}
            />
          )}

          {currentTab === 'quotes' && (
            <QuotesView />
          )}

          {currentTab === 'mlm' && (
            <MLMView contact={contact} />
          )}

          {currentTab === 'offices' && (
            <OfficesView />
          )}

          {currentTab === 'settings' && (
            <SettingsView
              contact={contact}
              onUpdateContact={handleUpdateContact}
            />
          )}
        </main>

        {/* Global Mini Footer */}
        <footer className="py-4 px-6 border-t border-slate-200/80 text-center text-xs text-slate-400 bg-white/50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} HGW Marketing AI · Health Green World</span>
            <span className="font-mono text-[11px] text-slate-400">Distribuidora: {contact.nombre} (Cód: {contact.codigo})</span>
          </div>
        </footer>

      </div>

    </div>
  );
};

export default App;
