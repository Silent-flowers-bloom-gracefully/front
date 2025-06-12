export const NICKNAME_KEY = 'userNickname';

export const saveNickname = (nickname: string) => {
  localStorage.setItem(NICKNAME_KEY, nickname);
};

export const getNickname = () => {
  return localStorage.getItem(NICKNAME_KEY) || '와구리짱';
}; 