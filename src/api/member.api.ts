import { IMember } from '../interface/api.interface';
import { EndPointType, MembersSearchRequest, TQuery } from '../type/api.type';
import { GetDataListQuery } from './index.api';

const getMemberPositionList = async () => {
  const positionList = await GetDataListQuery<string>({
    endPoint: 'members',
    queries: [],
    searchFields: ['position'],
  });
  return [...new Set(positionList)];
};

const getMemberBusinessFieldList = async (): Promise<string[]> => {
  const businessFieldsList = await GetDataListQuery<string>({
    endPoint: 'members',
    queries: [],
    searchFields: ['businessFields'],
  });
  const businessFieldList = businessFieldsList.reduce<string[]>(
    (acc, list) => [...acc, ...list],
    [],
  );

  return [...new Set(businessFieldList)];
};

const getMembers = async (params: MembersSearchRequest) => {
  const endPoint: EndPointType = 'members';
  const queries: TQuery[] = [
    {
      queryType: 'where',
      fieldPath: 'language',
      opStr: '==',
      value: params.language,
    },
    {
      queryType: 'where',
      fieldPath: 'name',
      opStr: '==',
      value: params.name,
    },
    {
      queryType: 'where',
      fieldPath: 'position',
      opStr: '==',
      value: params.position,
    },
    {
      queryType: 'where',
      fieldPath: 'businessFields',
      opStr: 'array-contains',
      value: params.businessField,
    },
    {
      queryType: 'orderby',
      fieldPath: 'order',
      directionStr: 'asc',
    },
  ];

  return await GetDataListQuery<IMember>({
    endPoint,
    queries,
  });
};

const getMember = async (memberId: string) => {
  const endPoint: EndPointType = 'members';
  const queries: TQuery[] = [
    {
      queryType: 'where',
      fieldPath: 'id',
      opStr: '==',
      value: memberId,
    },
  ];

  const [member] = await GetDataListQuery<IMember>({
    endPoint,
    queries,
  });
  return member;
};

export {
  getMembers,
  getMemberPositionList,
  getMemberBusinessFieldList,
  getMember,
};
