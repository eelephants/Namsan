import { PageProps } from 'gatsby';
import React from 'react';
import MembersWrapper from '@Components/members/MembersWrapper';
import MembersTitle from '@Components/members/MembersTitle';
import SearchBar from '@Components/members/SearchBar';
import MemberList from '@Components/members/MemberList';
import Layout from '@Components/common/Layout';

const Members: React.FC<PageProps> = () => {
  return (
    <Layout>
      <MembersWrapper>
        <MembersTitle />
        <SearchBar />
        <MemberList />
      </MembersWrapper>
    </Layout>
  );
};

export default Members;
