'use client';

import { useState } from 'react';
import { useAttendanceStore } from '@/stores/attendanceStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Search, Users, CheckCircle, Clock, Home, Camera, MessageSquare, Calendar, UserCheck } from 'lucide-react';
import Image from 'next/image';

export default function AttendancePage() {
  const {
    checkAttendance,
    getFilteredAttendees,
    getAttendanceRate,
    attendees,
  } = useAttendanceStore();

  const [selectedName, setSelectedName] = useState('');

  const filteredAttendees = getFilteredAttendees();
  const attendanceRate = getAttendanceRate();

  const handleCheckAttendance = () => {
    if (selectedName) {
      checkAttendance(selectedName);
      setSelectedName('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-35">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/15 to-purple-500/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.25),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.2),transparent_60%)]"></div>
      </div>

      {/* Premium Floating Elements */}
      <div className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-r from-blue-400/35 to-indigo-400/35 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-36 h-36 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/25 to-blue-400/25 rounded-full blur-2xl animate-pulse delay-500"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-r from-blue-300/30 to-indigo-300/30 rounded-full blur-xl animate-bounce delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-gradient-to-r from-indigo-300/35 to-purple-300/35 rounded-full blur-lg animate-ping delay-3000"></div>

      <div className="relative z-10">
        {/* Premium Header */}
        <header className="py-8 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm"></div>
          <div className="max-w-7xl mx-auto flex justify-between items-center relative">
            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden bg-gradient-to-br from-white/20 to-white/5 border border-white/20 group-hover:scale-110 transition-all duration-500">
                <Image
                  src="/osan_logo.svg"
                  alt="오산고 로고"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent leading-tight drop-shadow-lg">
                  오산고 71회
                </h1>
                <p className="text-sm text-blue-200 font-medium opacity-90">송년회</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-2">
              {[
                { href: '/', label: '홈', icon: Home },
                { href: '/gallery', label: '갤러리', icon: Camera },
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
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Check Attendance Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Search and Check */}
              <Card className="bg-white/20 backdrop-blur-xl border-white/20 shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
                    출석 체크하기
                  </CardTitle>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="이름을 입력하세요"
                        value={selectedName}
                        onChange={(e) => setSelectedName(e.target.value)}
                        className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-blue-400"
                      />
                    </div>
                    <Button
                      onClick={handleCheckAttendance}
                      className="bg-white hover:bg-gray-100 text-gray-900 px-12 py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-4 border-white/30"
                    >
                      <CheckCircle className="h-5 w-5 mr-2" />
                      출석
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Attendance List */}
              <Card className="bg-white/20 backdrop-blur-xl border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    출석자 목록
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {filteredAttendees.map((attendee) => (
                      <div
                        key={attendee.id}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                          attendee.checked
                            ? 'bg-green-500/20 border border-green-400/30'
                            : 'bg-white/5 border border-white/10'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {attendee.checked ? (
                            <CheckCircle className="h-6 w-6 text-green-400" />
                          ) : (
                            <Clock className="h-6 w-6 text-gray-300" />
                          )}
                          <span className={`font-medium ${attendee.checked ? 'text-white' : 'text-white'}`}>
                            {attendee.name}
                          </span>
                        </div>
                        {attendee.checked && attendee.checkedAt && (
                          <span className="text-sm text-green-300">
                            {new Date(attendee.checkedAt).toLocaleString('ko-KR')}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats Sidebar */}
            <div className="space-y-8">
              {/* Attendance Rate */}
              <Card className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-xl border-white/20 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">출석률</h3>
                  <div className="text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                    {attendanceRate.toFixed(1)}%
                  </div>
                  <p className="text-gray-300">
                    {attendees.filter(a => a.checked).length} / {attendees.length}명
                  </p>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid gap-4">
                <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">출석 완료</p>
                        <p className="text-2xl font-bold text-white">
                          {attendees.filter(a => a.checked).length}명
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-lg border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">미출석</p>
                        <p className="text-2xl font-bold text-white">
                          {attendees.filter(a => !a.checked).length}명
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}