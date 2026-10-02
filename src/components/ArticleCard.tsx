import React from "react";
import { Link } from "react-router-dom";
import { WikiArticle } from "../types";
import { getCategoryIcon, getCategoryColor } from "./Layout";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  article: WikiArticle;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const Icon = getCategoryIcon(article.category || "");
  const color = getCategoryColor(article.category || "");
  const articleUrl = `/articulo/${article.slug || article.id}`;

  return (
    <article className="group relative bg-card border border-border/80 hover:border-primary/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      {article.image && (
        <div className="relative h-44 w-full overflow-hidden bg-secondary/30">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        </div>
      )}

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <span
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase"
              style={{
                backgroundColor: `${color}15`,
                color: color,
                border: `1px solid ${color}35`,
              }}
            >
              <Icon className="h-3 w-3" />
              <span>{article.category || "General"}</span>
            </span>
            {article.created_date && (
              <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {article.created_date.slice(0, 10)}
              </span>
            )}
          </div>

          <Link to={articleUrl} className="block group-hover:text-primary transition-colors">
            <h3 className="font-heading font-bold text-base sm:text-lg text-foreground line-clamp-2">
              {article.title}
            </h3>
          </Link>

          {article.summary && (
            <p className="text-xs text-muted-foreground line-clamp-2 font-light leading-relaxed">
              {article.summary}
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1 text-[11px] truncate max-w-[150px]">
            <User className="h-3 w-3 shrink-0" />
            <span className="truncate">{article.author || "Tarot"}</span>
          </span>

          <Link
            to={articleUrl}
            className="inline-flex items-center gap-1 text-primary text-xs font-medium hover:underline group-hover:translate-x-0.5 transition-transform"
          >
            <span>Leer</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
