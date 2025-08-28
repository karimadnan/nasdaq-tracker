import { useDebounce } from '@org/hooks';
import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { Input } from 'tamagui';

const SEARCH_QUERY_KEY = 'searchKey';

export function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const debounce = useDebounce();
  const currentSearchQuery = searchParams.get(SEARCH_QUERY_KEY) || '';
  const hasSearchParam = currentSearchQuery !== '';

  if (hasSearchParam && query !== currentSearchQuery) {
    setQuery(currentSearchQuery || '');
  }

  function onSearch() {
    if (query) setSearchParams({ [SEARCH_QUERY_KEY]: query });
    else setSearchParams({});
  }

  function onTextChange(text: string) {
    debounce(() => {
      setQuery(text);
    }, 300);
  }

  return (
    <Input
      onChangeText={onTextChange}
      onSubmitEditing={() => onSearch()}
      placeholder="Search"
      size="$4"
      borderWidth={2}
      width={'100%'}
    />
  );
}
