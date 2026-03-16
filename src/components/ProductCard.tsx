import { ExternalLink, Star, CheckCircle2, ChevronRight, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { Product } from '../data/products';
import { useLanguage } from '../i18n';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage();

  const shareUrl = `${window.location.origin}/product/${product.id}`;
  const shareText = `Check out ${product.name} - ${product.description[language]}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  const handleAffiliateClick = () => {
    toast.success(`Redirecting to ${product.name}...`, {
      description: 'Taking you to the official website.',
      duration: 3000,
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-100 shadow-sm flex-shrink-0">
              <img 
                src={product.logo} 
                alt={`${product.name} logo`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <Link to={`/product/${product.id}`}>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium text-slate-700">{product.rating}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
              {t('price_from')}
            </div>
            <div className="text-lg font-bold text-slate-900">
              ${product.price}
              <span className="text-sm font-normal text-slate-500">/{t('month')}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-wrap gap-2">
            {product.tags[language].map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1DA1F2] transition-colors" title="Share on Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#4267B2] transition-colors" title="Share on Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {product.description[language]}
        </p>

        <div className="space-y-2">
          {product.features[language].map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto flex gap-3">
        <Link 
          to={`/product/${product.id}`}
          className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-4 rounded-xl transition-colors"
        >
          Details
          <ChevronRight className="w-4 h-4" />
        </Link>
        <a 
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleAffiliateClick}
          className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
        >
          {t('get_started')}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
