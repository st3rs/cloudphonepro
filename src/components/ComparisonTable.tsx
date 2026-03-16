import { useState } from 'react';
import { ExternalLink, Star, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { products } from '../data/products';
import { useLanguage } from '../i18n';

type SortField = 'price' | 'rating' | null;
type SortDirection = 'asc' | 'desc';

export default function ComparisonTable() {
  const { language, t } = useLanguage();
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection(field === 'rating' ? 'desc' : 'asc');
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortField) return 0;
    
    const modifier = sortDirection === 'asc' ? 1 : -1;
    if (a[sortField] < b[sortField]) return -1 * modifier;
    if (a[sortField] > b[sortField]) return 1 * modifier;
    return 0;
  });

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="w-4 h-4 text-slate-400" />;
    return sortDirection === 'asc' ? <ArrowUp className="w-4 h-4 text-indigo-600" /> : <ArrowDown className="w-4 h-4 text-indigo-600" />;
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-2xl font-bold text-slate-900">{t('compare_title')}</h3>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-500 font-medium">{t('sort_by')}</span>
          <select 
            className="bg-white border border-slate-200 text-slate-700 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => {
              const val = e.target.value;
              if (val === 'price_asc') { setSortField('price'); setSortDirection('asc'); }
              else if (val === 'price_desc') { setSortField('price'); setSortDirection('desc'); }
              else if (val === 'rating_desc') { setSortField('rating'); setSortDirection('desc'); }
              else { setSortField(null); }
            }}
          >
            <option value="">--</option>
            <option value="price_asc">{t('sort_price_asc')}</option>
            <option value="price_desc">{t('sort_price_desc')}</option>
            <option value="rating_desc">{t('sort_rating_desc')}</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="p-4 font-semibold text-slate-700">{t('col_name')}</th>
              <th 
                className="p-4 font-semibold text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors"
                onClick={() => handleSort('price')}
              >
                <div className="flex items-center gap-2">
                  {t('col_price')} <SortIcon field="price" />
                </div>
              </th>
              <th 
                className="p-4 font-semibold text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors"
                onClick={() => handleSort('rating')}
              >
                <div className="flex items-center gap-2">
                  {t('col_rating')} <SortIcon field="rating" />
                </div>
              </th>
              <th className="p-4 font-semibold text-slate-700">{t('col_features')}</th>
              <th className="p-4 font-semibold text-slate-700 text-center">{t('col_link')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sortedProducts.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={product.logo} alt={product.name} className="w-10 h-10 rounded-lg object-cover border border-slate-200" referrerPolicy="no-referrer" />
                    <span className="font-bold text-slate-900">{product.name}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="font-semibold text-slate-900">${product.price}<span className="text-sm font-normal text-slate-500">/{t('month')}</span></div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium text-slate-700">{product.rating}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features[language].map((feature, idx) => (
                      <span key={idx} className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                        {feature}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-center">
                  <a 
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                  >
                    {t('get_started')}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
