import Link from 'next/link';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-regen-400">Biomaterials Lab</h3>
            <p className="text-slate-400 text-sm">
              Prof. Shan Hui Hsu Laboratory<br/>
              Institute of Polymer Science and Engineering<br/>
              National Taiwan University
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-regen-500" />
                <span>No. 1, Sec. 4, Roosevelt Rd., Taipei 10617, Taiwan</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-regen-500" />
                <span>shhsu@ntu.edu.tw</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-regen-500" />
                <span>+886-2-3366-xxxx</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Admin */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/research" className="hover:text-regen-400 transition-colors">Research Areas</Link></li>
              <li><Link href="/publications" className="hover:text-regen-400 transition-colors">Publications</Link></li>
              <li><Link href="https://www.ntu.edu.tw/" target="_blank" className="hover:text-regen-400 transition-colors inline-flex items-center gap-1">NTU Official <ExternalLink size={12}/></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hsu Lab. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             {/* Admin Login Link - Strategy for CMS */}
            <Link href="/keystatic" className="hover:text-slate-300 transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};