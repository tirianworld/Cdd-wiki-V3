import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { CategoryProvider } from "./context/CategoryContext";
import { VisualEditorProvider } from "./context/VisualEditorContext";
import { UIContentProvider } from "./context/UIContentContext";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { CategoryView } from "./components/CategoryView";
import { ArticleEditor } from "./components/ArticleEditor";
import { FilterManager } from "./components/FilterManager";
import { PrimordialMagicGraph } from "./components/PrimordialMagicGraph";

export default function App() {
  return (
    <LanguageProvider>
      <CategoryProvider>
        <VisualEditorProvider>
          <UIContentProvider>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/categoria/:slug" element={<CategoryView />} />
                  <Route path="/articulo/:slug" element={<ArticleEditor />} />
                  <Route path="/nuevo" element={<ArticleEditor />} />
                  <Route path="/editar/:slug" element={<ArticleEditor />} />
                  <Route path="/filtros" element={<FilterManager />} />
                  <Route path="/grafo" element={<PrimordialMagicGraph />} />
                  <Route path="/mundo" element={<Home />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Layout>
            </Router>
          </UIContentProvider>
        </VisualEditorProvider>
      </CategoryProvider>
    </LanguageProvider>
  );
}
