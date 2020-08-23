import React from "react";
import styled from "@emotion/styled";

const InputField = styled.input`
  border-radius: 1em;
  padding: 0.3em;
  margin-bottom: 0;
`;

const SearchInput = (probs) => {
  return (
    <InputField
      value={probs.value}
      onChange={(event) => probs.onChange(event.target.value.trim())}
      placeholder="Search team"
      className="searchInput"
    ></InputField>
  );
};

export default SearchInput;
