'use client';

import { useState } from 'react';
import { useGuestbookStore } from '@/stores/guestbookStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Home, Users, Camera, Calendar, MessageSquare, Send, Edit, Trash2, Heart, User } from 'lucide-react';
import Image from 'next/image';

export default function GuestbookPage() {
  const { entries, addEntry, editEntry, deleteEntry } = useGuestbookStore();
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editMessage, setEditMessage] = useState('');
  const [editPassword, setEditPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname && message && password) {
      addEntry({ nickname, message, password });
      setNickname('');
      setMessage('');
      setPassword('');
    }
  };

  const handleEdit = (id: string) => {
    const entry = entries.find(e => e.id === id);
    if (entry) {
      setEditingId(id);
      setEditMessage(entry.message);
      setEditPassword('');
    }
  };

  const handleSaveEdit = () => {
    if (editingId && editPassword) {
      const success = editEntry(editingId, editPassword, editMessage);
      if (success) {
        setEditingId(null);
        setEditMessage('');
        setEditPassword('');
      } else {
        alert('비밀번호가 일치하지 않습니다.');
      }
    }
  };

  const handleDelete = (id: string) => {
    const password = prompt('삭제할 메시지의 비밀번호를 입력하세요:');
    if (password) {
      const success = deleteEntry(id, password);
      if (!success) {
        alert('비밀번호가 일치하지 않습니다.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="py-6 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src="/osan_logo.svg"
                  alt="오산고 로고"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent leading-tight">
                  오산고 71회
                </h1>
                <p className="text-sm text-pink-200 font-medium">송년회</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-1">
              {[
                { href: '/', label: '홈', icon: Home },
                { href: '/attendance', label: '출석', icon: Users },
                { href: '/gallery', label: '갤러리', icon: Camera },
                { href: '/event', label: '행사정보', icon: Calendar },
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
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Write Message Section */}
            <div className="lg:col-span-1">
              <Card className="bg-white/20 backdrop-blur-xl border-white/20 shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent mb-4">
                    메시지 남기기
                  </CardTitle>
                  <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="닉네임"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-pink-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="따뜻한 메시지를 남겨주세요..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-pink-400 resize-none"
                      />
                    </div>
                    <div>
                      <Input
                        type="password"
                        placeholder="비밀번호 (수정/삭제용)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-pink-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      메시지 남기기
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Messages Section */}
            <div className="lg:col-span-2">
              <Card className="bg-white/20 backdrop-blur-xl border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <Heart className="h-6 w-6" />
                    따뜻한 메시지들 ({entries.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {entries.length === 0 ? (
                      <div className="text-center py-12">
                        <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-400">아직 메시지가 없습니다. 첫 번째 메시지를 남겨보세요!</p>
                      </div>
                    ) : (
                      entries.map((entry) => (
                        <Card key={entry.id} className="bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/20 transition-all duration-300">
                          <CardContent className="p-6">
                            {editingId === entry.id ? (
                              <div className="space-y-4">
                                <Textarea
                                  value={editMessage}
                                  onChange={(e) => setEditMessage(e.target.value)}
                                  rows={3}
                                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-pink-400"
                                />
                                <div className="flex gap-2">
                                  <Input
                                    type="password"
                                    placeholder="비밀번호"
                                    value={editPassword}
                                    onChange={(e) => setEditPassword(e.target.value)}
                                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-pink-400"
                                  />
                                  <Button
                                    onClick={handleSaveEdit}
                                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4"
                                  >
                                    저장
                                  </Button>
                                  <Button
                                    onClick={() => setEditingId(null)}
                                    variant="outline"
                                    className="border-white/30 text-white hover:bg-white/10"
                                  >
                                    취소
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                                      <User className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                      <p className="font-semibold text-white">{entry.nickname}</p>
                                      <p className="text-sm text-gray-300">
                                        {new Date(entry.createdAt).toLocaleString('ko-KR')}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex space-x-2">
                                    <Button
                                      onClick={() => handleEdit(entry.id)}
                                      variant="ghost"
                                      size="sm"
                                      className="text-gray-400 hover:text-white hover:bg-white/10"
                                    >
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      onClick={() => handleDelete(entry.id)}
                                      variant="ghost"
                                      size="sm"
                                      className="text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <p className="text-gray-200 leading-relaxed">{entry.message}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}