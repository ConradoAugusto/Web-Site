/* blogEngajamento.js — mede como o leitor consome um artigo do blog.

   - Tempo de leitura: só conta enquanto a aba está visível, o TEXTO do artigo
     está na tela e houve atividade (rolar, mouse, toque, tecla) nos últimos 30 s.
     Aba esquecida ou leitor no rodapé ("Mais posts") não conta.
     Envia os segundos acumulados a cada 15 s e ao sair/ocultar a página.
   - Chegou ao fim: um marcador no fim do texto entrou na tela.
   - Clique em link: qualquer link dentro do texto. O servidor decide se é CTA.
   - CTA fora do texto (ex.: botão flutuante do WhatsApp): o componente chama
     avisarCtaBlog(url) e o clique entra na leitura do artigo aberto. */

import { useEffect } from "react";
import { enviarEngajamentoBlog } from "./api";

const INATIVO_APOS_MS = 30000;
const ENVIO_A_CADA_S = 15;
const EVENTO_CTA = "blog:cta";

/**
 * Avisa o rastreador de um CTA que não é um link dentro do texto (botão do WhatsApp,
 * formulário etc.). Fora de um artigo ninguém escuta e nada é enviado.
 * A query da URL é descartada: pode ter nome e mensagem do visitante.
 */
export const avisarCtaBlog = (url) => {
  try {
    const u = new URL(url);
    window.dispatchEvent(new CustomEvent(EVENTO_CTA, { detail: { url: `${u.origin}${u.pathname}` } }));
  } catch {
    /* URL inválida: ignora */
  }
};

/**
 * @param {string|undefined} slug
 * @param {{ current: HTMLElement|null }} conteudoRef  elemento com o texto do artigo
 * @param {{ current: HTMLElement|null }} fimRef       marcador logo após o texto
 */
export const useEngajamentoBlog = (slug, conteudoRef, fimRef) => {
  useEffect(() => {
    const conteudo = conteudoRef.current;
    const fim = fimRef.current;
    if (!slug || !conteudo || !fim) return undefined;

    let segundos = 0;
    let scrollMax = 0;
    let ultimaAtividade = Date.now();
    let chegouAoFim = false;
    let textoNaTela = true;

    const ativo = () =>
      textoNaTela && document.visibilityState === "visible" && Date.now() - ultimaAtividade < INATIVO_APOS_MS;

    // Texto do artigo visível (qualquer parte dele) — sem isso o relógio para.
    const observadorTexto = new IntersectionObserver((entradas) => {
      textoNaTela = entradas.some((e) => e.isIntersecting);
    });
    observadorTexto.observe(conteudo);

    const medirScroll = () => {
      const r = conteudo.getBoundingClientRect();
      if (r.height <= 0) return;
      const lido = ((window.innerHeight - r.top) / r.height) * 100;
      scrollMax = Math.max(scrollMax, Math.min(100, Math.max(0, Math.round(lido))));
    };

    const enviar = () => {
      if (segundos <= 0) return;
      enviarEngajamentoBlog({ slug, tipo: "leitura", segundos, scroll: scrollMax });
      segundos = 0;
    };

    const marcarAtividade = () => { ultimaAtividade = Date.now(); };
    const aoRolar = () => { marcarAtividade(); medirScroll(); };

    const relogio = setInterval(() => {
      if (!ativo()) return;
      segundos += 1;
      if (segundos >= ENVIO_A_CADA_S) enviar();
    }, 1000);

    const aoMudarVisibilidade = () => {
      if (document.visibilityState === "hidden") enviar();
      else marcarAtividade();
    };

    const observador = new IntersectionObserver((entradas) => {
      if (chegouAoFim || !entradas.some((e) => e.isIntersecting)) return;
      chegouAoFim = true;
      enviarEngajamentoBlog({ slug, tipo: "fim" });
      observador.disconnect();
    });
    // Espera 2 s: em post curto o fim aparece de cara, antes de a leitura ("view") estar registrada.
    const iniciarObservador = setTimeout(() => observador.observe(fim), 2000);

    const aoClicar = (e) => {
      const link = e.target.closest?.("a[href]");
      if (!link || !conteudo.contains(link) || !/^https?:/i.test(link.href)) return;
      enviar(); // o tempo lido até aqui não se perde se o link sair da página
      enviarEngajamentoBlog({ slug, tipo: "clique", url: link.href });
    };

    const aoCtaExterno = (e) => {
      const url = e.detail?.url;
      if (!url) return;
      enviar();
      enviarEngajamentoBlog({ slug, tipo: "clique", url });
    };

    const eventosAtividade = ["mousemove", "keydown", "touchstart", "pointerdown", "wheel"];
    eventosAtividade.forEach((ev) => window.addEventListener(ev, marcarAtividade, { passive: true }));
    window.addEventListener("scroll", aoRolar, { passive: true });
    document.addEventListener("visibilitychange", aoMudarVisibilidade);
    window.addEventListener("pagehide", enviar);
    conteudo.addEventListener("click", aoClicar);
    window.addEventListener(EVENTO_CTA, aoCtaExterno);
    medirScroll();

    return () => {
      enviar();
      clearInterval(relogio);
      clearTimeout(iniciarObservador);
      observador.disconnect();
      observadorTexto.disconnect();
      window.removeEventListener(EVENTO_CTA, aoCtaExterno);
      eventosAtividade.forEach((ev) => window.removeEventListener(ev, marcarAtividade));
      window.removeEventListener("scroll", aoRolar);
      document.removeEventListener("visibilitychange", aoMudarVisibilidade);
      window.removeEventListener("pagehide", enviar);
      conteudo.removeEventListener("click", aoClicar);
    };
  }, [slug, conteudoRef, fimRef]);
};
