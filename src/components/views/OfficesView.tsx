import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Phone, 
  Search, 
  ExternalLink, 
  Globe, 
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { HGW_OFFICES } from '../../data/offices';
import { HGWOffice } from '../../types';

export const OfficesView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('Todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const countries = ['Todos', ...Array.from(new Set(HGW_OFFICES.map(o => o.pais)))];

  const filteredOffices = HGW_OFFICES.filter((office) => {
    const matchesCountry = selectedCountry === 'Todos' || office.pais === selectedCountry;
    const matchesSearch = 
      office.ciudad.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.pais.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.direccion.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  const copyAddress = (office: HGWOffice) => {
    const fullText = `📍 Sede Oficial HGW ${office.ciudad}, ${office.pais}\nDirección: ${office.direccion}\nHorario: ${office.horario}\nContacto: ${office.contacto}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(office.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-emerald-700" />
            Directorio Oficial de Oficinas Internacionales HGW
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Sedes físicas autorizadas para compras presenciales, retiro de pedidos y atención en 10 países
          </p>
        </div>

        <div className="text-xs text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs self-start sm:self-auto">
          Total Sedes: <strong>{filteredOffices.length}</strong>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por ciudad, país o dirección (ej. Panamá, Bogotá, Miraflores, CDMX)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
          />
        </div>

        {/* Country Filter Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100">
          {countries.map((country) => {
            const isSelected = selectedCountry === country;
            return (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition active:scale-95 ${
                  isSelected
                    ? 'bg-[#0B3D2E] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {country}
              </button>
            );
          })}
        </div>

      </div>

      {/* Offices Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOffices.map((office) => {
          const isCopied = copiedId === office.id;
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${office.direccion} ${office.ciudad} ${office.pais}`)}`;

          return (
            <div
              key={office.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Office Header Image / Badge */}
                <div className="relative h-40 bg-slate-900 overflow-hidden">
                  <img
                    src={office.imagen}
                    alt={`${office.ciudad} - ${office.pais}`}
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-4">
                    <div>
                      <span className="text-[10px] uppercase font-black text-[#D4AF37] tracking-widest block mb-0.5">
                        {office.pais}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-white">
                        {office.ciudad}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Office Details */}
                <div className="p-4 space-y-3 text-xs">
                  
                  {/* Address */}
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed font-medium">
                      {office.direccion}
                    </span>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-snug">
                      {office.horario}
                    </span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-2.5 text-slate-800 font-semibold">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{office.contacto}</span>
                  </div>

                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
                <button
                  onClick={() => copyAddress(office)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition active:scale-95"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  <span>{isCopied ? '¡Copiado!' : 'Copiar Info'}</span>
                </button>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-[#0B3D2E] font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition border border-emerald-200/60"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ver en Mapa</span>
                  <ExternalLink className="w-3 h-3 text-emerald-600" />
                </a>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
