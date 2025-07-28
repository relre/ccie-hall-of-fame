import { CCIE } from '@/types/types';

type FooterProps = {
  filteredData: CCIE[];
};

const Footer = ({ filteredData }: FooterProps) => {
  // Track'lere göre sayıları hesapla
  const trackCounts = filteredData.reduce((acc, ccie) => {
    const track = ccie.track;
    acc[track] = (acc[track] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Toplam sayıları hesapla
  const totalCertified = filteredData.length;
  const totalCCIE = filteredData.filter(ccie => ccie.certification === 'CCIE').length;
  
  // Çift ve üçlü CCIE sayılarını hesapla
  const ccieNumbers = new Set(filteredData.map(ccie => ccie.number));
  const doubleCCIE = Array.from(ccieNumbers).filter(number => 
    filteredData.filter(ccie => ccie.number === number).length === 2
  ).length;
  const tripleCCIE = Array.from(ccieNumbers).filter(number => 
    filteredData.filter(ccie => ccie.number === number).length === 3
  ).length;

  return (
    <footer className="mt-8">
      <div className="max-w-md mx-auto">
        <table className="min-w-full text-left divide-y divide-gray-200 border border-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">CERTIFICATION</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">NUMBER OF CERTIFIED</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(trackCounts).map(([track, count]) => (
              <tr key={track}>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">{track}</td>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <table className="min-w-full text-left divide-y divide-gray-200 border border-gray-200 ">
            <tbody className="bg-white divide-y divide-gray-200 ">
              <tr>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900 font-bold">Number of Certified Individuals</td>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900 ">{totalCertified}</td>
              </tr>
              <tr>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">Number of <span className="font-bold">CCIEs</span></td>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">{totalCCIE}</td>
              </tr>
              <tr>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">Number of <span className="font-bold">Double CCIEs</span></td>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">{doubleCCIE}</td>
              </tr>
              <tr>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">Number of <span className="font-bold">Triple CCIEs</span></td>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">{tripleCCIE}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <div className="bg-yellow-100 p-4 mt-8 text-center">
        <p className="mt-4 text-sm">
          This list is for informational purposes only, it is not an official list. For more detailed information, you can visit the <a href="https://www.cisco.com/go/ccie" target="_blank" rel="noopener noreferrer" className="underline">Cisco CCIE page</a>.
        </p>
        <p className="text-sm">
          For updates on the list, please send a message on <a href="https://www.linkedin.com/in/atlasborap/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>.
        </p>
        </div>
    </footer>
  );
};

export default Footer;