import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  Sparkles,
  SlidersHorizontal,
  ArrowUpDown
} from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard';
import { ProductModal } from '../ProductModal';

interface CatalogViewProps {
  products: Product[];
  onGenerateCopys: (product: Product) => void;
  onGenerateImagePrompt: (product: Product) => void;
  onCreateLanding: (product: Product) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  onGenerateCopys,
  onGenerateImagePrompt,
  onCreateLanding
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc' | 'bv-desc'>('name');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  const categories = ['Todos', 'Nutrición y Alimentos', 'Cuidado Personal y Belleza', 'Hogar y Tecnología de Salud'];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory = selectedCategory === 'Todos' || product.categoria === selectedCategory;
        const matchesSearch = 
          product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.ingredientes.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.precio - b.precio;
        if (sortBy === 'price-desc') return b.precio - a.precio;
        if (sortBy === 'bv-desc') return b.BV - a.BV;
        return a.nombre.localeCompare(b.nombre);
      });
  }, [products, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header & Description */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-emerald-700" />
            Catálogo Oficial de Productos HGW
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Explora los {products.length} productos con ficha técnica, ingredientes, claims éticos y BV
          </p>
        </div>

        <div className="text-xs text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs self-start sm:self-auto">
          Mostrando: <strong>{filteredProducts.length}</strong> de {products.length} productos
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
        
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nombre, ingrediente o beneficio (ej. arándanos, turmalina)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            >
              <option value="name">Ordenar: Nombre (A-Z)</option>
              <option value="bv-desc">Puntos BV (Mayor a Menor)</option>
              <option value="price-asc">Precio (Menor a Mayor)</option>
              <option value="price-desc">Precio (Mayor a Menor)</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-100">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition active:scale-95 ${
                  isSelected
                    ? 'bg-[#0B3D2E] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={(p) => setSelectedProductForModal(p)}
              onGenerateCopys={onGenerateCopys}
              onGenerateImagePrompt={onGenerateImagePrompt}
              onCreateLanding={onCreateLanding}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
            <Filter className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-base font-bold text-slate-900">No se encontraron productos</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No hay productos que coincidan con los filtros aplicados. Intenta borrar la búsqueda o seleccionar otra categoría.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Todos');
            }}
            className="bg-emerald-50 text-emerald-800 font-bold px-4 py-2 rounded-xl text-xs hover:bg-emerald-100 transition"
          >
            Restablecer Filtros
          </button>
        </div>
      )}

      {/* Product Technical Modal */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onGenerateCopys={onGenerateCopys}
        onGenerateImagePrompt={onGenerateImagePrompt}
        onCreateLanding={onCreateLanding}
      />

    </div>
  );
};
