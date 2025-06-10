import { atom } from 'recoil';

export interface SignupState {
  username: string;
  password: string;
  nickname: string;
  categories: string[];
}

export const signupState = atom<SignupState>({
  key: 'signupState',
  default: {
    username: '',
    password: '',
    nickname: '',
    categories: []
  }
}); 