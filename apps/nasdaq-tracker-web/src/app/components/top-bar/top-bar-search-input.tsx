import { Input } from 'tamagui';

export function SearchInput() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Input placeholder="Search" size="$4" borderWidth={2} width={'100%'} />
  );
}
