import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { NextRequest, NextResponse } from 'next/server';
import { useState } from "react";
import isCorrectSession from '../components/isCorrectSession';

const Index = (req:NextRequest, res:NextResponse) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      email, password, callbackUrl: '/dday'
    });

    if (result) {
      alert(result);
    }
  };

  if (isCorrectSession(session)) {
    return (
      <>
      <div className="container card p-5 my-5 bg-dark text-light">
    <h1>D Day Attack💥</h1>
    <p>소중한 기념일을 기록하고, 잊지 않도록 알람을 설정해 보아요!</p>
    <a className="btn btn-secondary" href="/dday">나의 기념일 목록 보기</a>
    </div>
      </>
    );
  } else {
    return (
      <>
      <div className="container card p-5 my-5 bg-dark text-light">
    <h1>D Day Attack💥</h1>
    <p>소중한 기념일을 기록하고, 잊지 않도록 알람을 설정해 보아요!</p>
    <div className="mt-2 mb-2">
    <h4>로그인하기 ⬇️</h4>
    </div>
    <div className="input-icon-group mb-3">
    <input type="text" className="form-control" autoFocus placeholder="이메일 입력" onChange={(e) => setUsername(e.target.value)} />
    </div>
    <div className="input-icon-group mb-3">
    <input type="password" className="form-control" placeholder="비밀번호 입력" onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <button className="btn btn-secondary" type="button" onClick={handleLogin}>로그인</button>
    <a className="btn btn-light text-black mt-2" href="/signup">가입하기</a>
    
    </div>
      </>
    );
  }
};

export default Index;