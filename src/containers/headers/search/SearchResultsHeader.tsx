import React from 'react';
import { SearchHeaderMainContainer } from './styles/SearchHeaderMainContainer';
import { SearchHeaderTitle } from './styles/SearchHeaderTitle';

type Props = {
  title: string;
};

const SearchHeader: React.FunctionComponent<Props> = ({
  title,
}): JSX.Element => {
  return (
    <SearchHeaderMainContainer maxWidth={false}>
      <SearchHeaderTitle variant="h2">{title}</SearchHeaderTitle>
    </SearchHeaderMainContainer>
  );
};

export default SearchHeader;
