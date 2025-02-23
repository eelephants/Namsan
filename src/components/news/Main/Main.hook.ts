import { getNewsSearchList } from '@Api/news.api';
import { News } from '@Interface/api.interface';
import { useLocation } from '@reach/router';
import { NewsType } from '@Type/api.type';
import { navigate } from 'gatsby-plugin-intl';
import { useState } from 'react';
import { TPagination, TTab } from './Main.interface';

const useMain = () => {
  const params = new URLSearchParams(useLocation().search);
  const urlPage = Number(params.get('page') || '0');
  const newsType = (params.get('newsType') as NewsType) || 'all';

  const [tab, setTab] = useState<TTab>(newsType);
  const [newsList, setNewsList] = useState<News[]>([]);
  const [pageNationState, setPageNation] = useState<TPagination>();

  const onCallNewsList = async (
    newsType: NewsType = 'all',
    searchValue?: string,
  ) => {
    try {
      const { resultList, algoliaResult } = await getNewsSearchList({
        newsType,
        searchValue,
        page: urlPage > 0 ? urlPage - 1 : 0,
      });

      if (!algoliaResult) {
        navigate(`/news`);
        return;
      }

      const { nbPages, page } = algoliaResult;
      setPageNation({ nbPages, page: page + 1 });
      setNewsList(resultList);
      setTab(newsType);
    } catch (error) {
      console.error(error);
    }
  };
  return { urlPage, newsType, tab, newsList, pageNationState, onCallNewsList };
};

export default useMain;
