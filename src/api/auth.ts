import axios from 'axios';

const BASE_URL = 'https://silent-flowers.xquare.app';

interface SignUpData {
  username: string;
  password: string;
  nickname: string;
  categories: string[];
}

export const authApi = {
  // 아이디 중복 확인
  checkUsername: async (username: string) => {
    const response = await axios.get(`${BASE_URL}/auth/check-username/${username}`);
    return response.data;
  },

  // 회원가입
  signUp: async (data: {
    username: string;
    password: string;
    nickname: string;
    categories: string[];
  }) => {
    const response = await axios.post(`${BASE_URL}/auth/signup`, data);
    return response;
  },

  // 로그인
  login: async (username: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        username,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      console.log('로그인 응답 전체:', response);
      console.log('로그인 응답 헤더:', response.headers);
      console.log('모든 헤더 키:', Object.keys(response.headers));
      
      const token = response.headers['Authorization'];
      const authHeader = token ? `Bearer ${token}` : null;
      console.log('authorization 헤더 값:', authHeader);

      if (authHeader) {
        localStorage.setItem('key', authHeader);
        console.log('로컬 스토리지 저장 후:', localStorage.getItem('key'));
      }

      return {
        success: !!authHeader,
        token: authHeader
      };
    } catch (error) {
      console.error('로그인 API 에러:', error);
      throw error;
    }
  }
}; 