import { useLanguage } from '../i18n';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="font-bold text-xl tracking-tight text-white mb-4 block">CloudPhone<span className="text-indigo-400">Pro</span></span>
            <p className="text-sm max-w-xs leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('products_title')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">VMOS Cloud</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Redfinger</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LDCloud</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UgPhone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Multilogin</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('privacy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('terms')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('contact')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            {t('footer_text')}
          </p>
          <p className="text-xs text-slate-500 max-w-2xl text-center md:text-right">
            {t('disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
