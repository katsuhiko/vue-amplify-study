// eslint-disable
// this is an auto generated file. This will be overwritten

export const getStudyItem = `query GetStudyItem($id: ID!, $item_type: String!) {
  getStudyItem(id: $id, item_type: $item_type) {
    id
    item_type
    item_value
  }
}
`;
export const listStudyItems = `query ListStudyItems(
  $id: ID
  $item_type: ModelStringKeyConditionInput
  $filter: ModelStudyItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudyItems(
    id: $id
    item_type: $item_type
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      item_type
      item_value
    }
    nextToken
  }
}
`;
export const listStudyItemsByType = `query ListStudyItemsByType(
  $item_type: String
  $item_value: ModelStringKeyConditionInput
  $filter: ModelStudyItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudyItemsByType(
    item_type: $item_type
    item_value: $item_value
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      item_type
      item_value
    }
    nextToken
  }
}
`;
