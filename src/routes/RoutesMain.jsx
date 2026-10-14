import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { PrivacyPoliciesPage } from "../pages/PrivacyPoliciesPage";
import { TermsAndConditionsPage } from "../pages/TermsAndConditionsPage";
import { BlogPage } from "../pages/BlogPage";
import RouteWrapper from "../../components/RouteWrapper";
import { BPOPage } from "../pages/BPOPage";
import { BodyPage } from "../pages/BodyPage";
import ViewPage from "../pages/ViewPage";
import { PortalRHPage } from "../pages/PortalRHPage";
import { AppPage } from "../pages/AppPage";
import { PortalPlanos } from "../pages/PortalPlanos";
import { SuporteOperacional } from "../pages/SuporteOperacional";
import { ConsultoriaERP } from "../pages/ConsultoriaERP";
import { EnvioDoForm } from "../pages/EnvioDoForm";
import { SST } from "../pages/SST";
import { RemuneracaoPage2 } from "../pages/RemuneracaoPage2";

const SITE = "https://example.com";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RouteWrapper title="Página Inicial" canonical={`${SITE}/`}>
            <HomePage />
          </RouteWrapper>
        }
      />
      <Route
        path="/portalRH"
        element={
          <RouteWrapper title="Portal RH" canonical={`${SITE}/portalRH`}>
            <PortalRHPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/remuneracao"
        element={
          <RouteWrapper title="Remuneração" canonical={`${SITE}/remuneracao`}>
            <RemuneracaoPage2 />
          </RouteWrapper>
        }
      />
      <Route path="/sst" element={<SST />} />
      <Route
        path="/suporte-operacional"
        element={
          <RouteWrapper
            title="Suporte Operacional"
            canonical={`${SITE}/suporte-operacional`}
          >
            <SuporteOperacional />
          </RouteWrapper>
        }
      />
      <Route
        path="/consultoria-erp"
        element={
          <RouteWrapper
            title="Consultoria em ERP"
            canonical={`${SITE}/consultoria-erp`}
          >
            <ConsultoriaERP />
          </RouteWrapper>
        }
      />
      <Route
        path="/bpo-folha-de-pagamento"
        element={
          <RouteWrapper
            title="BPO Folha de Pagamento"
            canonical={`${SITE}/bpo-folha-de-pagamento`}
          >
            <BPOPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/body-shop"
        element={
          <RouteWrapper title="Body Shop" canonical={`${SITE}/body-shop`}>
            <BodyPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/controle-de-ponto"
        element={
          <RouteWrapper
            title="Controle de Ponto"
            canonical={`${SITE}/controle-de-ponto`}
          >
            <AppPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/sobre"
        element={
          <RouteWrapper title="Sobre" canonical={`${SITE}/sobre`}>
            <AboutPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/contato"
        element={
          <RouteWrapper title="Contato" canonical={`${SITE}/contato`}>
            <ContactPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/blog"
        element={
          <RouteWrapper title="Blog" canonical={`${SITE}/blog`}>
            <BlogPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/blog/view/:slug"
        element={
          <RouteWrapper title="Blog" canonical={`${SITE}/blog`}>
            <ViewPage />
          </RouteWrapper>
        }
      />
      <Route
        path="/planos-portal-rh"
        element={
          <RouteWrapper
            title="Planos Portal RH"
            canonical={`${SITE}/planos-portal-rh`}
          >
            <PortalPlanos />
          </RouteWrapper>
        }
      />
      <Route
        path="/legal/politicas-de-privacidade"
        element={<PrivacyPoliciesPage />}
      />
      <Route
        path="/legal/termos-e-condicoes"
        element={<TermsAndConditionsPage />}
      />
      <Route path="/agradecimento" element={<EnvioDoForm />} />
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
