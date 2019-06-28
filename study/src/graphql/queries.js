// eslint-disable
// this is an auto generated file. This will be overwritten

export const getStudyItem = `query GetStudyItem($id: ID!, $itemType: String!) {
  getStudyItem(id: $id, itemType: $itemType) {
    id
    itemType
    itemValue
  }
}
`;
export const listStudyItems = `query ListStudyItems(
  $id: ID
  $itemType: ModelStringKeyConditionInput
  $filter: ModelStudyItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudyItems(
    id: $id
    itemType: $itemType
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      itemType
      itemValue
    }
    nextToken
  }
}
`;
export const listStudyItemsByType = `query ListStudyItemsByType(
  $itemType: String
  $itemValue: ModelStringKeyConditionInput
  $filter: ModelStudyItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudyItemsByType(
    itemType: $itemType
    itemValue: $itemValue
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      itemType
      itemValue
    }
    nextToken
  }
}
`;
