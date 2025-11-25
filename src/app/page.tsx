'use client';

import { siteConfig } from '@/config/site.config';
import { useCountdown } from '@/hooks/useCountdown';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Users, Camera, MessageSquare, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  const timeLeft = useCountdown(siteConfig.dDayTargetDate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-slate-500/15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.2),transparent_50%)]"></div>
      </div>

      {/* Premium Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-36 h-36 bg-gradient-to-r from-indigo-400/25 to-purple-400/25 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-r from-pink-400/25 to-purple-400/25 rounded-full blur-xl animate-bounce delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-gradient-to-r from-indigo-300/30 to-blue-300/30 rounded-full blur-lg animate-ping delay-3000"></div>

      {/* Animated Stars */}
      <div className="absolute top-32 left-20 animate-spin">
        <Star className="h-6 w-6 text-yellow-300/60" />
      </div>
      <div className="absolute top-60 right-32 animate-pulse delay-1000">
        <Star className="h-8 w-8 text-pink-300/50" />
      </div>
      <div className="absolute bottom-60 left-32 animate-bounce delay-2000">
        <Star className="h-5 w-5 text-blue-300/60" />
      </div>

      <div className="relative z-10">
        {/* Premium Header */}
        <header className="py-6 lg:py-8 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto flex justify-between items-center relative">
            <div className="flex items-center space-x-3 lg:space-x-4 group">
              <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden bg-gradient-to-br from-white/20 to-white/5 border border-white/20 group-hover:scale-110 transition-all duration-500">
                <Image
                  src="/osan_logo.svg"
                  alt="오산고 로고"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight drop-shadow-lg">
                  오산고 71회
                </h1>
                <p className="text-xs lg:text-sm text-purple-200 font-medium opacity-90">송년회</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-2">
              {[
                { href: '/invitation', label: '초대장', icon: Star },
                { href: '/attendance', label: '출석', icon: Users },
                { href: '/gallery', label: '갤러리', icon: Camera },
                { href: '/guestbook', label: '방명록', icon: MessageSquare },
                { href: '/event', label: '행사정보', icon: Calendar },
              ].map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href}>
                  <Button
                    variant="ghost"
                    className="text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-white/20 hover:to-white/10 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:shadow-xl border border-transparent hover:border-white/20 text-sm lg:text-base px-3 lg:px-4"
                  >
                    <Icon className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
                    {label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Premium Hero Section */}
        <section className="py-16 lg:py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-white/20">
                    <Star className="h-4 w-4 text-yellow-400 mr-2 animate-pulse" />
                    <span className="text-sm font-medium text-white">오산고 71회 송년회</span>
                  </div>
                  <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-white via-purple-200 via-pink-200 to-yellow-200 bg-clip-text text-transparent leading-tight animate-pulse">
                    {siteConfig.eventYear}년<br />
                    <span className="text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      {siteConfig.eventCount} 송년회
                    </span>
                  </h2>
                  <p className="text-lg lg:text-xl xl:text-2xl text-gray-200 leading-relaxed font-light">
                    오랜만에 동기들을 만나 함께 추억을 나누고<br />
                    <span className="text-purple-200 font-medium">새로운 인연을 만들어보는 소중한 시간</span>
                  </p>
                </div>

                {/* Premium Event Info Cards */}
                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  <Card className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border-white/30 hover:bg-white/25 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group">
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex items-center space-x-3 lg:space-x-4">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Calendar className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                        </div>
                        <div>
                          <p className="text-xs lg:text-sm text-gray-300 font-medium mb-1">📅 일시</p>
                          <p className="text-white font-bold text-base lg:text-lg">{siteConfig.eventDate}</p>
                          <p className="text-gray-400 text-xs">시간을 꼭 지켜주세요 ✨</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border-white/30 hover:bg-white/25 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group">
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex items-center space-x-3 lg:space-x-4">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
                        </div>
                        <div>
                          <p className="text-xs lg:text-sm text-gray-300 font-medium mb-1">📍 장소</p>
                          <p className="text-white font-bold text-base lg:text-lg">{siteConfig.eventLocation}</p>
                          <p className="text-gray-400 text-xs">네비게이션으로 찾아오세요 🗺️</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Premium CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                  <Link href="/invitation" className="flex-1">
                    <Button className="group w-full bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 hover:from-purple-700 hover:via-pink-700 hover:to-yellow-600 text-white px-8 lg:px-10 py-3 lg:py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-2 border-white/20">
                      <Star className="h-5 w-5 lg:h-6 lg:w-6 mr-2 lg:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      ✨ 초대장 보기 ✨
                    </Button>
                  </Link>
                  <Link href="/attendance" className="flex-1">
                    <Button className="group w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 lg:px-10 py-3 lg:py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-2 border-white/20">
                      <Users className="h-5 w-5 lg:h-6 lg:w-6 mr-2 lg:mr-3 group-hover:bounce transition-transform duration-300" />
                      🎉 출석 체크 🎉
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-8 lg:space-y-10 order-1 lg:order-2">
                {/* Premium Countdown */}
                <Card className="bg-gradient-to-br from-purple-600/25 to-pink-600/25 backdrop-blur-xl border-white/30 shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
                  <CardContent className="p-6 lg:p-8 relative z-10">
                    <div className="text-center mb-6 lg:mb-8">
                      <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                        <Star className="h-4 w-4 text-yellow-400 mr-2 animate-spin" />
                        <span className="text-sm font-semibold text-white">D-DAY</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2">
                        카운트다운
                      </h3>
                      <p className="text-gray-300 text-sm">기다려지는 그 날까지...</p>
                    </div>
                    <div className="grid grid-cols-4 gap-3 lg:gap-4">
                      {[
                        { value: timeLeft.days, label: '일', color: 'from-purple-500 to-pink-500' },
                        { value: timeLeft.hours, label: '시간', color: 'from-blue-500 to-purple-500' },
                        { value: timeLeft.minutes, label: '분', color: 'from-green-500 to-blue-500' },
                        { value: timeLeft.seconds, label: '초', color: 'from-yellow-500 to-orange-500' },
                      ].map(({ value, label, color }) => (
                        <div key={label} className="text-center group">
                          <div className={`bg-gradient-to-br ${color} backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20 shadow-xl group-hover:scale-110 transition-all duration-500`}>
                            <div className="text-2xl lg:text-4xl font-black text-white mb-1">{value}</div>
                            <div className="text-xs lg:text-sm text-white/90 font-bold">{label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Premium Hero Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-yellow-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  <Image
                    src={siteConfig.heroImages[0]}
                    alt="Hero image"
                    width={1200}
                    height={800}
                    priority
                    className="relative w-full h-64 lg:h-80 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 border border-white/20"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                      <p className="text-white text-sm font-medium text-center">오산고 동기들과의 특별한 시간 ✨</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features Section */}
        <section className="py-16 lg:py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Star className="h-4 w-4 text-blue-400 mr-2 animate-pulse" />
                <span className="text-sm font-medium text-white">특별한 기능들</span>
              </div>
              <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight">
                함께하는<br />
                <span className="text-3xl lg:text-4xl xl:text-5xl">특별한 순간들</span>
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl text-gray-300 font-light">
                다양한 기능으로 추억을 만들고 소통해보세요
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: Camera,
                  title: '갤러리',
                  description: '소중한 순간들을 사진으로 남겨보세요',
                  href: '/gallery',
                  color: 'from-blue-500 via-purple-500 to-pink-500',
                  bgColor: 'from-blue-600/20 to-purple-600/20'
                },
                {
                  icon: MessageSquare,
                  title: '방명록',
                  description: '따뜻한 메시지를 남겨보세요',
                  href: '/guestbook',
                  color: 'from-green-500 via-blue-500 to-purple-500',
                  bgColor: 'from-green-600/20 to-blue-600/20'
                },
                {
                  icon: Users,
                  title: '출석 체크',
                  description: '참석 여부를 확인하고 소통해보세요',
                  href: '/attendance',
                  color: 'from-purple-500 via-pink-500 to-yellow-500',
                  bgColor: 'from-purple-600/20 to-pink-600/20'
                },
              ].map(({ icon: Icon, title, description, href, color, bgColor }, index) => (
                <Link key={href} href={href}>
                  <Card className={`bg-gradient-to-br ${bgColor} backdrop-blur-xl border-white/30 hover:bg-white/25 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer group relative overflow-hidden h-full`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-6 lg:p-8 text-center relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${color} rounded-3xl flex items-center justify-center mx-auto mb-6 lg:mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                          <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                        </div>
                        <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4 group-hover:text-yellow-200 transition-colors duration-300">{title}</h4>
                        <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300 text-sm lg:text-base">{description}</p>
                      </div>
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto rounded-full"></div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
