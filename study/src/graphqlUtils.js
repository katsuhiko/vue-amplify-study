import { API, graphqlOperation } from 'aws-amplify'

/**
 * GraphQL で登録するモデルに変換する。
 */
export const toUpdateModel = function (obj, itemType) {
  const model = []

  for (let key of Object.keys(obj)) {
    if (key === itemType) {
      model.push({
        id: obj[itemType],
        itemType: key,
        itemValue: JSON.stringify(obj)
      })
    } else {
      model.push({
        id: obj[itemType],
        itemType: key,
        itemValue: !obj[key] ? ' ' : obj[key]
      })
    }
  }

  return model
}

/**
 * モデルを登録・更新する。
 */
export const updateModel = async function (model, beforeObj, createMutation, updateMutation) {
  for (let input of model) {
    if (input.itemType in beforeObj) {
      await API.graphql(graphqlOperation(updateMutation, { input: input }))
    } else {
      await API.graphql(graphqlOperation(createMutation, { input: input }))
    }
  }
}

/**
 * GraphQL で削除するモデルに変換する。
 */
export const toDeleteModel = function (obj, itemType) {
  const model = []

  for (let key of Object.keys(obj)) {
    model.push({
      id: obj[itemType],
      itemType: key
    })
  }

  return model
}

/**
 * モデルを削除する。
 */
export const deleteModel = async function (model, beforeObj, deleteMutation) {
  for (let input of model) {
    if (input.itemType in beforeObj) {
      await API.graphql(graphqlOperation(deleteMutation, { input: input }))
    }
  }
}
