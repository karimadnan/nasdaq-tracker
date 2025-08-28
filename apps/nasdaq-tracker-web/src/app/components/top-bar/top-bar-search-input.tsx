import { SEARCH_QUERY_KEY } from '@org/constants';
import { useDebounce } from '@org/hooks';
import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { Input } from 'tamagui';

export function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const debounce = useDebounce();
  const currentSearchQuery = searchParams.get(SEARCH_QUERY_KEY) || '';

  if (query !== currentSearchQuery) {
    setSearchParams({ [SEARCH_QUERY_KEY]: query });
  }

  function onTextChange(text: string) {
    debounce(() => {
      setQuery(text);
    }, 400);
  }

  return (
    <Input
      onChangeText={onTextChange}
      defaultValue={currentSearchQuery}
      placeholder="Search"
      size="$4"
      borderWidth={2}
      width={'100%'}
      fontSize={16}
    />
  );
}
