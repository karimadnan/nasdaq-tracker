import { useRef } from 'react';

type UseIntersectionObserverHook = (props: { onIntersection: () => void }) => {
  observer: IntersectionObserver;
  unRegisterIntersectingCard: () => void;
  registerIntersectingCard: (node: Element | null) => boolean;
};

export const useIntersectionObserver: UseIntersectionObserverHook = ({
  onIntersection,
}) => {
  const currentObservedCard = useRef<Element | null>(null);

  const observer = useRef<IntersectionObserver>(
    new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersection();
        }
      },
      { threshold: 0.5 }
    )
  );

  function unRegisterIntersectingCard() {
    if (currentObservedCard.current) {
      observer.current.unobserve(currentObservedCard.current as Element);
    }
  }

  function registerIntersectingCard(node: Element | null) {
    if (node) {
      unRegisterIntersectingCard();
      currentObservedCard.current = node;
      return true;
    }
    return false;
  }

  return {
    observer: observer.current,
    unRegisterIntersectingCard,
    registerIntersectingCard,
  };
};
