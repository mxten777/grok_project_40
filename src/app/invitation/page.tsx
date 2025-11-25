'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site.config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, MapPin, Users, Share2, QrCode, Sparkles, Heart, Star, Gift } from 'lucide-react';
import Image from 'next/image';

export default function InvitationPage() {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    const generateQR = async () => {
      try {
        const QRCode = (await import('qrcode')).default;
        const url = window.location.href;
        const qr = await QRCode.toDataURL(url);
        setQrCodeUrl(qr);
      } catch (err) {
        console.error('QR Code generation failed:', err);
      }
    };
    generateQR();
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: siteConfig.invitationTitle,
          text: siteConfig.invitationMessage,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('초대장 링크가 클립보드에 복사되었습니다.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 via-pink-900 to-yellow-900 relative overflow-hidden min-h-screen">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/15 to-pink-500/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.4),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.3),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.2),transparent_70%)]"></div>
      </div>

      {/* Premium Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-indigo-400/40 to-purple-400/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/35 to-pink-400/35 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-40 left-1/4 w-20 h-20 bg-gradient-to-r from-pink-400/45 to-yellow-400/45 rounded-full blur-2xl animate-pulse delay-500"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-purple-300/35 to-pink-300/35 rounded-full blur-2xl animate-bounce delay-3000"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-pink-300/40 to-yellow-300/40 rounded-full blur-xl animate-ping delay-1500"></div>
      <div className="absolute top-3/4 right-1/4 w-18 h-18 bg-gradient-to-r from-indigo-200/45 to-purple-200/45 rounded-full blur-2xl animate-bounce delay-2500"></div>

      {/* Sparkle Effects */}
      <div className="absolute top-20 left-20 animate-spin">
        <Sparkles className="h-6 w-6 text-yellow-300/60" />
      </div>
      <div className="absolute top-40 right-40 animate-pulse delay-1000">
        <Star className="h-8 w-8 text-pink-300/50" />
      </div>
      <div className="absolute bottom-32 left-32 animate-bounce delay-2000">
        <Heart className="h-5 w-5 text-red-300/60" />
      </div>
      <div className="absolute bottom-20 right-32 animate-spin delay-3000">
        <Gift className="h-7 w-7 text-purple-300/50" />
      </div>

      <div className="relative z-10 py-4 px-4 sm:py-6 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Premium Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden bg-gradient-to-br from-white/30 to-white/10 border-2 border-white/30 group-hover:scale-110 transition-all duration-500">
                <Image
                  src="/osan_logo.svg"
                  alt="오산고 로고"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
                  오산고 71회
                </h1>
                <p className="text-lg text-purple-200 font-bold opacity-90">송년회</p>
              </div>
            </div>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <Sparkles className="h-5 w-5 text-yellow-400 mr-3 animate-spin" />
              <span className="text-lg font-bold text-white">초대장</span>
              <Sparkles className="h-5 w-5 text-yellow-400 ml-3 animate-spin" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-purple-200 via-pink-200 to-yellow-200 bg-clip-text text-transparent mb-4 animate-pulse leading-tight">
              따뜻한 마음으로<br />
              <span className="text-2xl sm:text-3xl lg:text-4xl">초대합니다</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed font-light">
              소중한 동기들과 함께하는 특별한 시간
            </p>
            <div className="flex justify-center space-x-3">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
              <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 sm:gap-4">
            {/* Main Invitation Card */}
            <Card className="bg-white/20 backdrop-blur-xl border-white/20 shadow-2xl">
              <CardHeader className="text-center pb-2 sm:pb-3">
                <CardTitle className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-1">
                  {siteConfig.invitationTitle}
                </CardTitle>
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-3">
                {/* Hero Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                  <Image
                    src={siteConfig.invitationImage}
                    alt="초대장 이미지"
                    width={600}
                    height={400}
                    className="relative w-full h-48 sm:h-40 object-cover rounded-2xl shadow-xl"
                  />
                </div>

                {/* Message */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-4">
                  <Heart className="h-5 sm:h-5 w-5 sm:w-5 text-pink-400 mx-auto mb-3 sm:mb-3" />
                  <div className="text-sm sm:text-sm text-white text-center leading-relaxed">
                    <p className="mb-2">오랜만에 오산고 동기들을 만나</p>
                    <p className="mb-2">함께 추억을 나누고 새로운 인연을</p>
                    <p className="mb-2">만들어보는 시간을 갖고자 합니다.</p>
                    <p className="pt-2 font-bold">많은 참석 부탁드립니다. ✨</p>
                  </div>
                </div>

                {/* Enhanced Event Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3 sm:space-x-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-3 sm:p-3 hover:from-white/15 hover:to-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 group">
                    <div className="w-10 sm:w-10 h-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Calendar className="h-5 sm:h-5 w-5 sm:w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs sm:text-xs text-gray-200 font-medium mb-0.5">📅 일시</p>
                      <p className="text-white font-bold text-base sm:text-base">{siteConfig.eventDate}</p>
                      <p className="text-gray-300 text-xs sm:text-xs mt-0.5">시간을 꼭 지켜주세요</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-3 sm:p-3 hover:from-white/15 hover:to-white/10 transition-all duration-500 border border-white/10 hover:border-white/20 group">
                    <div className="w-10 sm:w-10 h-10 sm:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="h-5 sm:h-5 w-5 sm:w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs sm:text-xs text-gray-200 font-medium mb-0.5">📍 장소</p>
                      <p className="text-white font-bold text-base sm:text-base">{siteConfig.eventLocation}</p>
                      <p className="text-gray-300 text-xs sm:text-xs mt-0.5">네비게이션으로 찾아오세요</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 pt-2">
                  <Button
                    onClick={handleShare}
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 hover:from-purple-700 hover:via-pink-700 hover:to-yellow-600 text-white px-6 sm:px-4 py-3 sm:py-2 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 flex-1 border-2 border-white/20"
                  >
                    <Share2 className="h-4 sm:h-3 w-4 sm:w-3 mr-2 sm:mr-1" />
                    ✨ 공유하기 ✨
                  </Button>
                  <Link href="/attendance" className="flex-1">
                    <Button
                      className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 sm:px-4 py-3 sm:py-2 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-2 border-white/20"
                    >
                      <Users className="h-4 sm:h-3 w-4 sm:w-3 mr-2 sm:mr-1" />
                      🎉 출석하기 🎉
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* QR Code & Additional Info */}
            <div className="space-y-4 sm:space-y-3">
              {/* Enhanced QR Code Card */}
              <Card className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border-white/30 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
                <CardHeader className="text-center relative z-10 pb-2 sm:pb-3">
                  <div className="w-12 sm:w-10 h-12 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-2 shadow-xl">
                    <QrCode className="h-6 sm:h-5 w-6 sm:w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-lg font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-1">
                    QR 코드
                  </CardTitle>
                  <p className="text-gray-200 text-sm sm:text-sm">스마트폰으로 스캔하세요 ✨</p>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  {qrCodeUrl ? (
                    <div className="space-y-3 sm:space-y-3">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl animate-pulse"></div>
                        <Image
                          src={qrCodeUrl}
                          alt="초대장 QR 코드"
                          width={140}
                          height={140}
                          className="relative border-4 border-white/30 rounded-2xl shadow-2xl"
                        />
                      </div>
                      <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/30">
                        <div className="text-white text-sm leading-relaxed font-medium space-y-1">
                          <p>📱 이 QR코드를 스캔하면</p>
                          <p>초대장으로 바로 이동합니다!</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-36 sm:w-32 h-36 sm:h-32 mx-auto bg-gradient-to-r from-white/10 to-white/5 rounded-2xl flex items-center justify-center border border-white/20">
                      <div className="animate-spin rounded-full h-12 sm:h-10 w-12 sm:w-10 border-4 border-white/30 border-t-white"></div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Enhanced Additional Info */}
              <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border-white/30 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
                <CardContent className="p-4 sm:p-4 text-center relative z-10">
                  <div className="w-12 sm:w-10 h-12 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-3 shadow-xl animate-pulse">
                    <Heart className="h-6 sm:h-5 w-6 sm:w-5 text-white" />
                  </div>
                  <h3 className="text-base sm:text-base font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent mb-2">
                    참석을 기다립니다 💖
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-sm sm:text-sm mb-3 space-y-1">
                    <span className="block">오랜만에 만나는 소중한 시간입니다.</span>
                    <span className="block">따뜻한 마음으로 함께해요! 🌟</span>
                  </p>
                  <div className="flex justify-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-4 sm:mt-4">
            <Link href="/">
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm px-6 sm:px-4 py-2 sm:py-1 rounded-xl font-medium transition-all duration-300"
              >
                ← 홈으로 돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}