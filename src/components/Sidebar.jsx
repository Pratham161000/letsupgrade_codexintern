import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { icon: '📊', label: 'Dashboard', href: '/dashboard' },
    { icon: '🧭', label: 'Explore Programs', href: '/explore' },
    { icon: '📚', label: 'My Programs', href: '/my-programs' },
    { icon: '🎓', label: 'Certificates', href: '/certificates' },
    { icon: '🏆', label: 'Rewards', href: '/rewards', badge: '•' },
    { icon: '🔄', label: 'Refer & Earn', href: '/refer' },
    { icon: '🪙', label: 'LU Coins', href: '/coins' },
    { icon: '👥', label: 'Student Ambassador', href: '/ambassador' },
    { icon: '👥', label: 'Community', href: '/community' },
  ];

  const footerLinks = [
    { label: 'Trainerpreneur Program', href: '/trainerpreneur' },
    { label: 'Hire with LU', href: '/hire' },
    { label: 'Community Guidelines', href: '/guidelines' },
    { label: 'Verify Certificate', href: '/verify' },
  ];

  return (
    <aside className="w-64 border-r min-h-screen flex flex-col bg-white">
      <div className="p-4 border-b">
        <Link to="/">
          <img src="/placeholder.svg" alt="LU Logo" className="h-8" />
        </Link>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 
                  ${location.pathname === item.href ? 'bg-gray-100' : 'text-gray-700'}`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto text-red-500">{item.badge}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mt-auto">
        <button className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
          Login
        </button>

        <div className="mt-4 pt-4 border-t text-sm">
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          <p>Copyright © 2024 LetsUpgrade EdTech Pvt. Ltd.</p>
          <p>Version 2.0.3</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

