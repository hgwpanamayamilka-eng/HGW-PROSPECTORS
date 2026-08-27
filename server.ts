import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Health endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'HGW Marketing AI', version: '2.5.0' });
});

// AI Copy Generation Proxy (keeps Gemini API key secure on server)
app.post('/api/generate-copys', async (req, res) => {
  try {
    const { product, config, contact } = req.body;

    if (!product || !config) {
      return res.status(400).json({ error: 'Product and config are required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Actúa como un copywriter experto en ventas y redes de mercadeo para Health Green World (HGW).
Genera EXACTAMENTE 30 copys persuasivos diferentes y numerados para el siguiente producto:
- Nombre: ${product.nombre}
- Categoría: ${product.categoria}
- Beneficios: ${product.beneficios?.join(', ')}
- Ingredientes: ${product.ingredientes?.join(', ')}
- Presentación: ${product.presentacion}
- Precio: $${product.precio} | BV: ${product.BV}
- Público: ${config.targetAudience}
- Red Social: ${config.socialNetwork}
- Objetivo: ${config.objective}
- Tono: ${config.tone}
- Contacto: ${contact?.nombre || 'Distribuidor HGW'} (WhatsApp: ${contact?.whatsapp || '67603578'}, Código: ${contact?.codigo || 'Yamilka507'})

REGLA OBLIGATORIA PARA LOS GANCHOS (HOOKS):
Cada uno de los 30 ganchos ("hook") DEBE ESTAR 100% ENFOCADO Y PERSONALIZADO EN EL PRODUCTO "${product.nombre}", sus ingredientes específicos y sus beneficios exactos. Queda PROHIBIDO usar ganchos genéricos o hablar de otro producto distinto al indicado.

Devuelve un JSON válido con la siguiente estructura:
{
  "copys": [
    {
      "numero": 1,
      "estrategia": "Nombre de la estrategia psicológica",
      "hook": "Gancho magnético enfocado 100% en ${product.nombre}",
      "desarrollo": "Cuerpo persuasivo",
      "beneficio": "Beneficios clave",
      "cta": "Llamado a la acción con WhatsApp",
      "hashtags": ["#HGW", "#Salud", "#Bienestar"]
    }
  ]
}`;

      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            temperature: 0.7
          }
        });

        const text = response.text;
        if (text) {
          const parsed = JSON.parse(text);
          if (parsed.copys && Array.isArray(parsed.copys)) {
            return res.json(parsed);
          }
        }
      } catch (genError) {
        console.warn('Gemini generation warning, falling back to deterministic psychological engine:', genError);
      }
    }

    // Fallback response indicating client should use local deterministic generator
    return res.json({ fallback: true });
  } catch (error) {
    console.error('API Error /api/generate-copys:', error);
    res.status(500).json({ error: 'Failed to generate copys' });
  }
});

async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`HGW Marketing AI server running at http://0.0.0.0:${PORT}`);
  });
}

start();
