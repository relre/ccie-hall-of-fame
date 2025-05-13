const Footer = () => (
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
            <tr>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">Enterprise Infrastructure</td>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">270</td>
            </tr>
            <tr>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">Security</td>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">26</td>
            </tr>
            <tr>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">Service Provider</td>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">24</td>
            </tr>
            <tr>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">Collaboration</td>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">24</td>
            </tr>
            <tr>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">Data Center</td>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">18</td>
            </tr>
            <tr>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">CCIE Storage Networking</td>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">4</td>
            </tr>
            <tr>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">SNA IP</td>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">3</td>
            </tr>
            <tr>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">DevNet Expert</td>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">3</td>
            </tr>
            <tr>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">CCDE Practical</td>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">2</td>
            </tr>
            <tr>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">Enterprise Wireless</td>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">2</td>
            </tr>
            <tr>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">Voice</td>
              <td className="p-3 whitespace-nowrap text-sm text-gray-900">1</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <table className="min-w-full text-left divide-y divide-gray-200 border border-gray-200 ">
            <tbody className="bg-white divide-y divide-gray-200 ">
              <tr>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900 font-bold">Number of Certified Individuals</td>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900 ">321</td>
              </tr>
              <tr>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">Number of <span className="font-bold">CCIEs</span></td>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">273</td>
              </tr>
              <tr>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">Number of <span className="font-bold">Double CCIEs</span></td>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">40</td>
              </tr>
              <tr>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">Number of <span className="font-bold">Triple CCIEs</span></td>
                <td className="p-3 whitespace-nowrap text-sm text-gray-900">8</td>
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
  
  export default Footer;