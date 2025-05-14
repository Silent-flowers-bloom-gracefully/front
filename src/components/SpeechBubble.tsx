import { ReactNode } from 'react';

interface SpeechBubbleProps {
  children: ReactNode;
}

const SpeechBubble = ({ children }: SpeechBubbleProps) => {
  return <div>{children}</div>;
};

export default SpeechBubble;
