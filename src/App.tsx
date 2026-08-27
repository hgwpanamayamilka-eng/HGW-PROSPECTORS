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
import { RecognitionBannersView } from './components/views/RecognitionBannersView';
import { AdminUsersView } from './components/views/AdminUsersView';
import { AuthView } from './components/views/AuthView';
import { HGW_PRODUCTS } from './data/products';
import { Product, ContactData, AuthUser } from './types';

export const App: React.FC = () => {
  // Auth state persisted in localStorage
  const [authUser, setAuthUser] = useState<AuthUser | null>(() => {
    try {
      const saved = localStorage.getItem('hgw_auth_user');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading auth user', e);
    }
    return null;
  });

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
      email: 'info.yamilka@gmail.com',
      sitioWeb: 'https://hgw.yamilkabatista.com',
      fotoPerfil: 'https://drive.google.com/file/d/1KeOPcyuhctKp1qJsNsfw-nlUuXzyU_hf/view?usp=drive_link',
      enlaceReferido: 'https://hgwpanama.com/registro?ref=Yamilka507',
      videoTutorialRegistro: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      videoOpcional1: '',
      videoOpcional2: ''
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

  // Listen to /admin route or hash change
  useEffect(() => {
    const checkRoute = () => {
      if (typeof window !== 'undefined') {
        const path = window.location.pathname.toLowerCase();
        const hash = window.location.hash.toLowerCase();
        const search = window.location.search.toLowerCase();
        if ((path === '/admin' || path.endsWith('/admin') || hash === '#admin' || hash.includes('admin') || search.includes('admin')) && authUser?.rol === 'admin') {
          setCurrentTab('admin_users');
        }
      }
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);

    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, [authUser]);

  const handleUpdateContact = (newContact: ContactData) => {
    setContact(newContact);
    localStorage.setItem('hgw_contact_data', JSON.stringify(newContact));
  };

  const handleLoginSuccess = (user: AuthUser, extraContact?: Partial<ContactData>) => {
    setAuthUser(user);
    if (extraContact) {
      const updatedContact: ContactData = {
        ...contact,
        nombre: user.nombre || contact.nombre,
        codigo: user.codigo || contact.codigo,
        whatsapp: user.telefono || contact.whatsapp,
        email: user.email || contact.email,
        pais: user.pais || contact.pais,
        fotoPerfil: user.fotoPerfil || contact.fotoPerfil,
        enlaceWhatsapp: user.telefono ? `https://wa.me/${user.telefono.replace(/\D/g, '')}` : contact.enlaceWhatsapp,
        ...extraContact
      };
      setContact(updatedContact);
      localStorage.setItem('hgw_contact_data', JSON.stringify(updatedContact));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('hgw_auth_user');
    setAuthUser(null);
    setCurrentTab('dashboard');
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
      case 'banners': return 'Banners de Reconocimiento Oficial';
      case 'landing': return 'Creador de Landing Pages';
      case 'quotes': return '30 Frases & Motivación';
      case 'mlm': return 'Network Marketing & Zoom';
      case 'offices': return 'Oficinas Internacionales';
      case 'settings': return 'Configuración de Contacto & Videos';
      case 'admin_users': return 'Panel de Administración & Autorizaciones';
      default: return 'HGW Marketing AI';
    }
  };

  // If user is not authenticated, show the Access and Registration Gate
  if (!authUser) {
    return <AuthView onLoginSuccess={handleLoginSuccess} />;
  }

  const isAdmin = authUser.rol === 'admin';

  return (
    <div className="min-h-screen bg-[#F5F7F6] text-slate-900 flex font-sans antialiased">
      
      {/* Sidebar Navigation */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
        contact={contact}
        authUser={authUser}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header */}
        <Header
          currentTabName={getTabTitle(currentTab)}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          contact={contact}
          authUser={authUser}
          onOpenSettings={() => setCurrentTab('settings')}
          onOpenAdmin={isAdmin ? () => setCurrentTab('admin_users') : undefined}
          onLogout={handleLogout}
        />

        {/* Dynamic View Render */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          
          {/* Admin panel tab (Protected for admin role) */}
          {currentTab === 'admin_users' && isAdmin && (
            <AdminUsersView currentAdminUser={authUser} currentUser={authUser} />
          )}

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
              contact={contact}
            />
          )}

          {currentTab === 'banners' && (
            <RecognitionBannersView
              contact={contact}
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
              authUser={authUser}
              onUpdateContact={handleUpdateContact}
            />
          )}
        </main>

        {/* Global Mini Footer */}
        <footer className="py-4 px-6 border-t border-slate-200/80 text-center text-xs text-slate-400 bg-white/50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} HGW Marketing AI · Health Green World</span>
            <span className="font-mono text-[11px] text-slate-400">
              Distribuidora: {contact.nombre} (Cód: {contact.codigo}) · Rol: <strong className="uppercase">{authUser.rol}</strong>
            </span>
          </div>
        </footer>

      </div>

    </div>
  );
};

export default App;
