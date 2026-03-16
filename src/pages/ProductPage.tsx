import { useParams, Link, Navigate } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Star, CheckCircle2, Twitter, Facebook } from 'lucide-react';
import { toast } from 'sonner';
import { products } from '../data/products';
import { useLanguage } from '../i18n';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  // Generate dynamic meta content
  const title = `${product.name} - Cloud Phone Emulator Review & Pricing`;
  const description = product.description[language];
  const keywords = `${product.name}, cloud phone emulator, android emulator, ${product.tags[language].join(', ')}, cloud gaming`;

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
    <div className="min-h-screen bg-slate-50 py-12">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={product.logo} />
        <meta property="og:type" content="product" />
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all emulators
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden"
        >
          <div className="p-8 md:p-12 border-b border-slate-100">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex-shrink-0">
                  <img 
                    src={product.logo} 
                    alt={`${product.name} logo`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      <span className="font-medium text-slate-700">{product.rating} / 5.0</span>
                    </div>
                    <div className="flex gap-2">
                      {product.tags[language].map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-left md:text-right w-full md:w-auto bg-slate-50 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none">
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">
                  {t('price_from')}
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-4">
                  ${product.price}
                  <span className="text-lg font-normal text-slate-500">/{t('month')}</span>
                </div>
                <a 
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleAffiliateClick}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-xl transition-colors text-lg"
                >
                  {t('get_started')}
                  <ExternalLink className="w-5 h-5" />
                </a>

                <div className="mt-6 flex items-center justify-start md:justify-end gap-3">
                  <span className="text-sm font-medium text-slate-500">Share:</span>
                  <a 
                    href={twitterUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-slate-100 hover:bg-[#1DA1F2] hover:text-white text-slate-600 rounded-full transition-colors"
                    title="Share on Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a 
                    href={facebookUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-slate-100 hover:bg-[#4267B2] hover:text-white text-slate-600 rounded-full transition-colors"
                    title="Share on Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-slate-50/50">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About {product.name}</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {product.description[language]}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h2>
                <div className="space-y-4">
                  {product.features[language].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
