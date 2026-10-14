// Camada de dados mock para a versão de portfólio.
// No projeto original, estas funções consumiam a API REST do WordPress (blog),
// endpoints PHP (leads, telemetria do blog) e uma "roleta" de atendimento do
// WhatsApp. Aqui elas devolvem dados fictícios com o mesmo formato, para que
// os componentes funcionem sem backend.

const espera = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

const TAGS = [
  { id: 1, name: "Gestão" },
  { id: 2, name: "Tecnologia" },
  { id: 3, name: "Produtividade" },
];

const CATEGORIES = [
  { id: 1, name: "Artigos" },
  { id: 2, name: "Novidades" },
];

const lorem =
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>" +
  "<h2>Subtítulo de exemplo</h2>" +
  "<p>Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.</p>" +
  "<ul><li>Item de lista um</li><li>Item de lista dois</li><li>Item de lista três</li></ul>" +
  "<p>Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.</p>";

const POSTS = Array.from({ length: 8 }, (_, i) => {
  const n = i + 1;
  return {
    id: n,
    slug: `post-exemplo-${n}`,
    date: new Date(2026, 0, 28 - n * 3).toISOString(),
    title: { rendered: `Título do post de exemplo ${n}` },
    excerpt: {
      rendered:
        "<p>Resumo curto do artigo de exemplo, usado para demonstrar a listagem do blog.</p>",
    },
    content: { rendered: lorem },
    tags: [TAGS[i % TAGS.length].id],
    categories: [CATEGORIES[i % CATEGORIES.length].id],
    _embedded: {},
  };
});

/* ---------- Blog ---------- */

export const fetchPosts = async () => {
  await espera();
  return POSTS;
};

// Sem imagem destacada no mock: os componentes caem no banner padrão.
export const getFeaturedImageUrl = (post) =>
  post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

export const fetchPostBySlug = async (slug) => {
  await espera();
  return POSTS.filter((post) => post.slug === slug);
};

export const fetchTags = async () => TAGS;

export const fetchCategories = async () => CATEGORIES;

/* ---------- Telemetria do blog (no-op) ---------- */

const curtidas = {};

export const registrarVisualizacaoBlog = async (slug) => ({
  visualizacoes: 1,
  curtidas: curtidas[slug] || 0,
  contabilizado: false,
});

export const registrarCurtidaBlog = async (slug, _titulo, curtir) => {
  curtidas[slug] = Math.max(0, (curtidas[slug] || 0) + (curtir ? 1 : -1));
  return { curtidas: curtidas[slug] };
};

export const enviarEngajamentoBlog = () => {};

/* ---------- WhatsApp (roleta de atendimento) ---------- */

let roleta = 0;

export const fetchRoleta = async () => [{ valor: roleta }];

export const updateRoleta = async (novoValor) => {
  roleta = novoValor;
  return { ok: true };
};

/* ---------- Leads (formulários) ---------- */

export const createLead = async (data) => {
  await espera(500);
  console.info("[mock] lead recebido:", data);
  return { ok: true };
};
