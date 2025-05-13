"use client";

import { useState, useMemo } from 'react';
import { CCIE } from '@/types/types';
import data from '@/data/data.json';

type SortField = keyof CCIE;
type SortOrder = 'asc' | 'desc';

const CCIETable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hideInactives, setHideInactives] = useState(false);
  const [sortField, setSortField] = useState<SortField>('number');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Aynı alana tekrar tıklandığında sıralama yönünü değiştir
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Yeni bir alana tıklandığında varsayılan olarak artan sıralama yap
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const filteredAndSortedData = useMemo(() => {
    const filteredData = data.ccieData.filter((ccie) => {
      const searchableFields = [
        ccie.name,
        ccie.number.toString(),
        ccie.track,
        ccie.status
      ].join(' ').toLowerCase();

      const matchesSearch = searchTerm === '' || 
        searchableFields.includes(searchTerm.toLowerCase());
      
      const matchesStatus = hideInactives ? ccie.status !== 'Inactive' : true;
      
      return matchesSearch && matchesStatus;
    });

    // Sıralama işlemi
    return filteredData.sort((a, b) => {
      const aValue = sortField === 'number' ? Number(a[sortField]) : a[sortField];
      const bValue = sortField === 'number' ? Number(b[sortField]) : b[sortField];

      if (aValue < bValue) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [searchTerm, hideInactives, sortField, sortOrder]);

  const getSortIcon = (field: SortField) => {
    // Sadece aktif sıralama alanı için ikon göster
    if (sortField !== field) return '';
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  // CCIE numarası aynı olan satırlar için aynı sıra numarasını göster
  const getRowNumber = (currentNumber: number, index: number) => {
    // Benzersiz CCIE numaralarını bul
    const uniqueNumbers = [...new Set(
      filteredAndSortedData
        .slice(0, index + 1)
        .map(item => item.number)
    )];

    // Şu anki CCIE numarasının benzersiz listede kaçıncı sırada olduğunu bul
    return uniqueNumbers.indexOf(currentNumber.toString()) + 1;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-center m-[1rem] sm:text-[5rem] text-gray-900">CCIE Hall of Fame Turkiye</h1>
      <h2 className="text-2xl text-center mb-8">
        <span className="font-extralight">Turkish</span>
        <span className="text-sm font-bold mx-1">TR</span>
        <span className="font-extralight">CCIEs</span>
      </h2>

      <div className="block sm:flex items-center justify-between mb-6">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search by CCIE, name, number or track... "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="mt-5 sm:mt-0 flex items-center gap-2 ml-4">
          <input
            type="checkbox"
            id="hideInactives"
            checked={hideInactives}
            onChange={() => setHideInactives(!hideInactives)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="hideInactives" className="text-sm text-gray-600">
            Hide Inactives (Affects all tables)
          </label>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">#</th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('name')}
              >
                Name {getSortIcon('name')}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('certification')}
              >
                Type {getSortIcon('certification')}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('number')}
              >
                Number {getSortIcon('number')}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('track')}
              >
                Track {getSortIcon('track')}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('status')}
              >
                Status {getSortIcon('status')}
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('date')}
              >
                Certification Date {getSortIcon('date')}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAndSortedData.length > 0 ? (
              filteredAndSortedData.map((ccie, index) => (
                <tr key={`${ccie.name}-${ccie.number}-${ccie.track}`} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {getRowNumber(Number(ccie.number), index)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {ccie.linkedin ? (
                      <a
                        href={ccie.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 underline"
                      >
                        {ccie.name}
                      </a>
                    ) : (
                      <span className="text-gray-900">{ccie.name}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ccie.certification}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ccie.number}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ccie.track}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      ccie.status === 'Inactive' 
                        ? 'bg-red-100 text-red-800'
                        : ccie.status === 'Re-certified'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {ccie.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(ccie.date).toLocaleDateString('tr-TR')}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td 
  colSpan={7} 
  className="px-6 py-4 text-center text-gray-900"
>
  No results found for &ldquo;{searchTerm}&rdquo;
</td> 
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CCIETable; 