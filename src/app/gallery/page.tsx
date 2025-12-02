'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site.config';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Home, Users, MessageSquare, Calendar, Camera, Grid3X3, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState(siteConfig.galleryYears[0]?.year || 2025);

  const selectedYearData = siteConfig.galleryYears.find(year => year.year === selectedYear);

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-slate-900 relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-35">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-teal-500/15 to-emerald-500/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(20,184,166,0.25),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.2),transparent_60%)]"></div>
      </div>

      {/* Premium Floating Elements */}
      <div className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-r from-green-400/35 to-teal-400/35 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-36 h-36 bg-gradient-to-r from-teal-400/30 to-emerald-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-emerald-400/25 to-green-400/25 rounded-full blur-2xl animate-pulse delay-500"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-r from-teal-300/30 to-emerald-300/30 rounded-full blur-xl animate-bounce delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-gradient-to-r from-green-300/35 to-teal-300/35 rounded-full blur-lg animate-ping delay-3000"></div>

      <div className="relative z-10">
        {/* Premium Header */}
        <header className="py-8 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto flex justify-between items-center relative">
            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden bg-gradient-to-br from-white/20 to-white/5 border border-white/20 group-hover:scale-110 transition-all duration-500">
                <Image
                  src="/baikal_logo.png"
                  alt="강둑 로고"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-green-200 to-teal-200 bg-clip-text text-transparent leading-tight drop-shadow-lg">
                  2025년
                </h1>
                <p className="text-3xl text-green-200 font-bold opacity-90">강둑 송년회</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-2">
              {[
                { href: '/', label: '홈', icon: Home },
                { href: '/invitation', label: '초대장', icon: Star },
                { href: '/attendance', label: '출석', icon: Users },
                { href: '/guestbook', label: '방명록', icon: MessageSquare },
                { href: '/event', label: '행사정보', icon: Calendar },
              ].map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href}>
                  <Button
                    variant="ghost"
                    className="text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:shadow-xl border border-transparent hover:border-white/20"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-12 px-6">
          {/* Year Tabs */}
          <Card className="bg-white/20 backdrop-blur-xl border-white/20 shadow-2xl mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent mb-4">
                추억 모음
              </CardTitle>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-2 overflow-x-auto pb-4">
                {siteConfig.galleryYears.map((yearData) => (
                  <Button
                    key={yearData.year}
                    variant={selectedYear === yearData.year ? "default" : "outline"}
                    onClick={() => handleYearChange(yearData.year)}
                    className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedYear === yearData.year
                        ? 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white shadow-lg'
                        : 'border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                    }`}
                  >
                    <Grid3X3 className="h-4 w-4 mr-2" />
                    {yearData.title}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Gallery Grid */}
          {selectedYearData && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {selectedYearData.images.slice(0, 20).map((image, index) => (
                <Card key={index} className="bg-white/20 backdrop-blur-xl border-white/20 shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-300">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}