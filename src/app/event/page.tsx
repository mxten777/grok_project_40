'use client';

import { siteConfig } from '@/config/site.config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, Users, Camera, MessageSquare, Calendar, MapPin, CreditCard, Phone, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function EventPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-red-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="py-6 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src="/samkwang_logo.svg"
                  alt="삼광 로고"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent leading-tight">
                  삼광 30회
                </h1>
                <p className="text-sm text-orange-200 font-medium">송년회</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-1">
              {[
                { href: '/', label: '홈', icon: Home },
                { href: '/attendance', label: '출석', icon: Users },
                { href: '/gallery', label: '갤러리', icon: Camera },
                { href: '/guestbook', label: '방명록', icon: MessageSquare },
              ].map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href}>
                  <Button
                    variant="ghost"
                    className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent mb-4">
              {siteConfig.siteName}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              따뜻한 송년의 밤, 소중한 사람들과 함께하는 특별한 시간
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Event Details */}
            <Card className="bg-white/20 backdrop-blur-xl border-white/20 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent mb-4">
                  행사 세부정보
                </CardTitle>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">날짜 및 시간</h3>
                    <p className="text-gray-300">{siteConfig.eventDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">장소</h3>
                    <p className="text-gray-300">{siteConfig.eventLocation}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">참가비</h3>
                    <p className="text-gray-300">{siteConfig.eventFee}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="bg-white/20 backdrop-blur-xl border-white/20 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent mb-4">
                  입금 계좌정보
                </CardTitle>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">은행</span>
                      <span className="font-semibold text-white">{siteConfig.accountInfo.bank}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">예금주</span>
                      <span className="font-semibold text-white">{siteConfig.accountInfo.holder}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">계좌번호</span>
                      <span className="font-semibold text-white font-mono">{siteConfig.accountInfo.number}</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-300">
                    참가 신청 후 24시간 이내 입금 부탁드립니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Directions */}
          <Card className="bg-white/20 backdrop-blur-xl border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent mb-4">
                오시는 길
              </CardTitle>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300 mb-4">{siteConfig.eventLocation}</p>
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  지도에서 보기
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-white mb-6">문의사항</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-300">전화</p>
                  <p className="text-white font-semibold">010-XXXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-300">이메일</p>
                  <p className="text-white font-semibold">contact@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}