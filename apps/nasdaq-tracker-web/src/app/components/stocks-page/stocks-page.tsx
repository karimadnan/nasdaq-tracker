import { fetchTickers } from '@org/api';
import { useIntersectionObserver } from '@org/hooks';
import { CardsGrid, SkeletonCard, StocksCard } from '@org/ui';
import { useInfiniteQuery } from '@tanstack/react-query';

function CardsSkeleton() {
  return (
    <CardsGrid
      data={Array.from({ length: 20 }).map((_, index) => index)}
      keyExtractor={(record) => record}
      renderItem={() => (
        <SkeletonCard
          height={150}
          width={350}
          maxW={'40%'}
          borderRadius={30}
          justify="center"
        />
      )}
    />
  );
}

// start loading the next page if we're intersecting with the 4th element from the bottom
const INTERSECTION_POINT = 4;

export function StocksPage() {
  const { data, fetchNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['nasdaq-tickers'],
      queryFn: fetchTickers,
      getNextPageParam: (lastPage) => lastPage.next_url ?? undefined,
      initialPageParam: undefined,
    });

  // Normalize query pages to return the results only and flat the returned arrays
  const stocksData = data?.pages.map((page) => page.results).flat() || [];

  const { registerIntersectingCard, unRegisterIntersectingCard, observer } =
    useIntersectionObserver({
      onIntersection: fetchNextPage,
    });

  const loadedCardsAmount = stocksData.length;

  /* 
    Which card should we begin the intersection,
    ex: 
      If we defined the INTERSECTION_POINT to 4, and we have 100 loaded cards =>
      the threshold would be 96, which means we will begin intersecting at card number 96
  */
  const threshold = loadedCardsAmount - INTERSECTION_POINT;

  return (
    <>
      <CardsGrid
        data={stocksData}
        keyExtractor={(record) => record.ticker}
        renderItem={(record, index) => (
          <StocksCard
            ref={(node) => {
              if (index === threshold) {
                if (registerIntersectingCard(node as Element)) {
                  observer.observe(node as Element);
                }
              }

              return () => {
                unRegisterIntersectingCard();
              };
            }}
            record={record}
          />
        )}
      />
      {(isFetching || isFetchingNextPage) && <CardsSkeleton />}
    </>
  );
}
