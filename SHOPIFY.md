# Protect Diversity — Guía de Migración Shopify

## Stack recomendado

| Capa | Herramienta | Costo |
|------|-------------|-------|
| Tema | Custom (basado en este prototipo HTML/CSS) | — |
| Reviews | **Judge.me** | Gratis |
| Quiz | **Hulk Product Quiz** o **Shop Quiz** | Gratis (plan básico) |
| Comparador | Lógica nativa Liquid (tabla 3 productos) | — |
| Blog | Blog nativo de Shopify | — |
| Email transaccional | Shopify Email | Gratis hasta 10k/mes |
| Metafields UI | **Metafields Guru** (gratis) o Shopify Admin 2.0 | Gratis |

---

## Estructura de metafields de producto

> Namespace: `custom` (accesible en Liquid como `product.metafields.custom.<key>`)

### Tipo: `single_line_text_field`
| Key | Descripción | Ejemplo |
|-----|-------------|---------|
| `subtitle` | Eyebrow del PDP (categoría) | `PROTECCIÓN SOLAR` |
| `key_ingredient` | Ingrediente estrella con concentración | `Óxido de Zinc 15%` |
| `pill_1` | Primera pill del hero | `MATE` |
| `pill_2` | Segunda pill del hero | `FPS 50+` |
| `short_description` | Descripción corta del hero PDP | `Protector solar de acabado mate…` |
| `texture_desc` | Descripción de textura | `Gel-crema ultraligero` |
| `free_from_list` | Comas: ingredientes excluidos | `Fragancias, Parabenos, Oxibenzona` |

### Tipo: `number_integer`
| Key | Descripción | Ejemplo |
|-----|-------------|---------|
| `stars` | Rating promedio × 10 (para evitar decimales) | `48` (= 4.8 ★) |
| `review_count` | Número de reseñas | `127` |
| `spf` | Factor de protección | `50` |

### Tipo: `list.single_line_text_field`
| Key | Descripción | Ejemplo |
|-----|-------------|---------|
| `skin_types` | Tipos de piel compatibles | `["Grasa", "Mixta", "Con acné"]` |
| `concerns` | Preocupaciones que trata | `["Brillo", "Poros", "Manchas"]` |
| `best_for` | Descripción de para quién es ideal | `["Uso bajo maquillaje", "Clima cálido"]` |
| `not_ideal_for` | Tipos a los que no va bien | `["Piel muy seca"]` |
| `benefit_icons` | Emojis/íconos de beneficios (4 máx) | `["☀", "◈", "✦", "○"]` |
| `benefit_titles` | Título de cada beneficio | `["Sin white cast", "Acabado mate"]` |
| `benefit_descs` | Descripción de cada beneficio | `["Sin residuo blanco visible"]` |

### Tipo: `json`
| Key | Descripción | Esquema |
|-----|-------------|---------|
| `usage_steps` | Pasos de aplicación | `[{"number":"01","text":"Aplica 2 dedos…"}]` |
| `ingredients_table` | Tabla INCI completa | `[{"name":"Zinc Oxide","inci":"Zinc Oxide","pct":"15%","fn":"Filtro UV mineral"}]` |
| `texture_attrs` | Atributos de textura | `[{"label":"Acabado","value":"Mate","positive":true}]` |
| `faqs` | Preguntas frecuentes del producto | `[{"q":"¿Sirve para piel sensible?","a":"Sí, su…"}]` |
| `trust_badges` | Badges de confianza | `[{"icon":"✓","text":"Vegano"},{"icon":"◎","text":"Sin crueldad"}]` |

---

## Catálogo completo — valores por producto

### PS-ANTIBRILLO · Protector Solar Anti-Brillo
```json
{
  "subtitle": "PROTECCIÓN SOLAR",
  "key_ingredient": "Óxido de Zinc 15% + Niacinamida 3%",
  "pill_1": "MATE",
  "pill_2": "FPS 50+",
  "short_description": "Protector solar mineral de acabado mate. Controla el brillo desde la primera aplicación. Sin white cast. Ideal bajo el maquillaje.",
  "skin_types": ["Grasa", "Mixta", "Con acné"],
  "concerns": ["Brillo", "Poros", "Manchas"],
  "stars": 48,
  "review_count": 143,
  "spf": 50,
  "free_from_list": "Fragancias, Parabenos, Oxibenzona, Avobenzona, Octinoxato",
  "usage_steps": [
    {"number": "01", "text": "Limpia y hidrata tu piel."},
    {"number": "02", "text": "Aplica 2 dedos índice del producto en cara y cuello."},
    {"number": "03", "text": "Extiende uniformemente hasta absorción total."},
    {"number": "04", "text": "Reaplicar cada 2 horas de exposición solar."}
  ]
}
```

### SU-HIALURONICO · Suero Facial con Ácido Hialurónico
```json
{
  "subtitle": "SUERO FACIAL",
  "key_ingredient": "Ácido Hialurónico 3 pasos moleculares",
  "pill_1": "HIDRATANTE",
  "pill_2": "24H",
  "short_description": "Suero de hidratación profunda con ácido hialurónico de triple paso molecular. Rellena, suaviza y protege la barrera cutánea.",
  "skin_types": ["Seca", "Normal", "Mixta", "Sensible"],
  "concerns": ["Deshidratación", "Arrugas finas", "Tirantez"],
  "stars": 49,
  "review_count": 98,
  "spf": 0,
  "free_from_list": "Fragancias, Parabenos, Alcohol desnaturalizado, Colorantes"
}
```

### CR-HIALURONICO · Crema Facial con Ácido Hialurónico
```json
{
  "subtitle": "CREMA FACIAL",
  "key_ingredient": "Ácido Hialurónico + Ceramidas",
  "pill_1": "BARRIER",
  "pill_2": "REPAIR",
  "short_description": "Crema de textura media que restaura la barrera cutánea. Hidratación de 48 horas, piel visiblemente más suave desde la primera semana.",
  "skin_types": ["Seca", "Normal", "Sensible"],
  "concerns": ["Deshidratación", "Tirantez", "Arrugas"],
  "stars": 47,
  "review_count": 76,
  "spf": 0
}
```

### LI-HIALURONICO · Limpiador Facial con Ácido Hialurónico
```json
{
  "subtitle": "LIMPIADOR FACIAL",
  "key_ingredient": "Ácido Hialurónico + Aloe Vera",
  "pill_1": "GENTLE",
  "pill_2": "CLEAN",
  "short_description": "Limpiador en gel que elimina impurezas sin resecar. Formulado con ácido hialurónico para limpiar e hidratar en un solo paso.",
  "skin_types": ["Todos los tipos", "Especialmente Seca y Sensible"],
  "concerns": ["Deshidratación", "Irritación"],
  "stars": 48,
  "review_count": 61,
  "spf": 0
}
```

### LI-GRASA · Limpiador Facial Piel Grasa
```json
{
  "subtitle": "LIMPIADOR FACIAL",
  "key_ingredient": "Ácido Salicílico 0.5% + Zinc PCA",
  "pill_1": "OIL",
  "pill_2": "CONTROL",
  "short_description": "Limpiador en gel refrescante con ácido salicílico que desobstruye poros y regula el sebo. Piel visiblemente más limpia y mate.",
  "skin_types": ["Grasa", "Mixta", "Con acné"],
  "concerns": ["Brillo", "Poros", "Acné", "Puntos negros"],
  "stars": 47,
  "review_count": 84,
  "spf": 0
}
```

> Para los 11 productos restantes (PS-ANTIMANCHAS, PS-HIALURONICO, PS-COLOR-CLARO, PS-COLOR-MEDIO,
> PS-NIACINAMIDA, PS-BARRA, PS-TOQUESECO, SU-NIACINAMIDA, SU-VITC, SU-OJOS, CR-ILUMINADORA)
> los valores base están en `js/products.js`. Solo añadir los campos extendidos (usage_steps, faqs, etc.)
> en Shopify Admin una vez creados los productos.

---

## Mapeo `products.js` → Shopify

| Campo en `products.js` | Campo en Shopify |
|------------------------|------------------|
| `id` | Handle del producto (slug URL) |
| `name` | `product.title` |
| `price` | `variant.price` |
| `comparePrice` | `variant.compare_at_price` |
| `img1` | `product.featured_image` |
| `img2` | Segunda imagen en galería |
| `shortDesc` | `product.description` (versión corta) |
| `stars` | `metafields.custom.stars` |
| `reviews` | `metafields.custom.review_count` |
| `keyIngredient` | `metafields.custom.key_ingredient` |
| `bestFor` | `metafields.custom.skin_types` |
| `concerns` | `metafields.custom.concerns` |
| `pill` | `metafields.custom.subtitle` |

---

## Estructura de páginas Liquid recomendada

```
theme/
├── layout/
│   └── theme.liquid          ← Header + Footer global
├── sections/
│   ├── hero-home.liquid       ← Hero index con foto editorial
│   ├── bestsellers.liquid     ← Grid 4 más vendidos
│   ├── collection-hero.liquid ← Hero colección con foto
│   ├── product-hero.liquid    ← Hero PDP (galería + purchase box)
│   ├── product-reviews.liquid ← Judge.me widget con estilo custom
│   ├── blog-hero.liquid       ← Hero blog con foto
│   └── legal-content.liquid   ← Template para páginas legales
├── templates/
│   ├── index.json
│   ├── collection.json
│   ├── product.json
│   ├── blog.json
│   ├── article.json
│   └── page.legal.json        ← Para privacidad, términos, devoluciones
└── assets/
    ├── global.css             ← Este mismo archivo, con tokens Liquid
    └── global.js              ← Adaptado (sin PD.catalog, usa Shopify JSON)
```

---

## Email de confirmación → Reseña

El correo de confirmación de Shopify debe incluir un botón que apunte a:
```
https://protectdiversity.store/pages/resena?producto={{ line_item.product.handle }}&pedido={{ order.name }}&nombre={{ customer.first_name }}
```

En Shopify, `resena.html` se convierte en una **página estática** (`pages/resena`) con template `page.resena.liquid`. La lógica de URL params permanece igual — Liquid solo renderiza el shell, el JS hace el resto.

---

**Última actualización:** junio 2026  
**Estado:** Prototipo HTML completo — listo para conversión Liquid
