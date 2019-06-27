// eslint-disable
// this is an auto generated file. This will be overwritten

export const getStudyAttr = `query GetStudyAttr($id: ID!, $attr_type: String!) {
  getStudyAttr(id: $id, attr_type: $attr_type) {
    id
    attr_type
    attr_value
  }
}
`;
export const listStudyAttrs = `query ListStudyAttrs(
  $id: ID
  $attr_type: ModelStringKeyConditionInput
  $filter: ModelStudyAttrFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudyAttrs(
    id: $id
    attr_type: $attr_type
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      attr_type
      attr_value
    }
    nextToken
  }
}
`;
export const listStudyAttrsByType = `query ListStudyAttrsByType(
  $attr_type: String
  $attr_value: ModelStringKeyConditionInput
  $filter: ModelStudyAttrFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudyAttrsByType(
    attr_type: $attr_type
    attr_value: $attr_value
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      attr_type
      attr_value
    }
    nextToken
  }
}
`;
