'use client';

import { Home, Clock, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const navItems = [
    {
      href: '/',
      icon: Home,
      label: 'Home',
      isActive: pathname === '/'
    },
    {
      href: '/history',
      icon: Clock,
      label: 'History',
      isActive: pathname === '/history'
    },
    {
      href: '/profile',
      icon: User,
      label: 'Profile',
      isActive: pathname === '/profile'
    }
  ];
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
      <div className="w-full">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <div className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-200 active:scale-95 ${
                  item.isActive 
                    ? 'bg-red-500' 
                    : 'hover:bg-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    item.isActive 
                      ? 'text-white' 
                      : 'text-black'
                  }`} />
                  <span className={`text-xs font-medium ${
                    item.isActive 
                      ? 'text-white' 
                      : 'text-gray-600'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
